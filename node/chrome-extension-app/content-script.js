// const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

chrome.runtime.onMessage.addListener(
    async (request, sender, sendResponse) => {
        const json = await (await fetch(request.url)).json();
        console.log(json);
        sendResponse();
        return true;
    }
);

// let cacheSrc = '';

// const scrollToBottom = async (distance = 100, delay = 400) => {
//     while (document.scrollingElement.scrollTop + window.innerHeight < document.scrollingElement.scrollHeight) {
//         document.scrollingElement.scrollBy(0, distance)
//         await _sleep(delay);
//         const videoElement = document.querySelector('video');
//         if (videoElement === null) {
//             continue;
//         }
//         const src = videoElement.getAttribute('src');
//         if (src === cacheSrc) {
//             continue;
//         }
//         const blob = await (await fetch(src)).blob();
//         const urlObject = new URL(src);
//         const fileName = `${urlObject.pathname.split('/').filter((s) => s != "").join('-')}.mp4`;
//         const form = new FormData();
//         form.append('files', blob, `video-${fileName}`);
//         await fetch("http://localhost:3000", {
//             method: "POST",
//             body: form,
//         });
//         cacheSrc = src;
//     }
// }

// scrollToBottom();