# Spanning Chrome Extensions in Incognito Tabs

## Issue description

See [StackOverflow](https://stackoverflow.com/questions/74346954/web-extension-chrome-runtime-sendmessage-not-working-in-incognito-tabs)

## Reproduction steps
1) Clone this repo and load it as an unpacked developer extension, enable it for use in incognito mode
2) Go to any page and open the dev tools, go to the extension bug tab
3) Click on the button

    => Event is properly logged

7) Enable extension in incognito mode
4) Open any page in an incognito tab, open the dev tools tab and click the button again

    => Error is thrown:
    > Uncaught (in promise) Error: Could not establish connection. Receiving end does not exist.