console.log("sdfsdf");

const tweet = async (url, title = '') => {
  const resource = new URL('https://twitter.com')
  const compose = new URL('compose/tweet', resource)
  const login = new URL('login', resource)
  const intent = new URL('intent/tweet', resource)

  compose.searchParams.append('text', title)
  compose.searchParams.append('url', url)

  login.searchParams.append('redirect_after_login', compose.href)

  intent.searchParams.append('text', title)
  intent.searchParams.append('url', url)

  let endpoint = intent.href

  await fetch(compose).then((resp) => {
    if (resp.ok) endpoint = compose.href
    else if (resp.status == 404) {
      chrome.cookies.set({ name: 'rweb_optin', url: 'https://twitter.com', value: 'on' })
      endpoint = login.href
    }
  })

  chrome.tabs.create({ url: endpoint })
}
const onInstalled = () => {
  const contexts = ['page', 'selection', 'link', 'image']
  for (const context of contexts) {
    const title = `Share ${context} on Twitter`
    chrome.contextMenus.create({ title, contexts: [context], id: context })
  }
  console.log("onIstanlled");
}
const browserAction = (tab) => {
  chrome.tabs.executeScript({ code: 'window.getSelection().toString();' }, ([selection]) =>
    tweet("", "mutlu olsak adapte olamayız bu saatten sonra")
  )
  console.log("browser action");
}
const contextMenus = (data, tab) => {
  console.log("context menus");
  if ('page' == data.menuItemId) tweet(data.pageUrl, tab.title)
  if ('link' == data.menuItemId) tweet(data.linkUrl)
  if ('selection' == data.menuItemId) tweet(tab.url, data.selectionText)
  if ('image' == data.menuItemId) tweet(data.srcUrl)
}
chrome.runtime.onInstalled.addListener(onInstalled)
chrome.contextMenus.onClicked.addListener(contextMenus)
chrome.browserAction.onClicked.addListener(browserAction)

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if(message.closeThis) chrome.tabs.remove(sender.tab.id);
});