$(function(){
  var hexColor = $('#color').val();
  $('#color').on("change paste keyup", function(){
    hexColor = $(this).val();
  });

  $('#btnChange').click(function(){
    chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
      chrome.tabs.sendMessage(tabs[0].id, {todo: "changeColor", value: hexColor});
    });
    //chrome.runtime.sendMessage({todo: "changeColor", value: hexColor});
  });
});
