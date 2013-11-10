// Calls the cloud_replace.js script on the browser action.
chrome.browserAction.onClicked.addListener(function (tab) {
	chrome.tabs.executeScript({
		code: 'document.body.innerHTML = document.body.innerHTML.replace(new RegExp(/cloud/gi), "unicorn")'
	});
});
