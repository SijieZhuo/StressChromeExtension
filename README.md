# MonitorPlugin (Referenced)

## What is MonitorPlugin?
MonitorPlugin is a Google Chrome extension which records the browser activity of users in Google Chrome.

MonitorPlugin was referenced from a part 4 software engineering student, and the link is the following: 
https://github.com/rtan265/MonitorPlugin

## Development Setup
We recommend using Visual Studio Code when contributing to MonitorPlugin
1. Clone this repository
2. Contribute 

## Software Installation
1. Download the zip from the link above and unzip it
2. Go to "chrome://extensions/" using Google Chrome
3. Click on the "Load unpacked"
4. browse to the location of the file
5. the logging would start once the extension is installed, and will stop after it is uninstalled

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
