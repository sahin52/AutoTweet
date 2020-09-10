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
function twitButonuAktiflestir(){
    let icineKonacak = `<div
    class="css-1dbjc4n r-1awozwy r-1777fci r-ywje51 r-1vsu8ta r-18qmn74">
    <div aria-valuemax="100"
        aria-valuemin="0"
        aria-valuenow="1"
        role="progressbar"
        class="css-1dbjc4n r-1awozwy r-1777fci r-o7ynqc r-1i6wzkk">
        <div class="css-1dbjc4n r-ghumyc r-eafdt9 r-19hi5yp"
            style="height: 20px; width: 20px;">
            <svg height="100%"
                viewBox="0 0 20 20"
                width="100%"
                style="overflow: visible;">
                <circle
                    cx="50%"
                    cy="50%"
                    fill="none"
                    stroke-width="2"
                    r="9"
                    stroke="#38444D">
                </circle>
                <circle
                    cx="50%"
                    cy="50%"
                    fill="none"
                    stroke-width="2"
                    r="9"
                    stroke="#794BC4"
                    stroke-linecap="round"
                    style="stroke-dashoffset: 55.5389; stroke-dasharray: 56.5487;">
                </circle>
            </svg>
        </div>
    </div>
    <div
        class="css-1dbjc4n r-1awozwy r-1p0dtai r-1777fci r-1d2f490 r-ywje51 r-u8s1d r-zchlnj r-ipm5af">
    </div>
</div>
<div
    class="css-1dbjc4n r-hpzmsf r-1k25im9 r-1khgjg5 r-19einr3 r-92ng3h">
</div>
<div aria-label="Tweet ekle"
    role="button"
    data-focusable="true"
    tabindex="0"
    class="css-18t94o4 css-1dbjc4n r-1niwhzg r-11mmphe r-sdzlij r-1phboty r-rs99b7 r-1w2pmg r-1s2hp8q r-2uu9wx r-1ny4l3l r-mk0yit r-o7ynqc r-6416eg r-lrvibr"
    data-testid="addButton">
    <div dir="auto"
        class="css-901oao r-1awozwy r-xfsgu1 r-6koalj r-18u37iz r-16y2uox r-1qd0xha r-1gkfh8e r-vw2c0b r-1777fci r-eljoum r-dnmrzs r-bcqeeo r-q4m81j r-qvutc0">
        <svg viewBox="0 0 24 24"
            class="r-xfsgu1 r-4qtqp9 r-yyyyoo r-1q142lx r-50lct3 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1srniue">
            <g>
                <path
                    d="M19.75 11H13V4.25c0-.553-.447-1-1-1s-1 .447-1 1V11H4.25c-.553 0-1 .447-1 1s.447 1 1 1H11v6.75c0 .553.447 1 1 1s1-.447 1-1V13h6.75c.553 0 1-.447 1-1s-.447-1-1-1z">
                </path>
            </g>
        </svg><span
            class="css-901oao css-16my406 css-bfa6kz r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0"></span>
    </div>
</div>
<div role="button"
    class="css-18t94o4 css-1dbjc4n r-1qqlz1x r-42olwf r-sdzlij r-1phboty r-rs99b7 r-1w2pmg r-1un7vkp r-1ii58gl r-yon6af r-1ny4l3l r-1fneopy r-o7ynqc r-6416eg r-lrvibr"
    data-testid="tweetButton"
    data-focusable="true"
    tabindex="0">
    <div dir="auto"
        class="css-901oao r-1awozwy r-jwli3a r-6koalj r-18u37iz r-16y2uox r-1qd0xha r-n6v787 r-vw2c0b r-1777fci r-eljoum r-dnmrzs r-bcqeeo r-q4m81j r-qvutc0">
        <span
            class="css-901oao css-16my406 css-bfa6kz r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0"><span
                class="css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0">Tweetle</span></span>
    </div>
</div>`
    let butons = document.getElementsByClassName("css-1dbjc4n r-1awozwy r-18u37iz r-psjefw");
    console.log(butons.length);
    butons[1].innerHTML=icineKonacak;

}
//twitKisminiDoldur("Komik mi?");
//NelerOluyorBosalt();
//twitButonuAktiflestir();
//run();

function twitKisminaTikla(){
    let nelerOluor = document.getElementsByClassName("public-DraftEditorPlaceholder-inner");
    nelerOluor[0].click();

}
function func(tab){
    chrome.tabs.executeScript({ code: 'window.getSelection().toString();' }, ([selection]) =>
    tweet(tab.url, selection || tab.title))
}
const tweet = async ( url, title)=>{
    console.log("annen");
}
chrome.browserAction.onClicked.addListener(func);
//chrome.tabs.create({ url: "www.twitter.com/" })
//twitKisminaTikla();
//NelerOluyorBosalt();
//twitKisminiDoldur("Komik mi?");
//run();
//twitButonuAktiflestir();
