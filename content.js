let oldparagraphs;
var buelemandahaonceyapildi=0;
var kacincielemandadurupmesajyolla = 25;
var beklemeustsinir = 2000;
var beklemealtsinir = 500;
var takipediyorsabeklemesuresi = 100;
var nekadarkaydir = 500;
var takipedilmiskisisayisi = 0;
var totaltakipedilen=0;
var kor=0;
var tekseferdetakipedilecekkisi=6;
var tekrardanbaslanacakdenemesayisi = 8;
var denemesayisi = 0;
var port = chrome.runtime.connect({name: "knockknock"});
var asagi=0;


console.log("AUTO follow extension");

port.postMessage({joke: "Baslat"});
port.onMessage.addListener(function(msg) {
  	if (msg.question == "ilk bekleme"){
  		//console.log("BASLA");
	  	
	  	//MOR-ORTA BUYUKLUK YAZILAR-LOS--BUNLARIN ETKISI YOK GIBI GORUNUYOR AMA RISKE GEREK YOK
	  	//YAZI DILI TURKCE
	  	let buttons = document.getElementsByClassName('css-18t94o4 css-1dbjc4n r-1777fci r-11cpok1 r-1ny4l3l r-bztko3 r-lrvibr'); 
      //console.log(buttons);
	  	var i=Math.floor(Math.random() * buttons.length);
	  	i=(i-i%5)%60;	  		
          		if(buttons && buttons.item(i))
	  				buttons.item(i).click();
	  			if( buttons.item(i+3)){
          		var str = String(buttons.item(i+3).outerHTML);
          			if(!str.includes("unlike") )
            			buttons.item(i+3).click();
          		}
	  		
	  	
  	console.log("ilk tklama tamam");
    port.postMessage({answer:"ok"});

	}
  	else if (msg.question == "ok followla o zaman"){
      console.log("ok followla");
  		let fivebuttons = document.getElementsByClassName('css-1dbjc4n r-1loqt21 r-18u37iz r-1orpq53 r-c2syf2 r-o7ynqc r-1j63xyz r-13qz1uu');
      //              eger kucuk ekransa                 css-18t94o4 css-1dbjc4n r-1loqt21 r-18u37iz r-779j7e r-23eiwj r-o7ynqc r-1j63xyz r-13qz1uu
      //                                                 css-1dbjc4n r-1loqt21 r-18u37iz r-thmkab r-w0qc3r r-o7ynqc r-1j63xyz r-13qz1uu
      //                                                 css-1dbjc4n r-1loqt21 r-18u37iz r-1orpq53 r-c2syf2 r-o7ynqc r-1j63xyz r-13qz1uu
  		//console.log(fivebuttons);
  		//console.log(fivebuttons.item(1));
      if(fivebuttons && fivebuttons.item(1)){
        console.log("burada");
        console.log(fivebuttons);
        for(var j=0;j<fivebuttons.length;j++){
        	kor = 0;

	        var strm = String(fivebuttons.item(j).outerHTML);
          console.log(strm);
	        if(strm.includes("takip et")){
            	if(fivebuttons && fivebuttons.item(1))
	    		    fivebuttons.item(1).click();
	       		takipedilmiskisisayisi++;
	          	totaltakipedilen++;
	            kor=1;
              console.log("ANAN");
	            break;
	        }
	        else{
	          //takipedilmiskisisayisi++;
	          //port.postMessage({answer:"takip edilmedi"});
	        }
    	}
    		if(kor==1){
          		console.log("takip edildi");
    			port.postMessage({answer:"takip edildi"});
    		}
    		else{
          		console.log("takip edilmedi");
          		document.elementFromPoint(1, 1).click();
  	      		port.postMessage({answer:"takip edilmedi"});
    		}
  	  }
      else{
        port.postMessage({answer:"takip edilmedi"});
      }
  		
	}
	else if(msg.question== "Devam"){
		denemesayisi++;
		console.log("Devam ediyoruz");
		console.log("Total takip " + totaltakipedilen);
      if(takipedilmiskisisayisi>tekseferdetakipedilecekkisi || denemesayisi>tekrardanbaslanacakdenemesayisi ){
            takipedilmiskisisayisi=0;
            if(asagi==1){
            	console.log("yukari kaydir");
            	asagi=0;
            	window.scrollBy(0,-5*nekadarkaydir);
            }
            else{
            	console.log("asagi kaydir");
            	asagi=1;
            	window.scrollBy(0,nekadarkaydir);
            }
            if(totaltakipedilen<300)
            port.postMessage({joke:"BastanBaslat"});
      }
      else{
        if(totaltakipedilen<300)
          port.postMessage({joke:"Baslat"});
      }
	}
});



