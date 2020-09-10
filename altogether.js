function run(){
    let TweetleButon = "css-1dbjc4n r-1awozwy r-18u37iz r-psjefw"
    let buton = document.getElementsByClassName(TweetleButon);

    buton[0].setAttribute("aria-disabled",undefined) //= "class=\"css-18t94o4 css-1dbjc4n r-1qqlz1x r-42olwf r-sdzlij r-1phboty r-rs99b7 r-1w2pmg r-1un7vkp r-1ii58gl r-yon6af r-1ny4l3l r-1fneopy r-o7ynqc r-6416eg r-lrvibr\"data-testid=\"tweetButton\"+data-focusable=\"true\"+tabindex=\"0\""

}
function twitKisminiDoldur(twitlenecekSey){
    console.log("Basladi")
    let temps = document.getElementsByClassName("public-DraftStyleDefault-block public-DraftStyleDefault-ltr");
    console.log("length"+temps.length);
    for(let temp of temps){
        console.log(temp)
    }
    temps[0].innerHTML=`<span
    data-offset-key="b9r30-0-0"><span
        data-text="true">${twitlenecekSey}</span></span>`
}
function NelerOluyorBosalt(){
    console.log("Bosaltiliyor");
    let taslaks = document.getElementsByClassName("DraftEditor-root");
    console.log("length of taslaks: "+taslaks.length)
    for(let taslak of taslaks){
        console.log(taslak);
    }
    taslaks[0].innerHTML=`<div
class="DraftEditor-editorContainer">
<div aria-activedescendant="typeaheadFocus-0.19495355245577017"
aria-autocomplete="list"
aria-controls="typeaheadDropdownWrapped-2"
aria-describedby="placeholder-ef872"
aria-label="Metni tweetle"
aria-multiline="true"
class="notranslate public-DraftEditor-content"
contenteditable="true"
data-testid="tweetTextarea_0"
role="textbox"
spellcheck="true"
tabindex="0"
no-focuscontainer-refocus="true"
style="outline: none; user-select: text; white-space: pre-wrap; overflow-wrap: break-word;">
<div
data-contents="true">
<div class=""
data-block="true"
data-editor="ef872"
data-offset-key="b9r30-0-0">
<div data-offset-key="b9r30-0-0"
class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr">
<span
data-offset-key="b9r30-0-0"><span
data-text="true">sdasd</span></span>
</div>
</div>
</div>
</div>
</div>`
}

//twitKisminiDoldur("Komik mi?");
NelerOluyorBosalt();
//run();