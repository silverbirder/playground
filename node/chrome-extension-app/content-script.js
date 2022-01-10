// from background.js
chrome.runtime.onMessage.addListener(
    async (request, sender, sendResponse) => {
        console.log('from background.js');
        const json = await (await fetch(request.url)).json();
        process(json.itemList);
        sendResponse();
        return true;
    }
);

// from web_accessible_resources.js
window.addEventListener('message', (event) => {
    if (event.data.type && event.data.type == "FROM_PAGE") {
        console.log('from web_accessible_resources.js');
        const details = event.data.details;
        process(Object.values(details));
    }
});

const injectScript = (filePath, tag) => {
    var node = document.getElementsByTagName(tag)[0];
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', filePath);
    node.appendChild(script);
}

const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const process = (data) => {
    console.log(data);
    // const blob = await (await fetch(src)).blob();
    // const urlObject = new URL(src);
    // const fileName = `${urlObject.pathname.split('/').filter((s) => s != "").join('-')}.mp4`;
    // const form = new FormData();
    // form.append('files', blob, `video-${fileName}`);
    // await fetch("http://localhost:3000", {
    //     method: "POST",
    //     body: form,
    // });
    // });
}

const scrollToBottom = async (distance = 100, delay = 400) => {
    while (document.scrollingElement.scrollTop + window.innerHeight < document.scrollingElement.scrollHeight) {
        document.scrollingElement.scrollBy(0, distance)
        await _sleep(delay);
    }
}

injectScript(chrome.runtime.getURL('web_accessible_resources.js'), 'body');

scrollToBottom();