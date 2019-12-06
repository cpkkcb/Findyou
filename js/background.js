chrome.tabs.onActivated.addListener(function (activeInfo) {
    if (activeInfo.tabId) {
        chrome.tabs.get(activeInfo.tabId, function (tab) {
            

            chrome.browserAction.setBadgeText({text:""});
                    chrome.browserAction.setBadgeBackgroundColor({color: [190, 190, 190, 255]});

        });
    }
});
chrome.runtime.onMessage.addListener(  function(request, sender, sendResponse) { 


for(b=1;b<10000;b++){
 if (request.cmd== b ) {


      sendResponse( "检索完毕"); 
        chrome.browserAction.setBadgeText({text: b.toString()});
chrome.browserAction.setBadgeBackgroundColor({color: [255, 0, 0, 255]});
    //敏感词超过15个，badge则显示more
if(b>15)
{
   chrome.browserAction.setBadgeText({text:"more"});
}
 
}

}
if (request.cmd== "no") {

      sendResponse( "ok"); 
  chrome.browserAction.setBadgeText({text: ''});
chrome.browserAction.setBadgeBackgroundColor({color: [190, 190, 190, 255]});
}

  
  });