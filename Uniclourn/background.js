// Calls the cloud_replace.js script on the browser action.
chrome.browserAction.onClicked.addListener(function (tab) {
	chrome.tabs.executeScript(null, {
		file: "cloud_replace.js"
	});
});
