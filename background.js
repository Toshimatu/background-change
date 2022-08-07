// background.js

let color = '#87ceeb';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cskyblue', `color: ${color}`);
});