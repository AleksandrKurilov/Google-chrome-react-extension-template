export const saveOptions = (key, value) => {
  chrome.storage.sync.set({[key]: value});
}
  
export const restoreOptions = (key, callback) => {
  chrome.storage.sync.get(key, callback);
}

export const clearOptions = () => chrome.storage.sync.clear();