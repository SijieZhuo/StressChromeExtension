var tabCount = 0; 
var activeTabURL = "url";
var activeTabHostName = "hostname";
var time = "time";
var tabid = "id";
var tabTitle = "title";

var listener = "http://localhost:12000/";

chrome.runtime.onInstalled.addListener(function() {
   /* chrome.storage.sync.set({"isStart" : false}, function(){
        console.log("isStart = "+false);
    })*/
    var entryCount = 0;
    var heading = "time,numberOfTabs,url,hostname,tabTitle,tabID\n";
    chrome.storage.sync.set({"logData" : heading}, function(){
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
    chrome.storage.sync.set({"entryCountStorage" : 0}, function(){
        console.log("Entry count = "+entryCount);
    });
    chrome.storage.sync.set({"posttaskquestionnaire" : ""}, function(){
        console.log("posttaskquestionnaire cleared");
    });
    chrome.storage.sync.set({"multitaskingindex" : ""}, function(){
        console.log("multitaskingindex cleared");
    });
});

chrome.tabs.onActivated.addListener(function(activeInfo) {
    chrome.tabs.getSelected(null, function(tab){
        let e = chrome.runtime.lastError;
        if(e !== undefined){
            console.log(e);
        }else{
            //get url
            var url = new URL(tab.url);
            //get number of tabs
            numberOfTabs();
            //get url
            activeTabURL = tab.url;
            //get hostname
            activeTabHostName = url.hostname;
            //get tab id
            tabid=tab.id;
            //get get tab title
            tabTitle=tab.title;
            tabTitle=tabTitle.replace(/,/g, '');
            updateLoggingData();
        }
    })  
});
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
    if(tab.url !== undefined && changeInfo.status == "complete") {
        let e = chrome.runtime.lastError;
        if(e !== undefined){
            console.log(e);
        }else{
            //get url
            var url = new URL(tab.url);
            //get number of tabs
            numberOfTabs();
            //get url
            activeTabURL = tab.url;
            //get hostname
            activeTabHostName = url.hostname;
            //get tab id
            tabid=tab.id;
            //get get tab title
            tabTitle=tab.title;
            tabTitle=tabTitle.replace(/,/g, '');
            updateLoggingData();
        } 
    }
});

function getCurrentTimestamp(){
    var date = new Date();

    var s = date.toISOString();
    var s1 = s.replace(/-/g,"/");
    var s2 = s1.replace("T","_");
    
    var firstHalf = s2.substring(0, s2.lastIndexOf('_')+1);
    var secondHalf = s2.substring(s2.lastIndexOf('_')+3,s2.length-1);

	var output = firstHalf + date.getHours() + secondHalf;

    return output;
}
function logTabIdUrl(tabId, hostname){
    console.log(getCurrentTimestamp() + "TabId: " + tabId + " Hostname: " + hostname);
}
function updateLoggingData(){
    //chrome.storage.sync.get("isStart", function(items) {    
    //    var start = items.isStart;
    //    console.log(start);
        //if(start == true){
            var isLog = activeTabURL.slice(activeTabURL.length-8)!="log.html";
            if(isLog){/*
                chrome.storage.sync.get("logData", function(items) {
                    var log = items.logData;
                    log = log+getCurrentTimestamp()+","+tabCount+","+activeTabURL+","+activeTabHostName+","+tabTitle+","+tabid+"\n"; 
                    chrome.storage.sync.set({"logData" : log}, function(){
                        console.log("logging data\n"+log);
                    });
                });*/
                var logObject = {};
                var log = getCurrentTimestamp()+","+tabCount+","+activeTabURL+","+activeTabHostName+","+tabTitle+","+tabid+"\n"; 
                chrome.storage.sync.get("entryCountStorage", function(x) {
                    var count = x.entryCountStorage;
                    var entryCountString="logEntry"+count;
                    logObject[entryCountString]=log; 
                    chrome.storage.sync.set(logObject, function(){
                        console.log("logging data\n"+entryCountString+": "+log);
                        send(log);
                        count++;
                        chrome.storage.sync.set({"entryCountStorage" : count}, function(){
                            console.log("updating entry count: "+count);
                        });
                    });
                });
            }
        //}
    //});
}
function numberOfTabs(){
    chrome.tabs.query({}, function(tabs){
        tabCount = tabs.length;
    });
}

function send(data){

var encodeString = btoa(data);

   
    console.log("sending data: " + encodeString);
    $.post(listener, encodeString);
}
