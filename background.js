console.log("sdfsdf");
const onInstalled = () => {
  const contexts = ['page', 'selection', 'link', 'image']
  for (const context of contexts) {
    const title = `Share ${context} on Twitter`
    chrome.contextMenus.create({ title, contexts: [context], id: context })
  }
}
chrome.runtime.onInstalled.addListener(onInstalled)
chrome.contextMenus.onClicked.addListener(contextMenus)
chrome.browserAction.onClicked.addListener(browserAction)

