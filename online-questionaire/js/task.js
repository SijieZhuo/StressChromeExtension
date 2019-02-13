$(document).ready(function(){
    $("#doneButton").click(function(){ 
        window.location.href = "../html/end.html";
        var a1 =  $('#a1').val();
        var a2 =  $('#a2').val();
        var a3 =  $('#a3').val();
        var a4 =  $('#a4').val();
        var userAnswers = "#"+$('#q1').text()+"\n"+a1+"\n"+"#"+$('#q2').text()+"\n"+a2+"\n"+"#"+$('#q3').text()+
            "\n"+a3+"\n"+"#"+$('#q4').text()+"\n"+a4+"\n";
        chrome.storage.sync.set({"answerData" : userAnswers}, function(){
        });
    });/*
    $(".answerBox").keyup(function() {
       // chrome.storage.sync.get("questionnaireData", function(items) {
            var a1 =  $('#a1').val();
            var a2 =  $('#a2').val();
            var a3 =  $('#a3').val();
            var a4 =  $('#a4').val();
            var userAnswers = "#"+$('#q1').text()+"\n"+a1+"\n"+"#"+$('#q2').text()+"\n"+a2+"\n"+"#"+$('#q3').text()+
            "\n"+a3+"\n"+"#"+$('#q4').text()+"\n"+a4+"\n";
            chrome.storage.sync.set({"answerData" : userAnswers}, function(){
            });
       // });
    });*/
});