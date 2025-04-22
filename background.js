// background.js
// background.js

// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "search") {
    // Handle the search request
    handleSearchRequest(request.query, request.url, sendResponse);
  }
});

// Define a function to handle the search request
function handleSearchRequest(query, url, sendResponse) {
  // Open the search result in a new tab
  chrome.tabs.create({ url: url + encodeURIComponent(query) });
  sendResponse({ message: "Search result opened in a new tab." });
}

// This is where you would put your background script code
// For now, we're just logging a message to the console
// console.log('Background script running');
