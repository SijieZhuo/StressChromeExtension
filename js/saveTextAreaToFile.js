function saveLog() {
    var textToWrite = document.getElementById('log').innerHTML;
    var textFileAsBlob = new Blob([ textToWrite ], { type: 'text/plain' });
    var fileNameToSaveAs = 'chrome-logs.csv';

    this.saveToFile(textFileAsBlob, fileNameToSaveAs);    
}

function saveQuestionnaire(){
    var textToWrite = document.getElementById('answers').innerHTML;
    var textFileAsBlob = new Blob([ textToWrite ], { type: 'text/plain' });
    var fileNameToSaveAs = 'questionnaire.txt';

    this.saveToFile(textFileAsBlob, fileNameToSaveAs);
}

function saveToFile(textFileAsBlob, fileNameToSaveAs){
    // source: https://stackoverflow.com/questions/21479107/saving-html5-textarea-contents-to-file/30740104 
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null) {
      // Chrome allows the link to be clicked without actually adding it to the DOM.
      downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
      // Firefox requires the link to be added to the DOM before it can be clicked.
      downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
      downloadLink.onclick = destroyClickedElement;
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);
    }

    downloadLink.click();
}

$(document).ready(function(){
    //document.getElementById("saveLogToFile").onclick = function() {saveLog()};
    //document.getElementById("saveQuestionnaireToFile").onclick = function() {saveQuestionnaire()};
});