// const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// const scrollToBottom = async (distance = 100, delay = 400) => {
//     while (document.scrollingElement.scrollTop + window.innerHeight < document.scrollingElement.scrollHeight) {
//         document.scrollingElement.scrollBy(0, distance)
//         await _sleep(delay);
//         console.log(document.querySelector('video').getAttribute('src'));
//     }
// }

// scrollToBottom();

var port = chrome.runtime.connect({ name: "knockknock" });
port.postMessage({ joke: "Knock knock" });