$(document).ready(function(){
    //degree selection
    $("#otherDegree").hide();
    $(".degreebtn").change(function() {
        if ($("input[name=degree]:checked").val() == "Other") {
            $("#otherDegree").show();
        }else{
            $("#otherDegree").hide();
        }
    });

    //keypresses for answer boxes
    $(".answerBox").keypress(function() {
        var h = $('.answerBox').val();
        chrome.storage.sync.set({"hypothesis" : h}, function(){
        });
    });
    //next button and storing data
    $("#hypothesisSubmitButton").click(function(){
        var ptq=""; //post task questionnaire
        //degree, age and gender
        var degree;
        degree = "#"+$("#degreelbl").text()+"\n";
        if ($("input[name=degree]:checked").val() == "Other") {
            degree=degree+$("#otherDegree").val();
        }else{
            degree=degree+$("input[name=degree]:checked").val();
        }
        var age="#";
        age+=$("#agelbl").text()+"\n"+$("#participantAge").val();
        var gender="#";
        gender+=$("#genderlbl").text()+"\n"+$("#participantGender").val();
        var info=degree+"\n"+age+"\n"+gender+"\n";
        ptq+=info;
        //familiarity affecting performance
        var fam="#"+$("#familiaritylbl").text()+"\n"+$("input[name=familiarity]:checked").val()+"\n";
        ptq+=fam;
        //affected
        var affected= "#"+$("#participantAffectedlbl").text()+"\n"+$("#participantAffected").val()+"\n";
        ptq+=affected;
        //experience with eclipse
        var exp = "#"+$("#participantExperiencelbl").text()+"\n"+$("#participantExperience").val()+"\n";
        ptq+=exp;
        //scale
        var scale = "#"+$("#mentalDemandlbl").text()+"\n"+$("#mentalDemand").val()+"\n";
        scale+="#"+$("#physicalDemandlbl").text()+"\n"+$("#physicalDemand").val()+"\n";
        scale+="#"+$("#temporalDemandlbl").text()+"\n"+$("#temporalDemand").val()+"\n";
        scale+="#"+$("#performancelbl").text()+"\n"+$("#performance").val()+"\n";
        scale+="#"+$("#effortlbl").text()+"\n"+$("#effort").val()+"\n";
        scale+="#"+$("#frustrationlbl").text()+"\n"+$("#frustration").val()+"\n";
        ptq+=scale;
        //store hypothesis
        var h ="#"+$("#hypothesislbl").text()+"\n";
        h+=$("#hypothesis").val()+"\n";
        ptq+=h;
        chrome.storage.sync.set({"posttaskquestionnaire" : ptq}, function(){
        });
        //next page
        window.location.href = "../html/multitaskingIndex.html";
    });
});