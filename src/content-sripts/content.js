(() => {
  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.message)
        alert(request.message);
    }
  );
})();
