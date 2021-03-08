export const sendToActiveTab = (data, responseCallback) => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
    {
        chrome.tabs.sendMessage (
            tabs[0].id,
            data,
            responseCallback
        )
    });
}

export const sendToBackgroundScript = (data, responseCallback) => {
    chrome.runtime.sendMessage(
        data,
        responseCallback
    )
}