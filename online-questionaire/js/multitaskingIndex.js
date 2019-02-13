$(document).ready(function(){
    $("#mtiSubmitButton").click(function(){ 
        var mti="#"+$("#mtilbl").text()+"\n";
        var mtiMax = 110;
        var i;
        for(i=0;i<mtiMax;i++){
            var mtiItem = "mti"+i;
            mti+=$("#"+mtiItem).val()+"\n";
        }
        chrome.storage.sync.set({"multitaskingindex" : mti}, function(){
        });
        //next page
        window.location.href = "../html/thankyou.html";
    });
});