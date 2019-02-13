# MonitorPlugin (Referenced)

## What is MonitorPlugin?
MonitorPlugin is a Google Chrome extension which records the browser activity of users in Google Chrome. This extension also provides access to a questionnaire use for a study that investigates the affects of code quality on programmer behaviour.

MonitorPlugin was developed for our Part 4 Software Engineering Research Project.


## Development Setup
We recommend using Visual Studio Code when contributing to MonitorPlugin
1. Clone this repository
2. Contribute 

## MonitorPlugin Functionalities
### Logging
Once MonitorPlugin is installed, it immediately starts logging browswer activity. MonitorPlugin logging can only be stopped by uninstalling the extension or if the memory limit of ~100KB worth of information has been logged.

Monitor plugin tracks:
- Timestamps of activity
- Number of tabs currently open
- URL of currently viewed tab
- Hostname of currently viewed tab
- Tab Title of currectly viewed tab
- TabID of currently viewed tab

### Questionnaire
MonitorPlugin allows access to the questionnaire used for our research project. This can be accessed by clicking the MonitorPlugin Icon on your Chrome browser and clicking "Questionnaire"

### Accessing Collected Data
To access the data collected by MonitorPlugin, an invisible button exists near the bottom-left corner of the "Questionnaire" button which can be clicked:

![https://i.imgur.com/fUXjreU.png](https://i.imgur.com/fUXjreU.png)

A page will open that shows the logged browser activity and questionnaire responses. These can be downloaded as .txt files by clicking the "Save Log" or "Save Questionnaire" buttons. Logs and responses can be reset by clicking the "Reset" button at the bottom of the page
