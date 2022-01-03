const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const port = chrome.runtime.connect({ name: "connection_name" });
let cacheSrc = '';

const scrollToBottom = async (distance = 100, delay = 400) => {
    while (document.scrollingElement.scrollTop + window.innerHeight < document.scrollingElement.scrollHeight) {
        document.scrollingElement.scrollBy(0, distance)
        await _sleep(delay);
        const videoElement = document.querySelector('video');
        if (videoElement === null) {
            continue;
        }
        const src = videoElement.getAttribute('src');
        if (src !== cacheSrc) {
            console.log(src);
            port.postMessage({ videoURL: src });
            cacheSrc = src;
        }
    }
}

scrollToBottom();