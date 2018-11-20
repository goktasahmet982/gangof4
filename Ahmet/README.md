# Getting started with your own Node Site

+ Create a subfolder under your Github user folder called nodeSite
+ Switch to this directory in the command console
+ Run "npm init" to setup your package.json
+ install npm dependencies 

```console
npm install express --local
npm install body-parser --local
npm install fs --local
npm install cors --local
npm install moment --local
npm install body-parser --local
```

## Setting up for Debuggging

+ go to your debug pane, and select the dropdown on next to the green right arrow -- select "Add Configuration"
+ Select **Node Launch program**
+ You should see something like this added to your **launch.json**

```json
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "program": "${workspaceFolder}/app.js"
        },
```

+ Modify to the following (remember your path to server.js may include your user folder)
  
```json
        {
            "type": "node",
            "request": "launch",
            "name": "Run Node on server.js",
            "program": "${workspaceFolder}/nodeServer/server.js"
        },
```

If you are setup properly, when you run Debugger --> Run node on server.js, you will get a response like

## Charting Data

+ Go to this site <http://www.chartjs.org/docs/latest/getting-started/installation.html>
+ Notice the CDN for the chart.bundle.js - this is what has been added as a script link
+ Review the link <http://www.chartjs.org/docs/latest/getting-started/usage.html> to see how it is used
+ Note we added a canvas to our page
```html
<canvas id="myChart" width="400" height="400"></canvas>
```

## Open the ajaxworkspace.html file in Chrome

+ Go to <http://localhost:8080/ajaxworkbench.html>
+ Click on the

```console
Example app listening at http://127.0.0.1:8080
```
## Submitting your work

 You should be able to run the Node Server from VS Code in the debugger, set breakpoints in the server.js methods for app.get / app.set, etc. and see them hit when you try the server from either a web page or Postman.

Use this server.js as your starting point, and modify or add get / post / delete and put methods, and create a page that can call each with a button press.

Follow the instructions on the Readme.md page and put the server.js, and web page files in your individual student subfolders of your team git repository.

In this folder, place a readme.md that describes what you did, and any questions or comments you have, and submit the github link to this page.

For example, if the page you are reading now is your submission, you might 'submit' the following URL to canvas:

<https://github.com/Rainman21/ITS562/blob/master/nodeServer/README.md>

Inside your readme, you can link to your submissions as well, either by their github 'source' link (like above), or the github 'html site' link (if it is a web page)


## Tips

### Node Modules

+ Don't forget - if you get a project folder from Git, it may already have a package.json, which specifies the node modules youn need, but it won't have fetched them yet...
+ To fetch your node modules (install from the web) type

```console
npm init
```

### Markdown Cheatsheat

<https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet>
