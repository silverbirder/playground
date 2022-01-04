// chrome.runtime.onInstalled.addListener(() => {
//   chrome.runtime.onConnect.addListener((port) => {
//     console.assert(port.name === 'tiktok');
//     port.onMessage.addListener((message) => {
//       const videoURL = message.videoURL;
//       fetch(videoURL).then(async (res) => {
//         const blob = await res.blob();
//         const urlObject = new URL(videoURL);
//         const fileName = `${urlObject.pathname.split('/').join('-').trim('-')}.mp4`;
//         const form = new FormData();
//         form.append('files', blob);
//         form.append('name', fileName);
//         await fetch("http://localhost:3000", {
//           method: "POST",
//           body: form,
//         });
//       });
//     });
//   });
// });