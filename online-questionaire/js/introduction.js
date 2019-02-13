$(document).ready(function(){
    $("#startButton").click(function(){ 
        var pid = $('#participantid').val()
        chrome.storage.sync.set({"id" : pid}, function(){
        });
        window.location.href = "../html/task.html";
    });
   // $("#participantid").keypress(function() {
       // chrome.storage.sync.get("questionnaireData", function(items) {
            
       // });
   // });
});