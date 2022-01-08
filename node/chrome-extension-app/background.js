let _cacheUrl = '';
chrome.runtime.onInstalled.addListener(() => {
    chrome.webRequest.onCompleted.addListener(
        async (details) => {
            if (!/item_list/.test(details.url)) {
                return;
            }
            if (_cacheUrl === details.url) {
                return;
            }
            const tab = await getCurrentTab();
            chrome.tabs.sendMessage(tab.id, details, (response) => { });
            _cacheUrl = details.url;
        },
        {
            urls: [
                "https://www.tiktok.com/*"
            ]
        },
        ["responseHeaders"]
    );
});

const getCurrentTab = async () => {
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}