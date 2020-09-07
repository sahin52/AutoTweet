
var nekadarkaydir = 500;
var takipedilmiskisisayisi = 0;
var totaltakipedilen=0;
var kor=0;
var tekseferdetakipedilecekkisi=6;
var tekrardanbaslanacakTDS = 8;
var TakipDenemesiSayisi = 0;  
var asagi=0;
var totalTakipSiniri=300;


var TweetKismi= 'public-DraftStyleDefault-block public-DraftStyleDefault-ltr';//NELER OLUYOR KISMI
var a = document.getElementsByClassName(TweetKismi);
a.item(0).click();
for(var i=0;i<a.length;i++){
  console.log(a.item(i).innerHTML);
  a.item(i).innerHTML = "<span data-offset-key=\"9e86v-0-0\"><span data-text=\"true\">sdasdad</span></span>";
}
console.log("Auto Tweet " +a);

/*var DropdownButtonsAppearingOnClick = 'css-1dbjc4n r-1loqt21 r-18u37iz r-1orpq53 r-c2syf2 r-o7ynqc r-6416eg r-13qz1uu'; // secenekler tusuna basinca cikan tus
/*css-1dbjc4n r-1loqt21 r-18u37iz r-1orpq53 r-c2syf2 r-o7ynqc r-6416eg r-13qz1uu*/

/*           css-1dbjc4n r-1loqt21 r-18u37iz r-____________________________r-o7ynqc r-6416eg r-13qz1uu          */
/*console.log("AUTO follow extension V2.0.1");

//MOR-ORTA BUYUKLUK YAZILAR-LOS--BUNLARIN ETKISI YOK GIBI GORUNUYOR AMA RISKE GEREK YOK
      //YAZI DILI TURKCE
      



DropDownButonunaTikla();

function DropDownButonunaTikla(){
  console.log("DropDownButonunaTikla"+TakipDenemesiSayisi);
    if(TakipDenemesiSayisi>tekrardanbaslanacakTDS){
      console.log("Takip denemesi sinirini astin");
      TakipDenemesiSayisi=0;
      takipedilmiskisisayisi=0;
      setTimeout(AsagiYukariKaydir,3000);
      return;
    }
    
    let buttons = document.getElementsByClassName(buttonsString); 
    //console.log(buttons);
    var i=Math.floor(Math.random() * (buttons.length-15)); //son 5i alakasiz tuslar
    i=(i-i%5)%60;  
    if(buttons && buttons.item(i+3)){
      var str = String(buttons.item(i+3).outerHTML);
      if(!str.includes("unlike"))
        buttons.item(i+3).click();
      }    
    if(buttons && buttons.item(i))
      buttons.item(i).click();

    setTimeout(TakipEtButonunaTikla,3000);
    
}

function TakipEtButonunaTikla(){
  console.log("TakipEtButonunaTikla"+TakipDenemesiSayisi);
  let DropDownButtons = document.getElementsByClassName(DropdownButtonsAppearingOnClick);
  console.log(DropDownButtons);
  ///TODO
                                                   //css-1dbjc4n r-1loqt21 r-18u37iz r-ymttw5 r-1yzf0co r-o7ynqc r-6416eg r-13qz1uu
                                                   //css-1dbjc4n r-1loqt21 r-18u37iz r-1j3t67a r-9qu9m4 r-o7ynqc r-6416eg r-13qz1uu
                                                   //css-1dbjc4n r-1loqt21 r-18u37iz r-1orpq53 r-c2syf2 r-o7ynqc r-6416eg r-13qz1uu
  //              eger kucuk ekransa                 css-18t94o4 css-1dbjc4n r-1loqt21 r-18u37iz r-779j7e r-23eiwj r-o7ynqc r-1j63xyz r-13qz1uu
  //                                                 css-1dbjc4n r-1loqt21 r-18u37iz r-thmkab r-w0qc3r r-o7ynqc r-1j63xyz r-13qz1uu
  //                                                 css-1dbjc4n r-1loqt21 r-18u37iz r-1orpq53 r-c2syf2 r-o7ynqc r-1j63xyz r-13qz1uu
  if(DropDownButtons && DropDownButtons.item(1)){ //item (1) = takip et butonu
    var strm = String(DropDownButtons.item(1).outerHTML);
    console.log(strm);
    if(strm.includes("takip et")){ // takip edildi
      DropDownButtons.item(1).click();
      console.log("Takip edildi");
      totaltakipedilen++;
      takipedilmiskisisayisi++;
      TakipDenemesiSayisi++;
      if(totaltakipedilen<totalTakipSiniri && takipedilmiskisisayisi < tekseferdetakipedilecekkisi && TakipDenemesiSayisi< tekrardanbaslanacakTDS){
        setTimeout(DropDownButonunaTikla,3000);
      }
      else if(totaltakipedilen<totalTakipSiniri){
        takipedilmiskisisayisi=0;
        TakipDenemesiSayisi=0;
        setTimeout(AsagiYukariKaydir,3000);
      }
      else{
        console.log("SINIRA ULASILDI");
      }
    }
    else{ //takip edilmedi cunku daha once takipledik
      document.elementFromPoint(1, 1).click();
      console.log("Takip edilmedi"); 
      TakipDenemesiSayisi++;
      setTimeout(DropDownButonunaTikla,3000);
    }
  }
  else{ // tusa tiklanmadan kalkmis tus
    console.log("tusa tiklanmadan kalkmis tus");
    setTimeout(DropDownButonunaTikla,3000);

  }

}
function AsagiYukariKaydir(){
  console.log("AsagiYukariKaydir"+TakipDenemesiSayisi);

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

    if(totaltakipedilen<300){
      console.log("Dewamkeden Drop Down'a tiklamaya yollandi");
      setTimeout(DropDownButonunaTikla,5000);
    }
  
}*/