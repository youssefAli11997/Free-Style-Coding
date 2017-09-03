$(function(){

  chrome.storage.sync.get(['total','limit'], function(budget){
    $('#total').text(budget.total);
    $('#limit').text(budget.limit);
  });

  $('#spendAmount').click(function(){
      chrome.storage.sync.get(['total','limit'], function(budget){
        var newTotal = 0;
        if(budget.total){
          newTotal += parseInt(budget.total);
        }
        var amount = $('#amount').val();
        if(amount){
          newTotal += parseInt(amount);
        }

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
            if(amount && newTotal == budget.limit){
              chrome.notifications.create('limitNotif', notifOptions);
            }
            if(amount && newTotal > budget.limit){
              chrome.notifications.create('limitNotif', notifOptions2);
            }
        });

        $('#total').text(newTotal);
        $('#amount').val('');
    });
  });
});
