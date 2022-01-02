chrome.runtime.onInstalled.addListener(() => {
  // chrome.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
  //   const tab = tabs[0];
  //   chrome.scripting.executeScript({
  //     target: { tabId: tab.id },
  //     function: injectedFunction
  //   });
  // });

  // chrome.downloads.download(
  //   {
  //     url: "",
  //     filename: "test.mp4"
  //   },
  //   (downloadId) => {
  //     console.log(downloadId);
  //   },
  // )

  chrome.runtime.onConnect.addListener(function (port) {
    console.assert(port.name === "knockknock");
    port.onMessage.addListener(function (msg) {
      if (msg.joke === "Knock knock") {
        console.log(msg);
      };
    });
  });
});

// function setPageBackgroundColor() {
//   console.log('hello');
// }