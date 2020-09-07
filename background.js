var beklemealtsinir=35000;
var beklemeustsinir=55000;
var kucukbeklemealtsinir=1000;
var kucukbeklemeustsinir=3000;
var tamam =0;
chrome.runtime.onConnect.addListener(function(port) {
  console.assert(port.name == "knockknock");
port.onMessage.addListener(function(msg) {
    console.log("mesajjj");
    if (msg.joke == "BastanBaslat"){
      var x=Math.floor((Math.random() * (beklemeustsinir- beklemealtsinir)+beklemealtsinir)/2);
      setTimeout(firstwaiting, x, port);
      console.log("ilk bekleme");
    }
    else if (msg.joke == "Baslat"){
      var x=Math.floor((Math.random() * (beklemeustsinir- beklemealtsinir)+beklemealtsinir)/2);
      setTimeout(firstwaiting, x, port);
      console.log("ilk bekleme");
    }
    else if (msg.answer == "ok"){
	    console.log("ilk tiklama tamam");
      var x=Math.floor((Math.random() * (kucukbeklemeustsinir- kucukbeklemealtsinir)+kucukbeklemealtsinir)/2);
      setTimeout(okozaman, 1000, port);
      
    }
    else if (msg.answer == "takip edildi"){
    	var x=Math.floor((Math.random() * (beklemeustsinir- beklemealtsinir)+beklemealtsinir)/2);
    	console.log(x);
      setTimeout(devam, x, port);
      	
    	console.log("takip edildi");
      	
      
    }
    else if(msg.answer=="takip edilmedi"){
      console.log("takip edilmedi");
      port.postMessage({question:"Devam"})
    }



  });
});


function firstwaiting(port) {
  port.postMessage({question: "ilk bekleme"});
  console.log("ilk beklendi");
}
function okozaman(port){
  port.postMessage({question: "ok followla o zaman"});
  console.log("ok followla o zaman");
}
function devam(port){
  port.postMessage({question: "Devam"});
  console.log("devam");
}
