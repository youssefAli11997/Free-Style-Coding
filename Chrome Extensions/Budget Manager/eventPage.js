var contextMenuItem = {
  id: "spendMoney",
  title: "Spend Money",
  contexts: ["selection"]
};

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function(clickData){
  if(clickData.menuItemId == contextMenuItem.id && clickData.selectionText){
    if(Number.isInteger(parseInt(clickData.selectionText))){
      chrome.storage.sync.get(['total','limit'], function(budget){
        var newTotal = 0;
        if(budget.total)
          newTotal += parseInt(budget.total);
        newTotal += parseInt(clickData.selectionText);
        chrome.storage.sync.set({'total': newTotal}, function(){
          var notifOptions = {
            type: "basic",
            iconUrl: "icon48.png",
            title: "Limit Reached!",
            message: "Uh oh! You've reached your limit!"
          };
          var notifOptions2 = {
            type: "basic",
            iconUrl: "icon48.png",
            title: "Limit Exceeded!",
            message: "Uh oh! You've exceeded your limit"
          };
          if(newTotal == budget.limit){
            chrome.notifications.create('limitNotif', notifOptions);
          }
          else if(newTotal > budget.limit){
            chrome.notifications.create('limitNotif', notifOptions2);
          }
        });
      });
    }
  }
});

chrome.storage.onChanged.addListener(function(changes, storageName){
  chrome.browserAction.setBadgeText({'text': changes.total.newValue.toString()});
});
