//contentScript.js
// contentScript.js

// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "search") {
    // Perform the search
    sendResponse(search(request.query));
  }
});

// Define a function to perform the search
function search(query) {
  // For demonstration purposes, just return a list of results
  return ["Result 1", "Result 2", "Result 3"];
}

// Listen for keyboard events
document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    // Send a message to the background script to perform the search
    chrome.runtime.sendMessage({ action: "search", query: document.getElementById("search-input").value });
  }
});
