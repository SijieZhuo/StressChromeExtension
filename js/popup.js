$(document).ready(function(){
   /* $("#startButton").click(function(){ 
        chrome.storage.sync.set({"isStart" : true}, function(){
            console.log("isStart = "+true);
            alert("Log start!");
        })
    }); 
    $("#stopButton").click(function(){ 
        chrome.storage.sync.set({"isStart" : false}, function(){
            console.log("isStart = "+false);
            alert("Log STOP!");
        })
    }); */
    $("#logButton").click(function(){ 
        window.open("../html/log.html");
    });
    $("#questionnaireButton").click(function(){ 
        window.open("../online-questionaire/html/introduction.html");
    });
});