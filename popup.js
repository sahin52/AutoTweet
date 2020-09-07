// var app = chrome.runtime.getBackgroundPage();

function hello() {	
  chrome.tabs.executeScript({
    file: 'altogether.js'
  }); 
}

document.getElementById('clickme').addEventListener('click', hello);
//document.getElementById('stopTwitterSearchFollow').addEventListener('click', hello);


