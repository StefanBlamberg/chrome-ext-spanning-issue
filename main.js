function onMessageFromContentScript(message) {
  // Display the received message id and detach
  chrome.runtime.onMessage.removeListener(onMessageFromContentScript);
  const el = document.createElement("p");
  el.innerText = message.id;
  document.body.appendChild(el)
}

async function injectContentScript() {
  chrome.runtime.onMessage.addListener(onMessageFromContentScript);
  const tabId = chrome.devtools.inspectedWindow.tabId;
  // Inject content script
  await chrome.scripting.executeScript({
    func: () => {
      // From the context of the content script, send a message
      // If "incognito" is set to "split", the message will reach
      // onMessageFromContentScript, otherwise not
      chrome.runtime.sendMessage({
        id: "injected"
      });
    },
    target: {
      tabId,
    }
  });
}

document.getElementById("inject").addEventListener("click", injectContentScript);