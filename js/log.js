var completeLog = "";
$(document).ready(function(){
    $("#resetButton").click(function(){
        alert("Log cleared");
        $("#log").html("");
        $("#answers").html("");/*
        chrome.storage.sync.set({"logData" : ""}, function(){
            console.log("log cleared");
        });
        chrome.storage.sync.set({"answerData" : ""}, function(){
            console.log("answers cleared");
        });
        chrome.storage.sync.set({"id" : ""}, function(){
            console.log("id cleared");
        });
        chrome.storage.sync.set({"hypothesis" : ""}, function(){
            console.log("hypothesis cleared");
        });
        
        chrome.storage.sync.set({"posttaskquestionnaire" : ""}, function(){
            console.log("posttaskquestionnaire cleared");
        });
        chrome.storage.sync.set({"multitaskingindex" : ""}, function(){
            console.log("multitaskingindex cleared");
        });*/
        chrome.storage.sync.clear();
        chrome.storage.sync.set({"entryCountStorage" : 0}, function(){
            console.log("Entry count = "+0);
        });
    });
    /*
    chrome.storage.sync.get("logData", function(items) {
        $("#log").html(items.logData);
    });*/
    chrome.storage.sync.get("entryCountStorage", function(count) {
        chrome.storage.sync.get(null, function(items) {
            var i;
            for(i=0;i<count.entryCountStorage;i++){
                for (key in items) {
                    var keyString = key+"";
                    var subStringOfKey = keyString.substring(0,8);
                    if(keyString=="logEntry"+i){
                        //console.log(key+": "+items[key]+"\n");
                        completeLog=completeLog+items[key];
                        $("#log").html("time,numberOfTabs,url,hostname,tabTitle,tabID\n"+completeLog);
                    }
                }
            }
            //console.log("COMPLETE LOG\n"+completeLog);
         });
    });/*
    chrome.storage.sync.get("id", function(items) {
        var text = "ID\n"+items.id;
        chrome.storage.sync.get("answerData", function(items) {
            text=text+"\n"+items.answerData;
            chrome.storage.sync.get("hypothesis", function(items) {
                text=text+"\n"+"Hypothesis"+"\n"+items.hypothesis;
                $("#answers").html(text);
            });
        });
    });*/
    chrome.storage.sync.get(null, function(items){
        var text="";
        //get entries
        /*
        var storageItems=[];
        var count = 0;
        for(key in items){
            var keyString = key+"";
            var subStringOfKey = keyString.substring(0,8);
            if(subStringOfKey!="logEntry"){ //check if not log entry
                storageItems[count]=items[key];
            }
            count++;
        }*/
        //get id
        text+="#ID\n";
        for(key in items){
            if(key=="id"){
                text+=items[key]+"\n";
                break;
            }
        }
        //task answer data
        for(key in items){
            if(key=="answerData"){
                text+=items[key];
                break;
            }
        }
        //post-task questionnaire data
        for(key in items){
            if(key=="posttaskquestionnaire"){
                text+=items[key];
                break;
            }
        }
        //multitasking index
        for(key in items){
            if(key=="multitaskingindex"){
                text+=items[key];
                break;
            }
        }
        $("#answers").html(text);
    });
});