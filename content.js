//const { loadavg } = require("os");

async function  run(){
	//console.log(__dirname);
	console.log("running");
	let tweets = await readFromFile('sadeceLinkliDosyalar/sadpicssadecelinkler.txt');
	console.log(tweets);
	//let a = "deneme";
	
	//console.log(a);
	//await sleep(3000);
	//await twitTarihiPlanla()
	//await twitiYolla();

	

//	await closeTheTab();
}
async function closeTheTab(){
	await sleep(3000);
	let tweetEkranları = document.getElementsByClassName(`css-1dbjc4n r-6koalj r-eqz5dr r-16y2uox r-1wbh5a2 r-1bylmt5 r-184en5c`);
	if(tweetEkranları.length==2)
		chrome.runtime.sendMessage({closeThis: true});
	else{
		console.log("Gonderilemedi");
		await sleep(7000);
		tweetEkranları = document.getElementsByClassName(`css-1dbjc4n r-6koalj r-eqz5dr r-16y2uox r-1wbh5a2 r-1bylmt5 r-184en5c`);
		if(tweetEkranları.length==2)
			chrome.runtime.sendMessage({closeThis: true});
		else{
			console.log("olmadı");
			chrome.runtime.sendMessage({closeThis: true});
		}
	}
}

async function twitiYolla(){
	await sleep(300);
	console.log("menemen");
	let tweetleButonları = document.getElementsByClassName(`css-901oao r-1awozwy r-jwli3a r-6koalj r-18u37iz r-16y2uox r-1qd0xha r-n6v787 r-vw2c0b r-1777fci r-eljoum r-dnmrzs r-bcqeeo r-q4m81j r-qvutc0`)
	console.log(tweetleButonları.length);
	if(tweetleButonları.length == 3){
		tweetleButonları[0].click();
	}else{
		console.log("yetismedi");
		await sleep(5000);
		tweetleButonları = document.getElementsByClassName(`css-901oao r-1awozwy r-jwli3a r-6koalj r-18u37iz r-16y2uox r-1qd0xha r-n6v787 r-vw2c0b r-1777fci r-eljoum r-dnmrzs r-bcqeeo r-q4m81j r-qvutc0`)
		console.log(tweetleButonları.length);
		if(tweetleButonları.length==3)
			tweetleButonları[0].click();
	}
}
async function twitTarihiPlanla(){
	let popupButonlarıString = `css-18t94o4 css-1dbjc4n r-1niwhzg r-42olwf r-sdzlij r-1phboty r-rs99b7 r-1w2pmg r-mvpalk r-1ii58gl r-25kp3t r-1ny4l3l r-mk0yit r-o7ynqc r-6416eg r-lrvibr`;
	let popupButonları = document.getElementsByClassName(popupButonlarıString);
	if(popupButonları.length==6){
		let scheduleButonu = popupButonları[2];
		scheduleButonu.click();
	}else{
		console.log("Not enough time waited");
		await sleep(5000);
		popupButonları = document.getElementsByClassName(popupButonlarıString);
		console.log(popupButonları.length);
		let scheduleButonu = popupButonları[3];
		scheduleButonu.click();//TODO: kesinleştir
	}
}
async function sleep(ms){ //UNUSED
        return new Promise(resolve=>{
            setTimeout(resolve,ms);
        })
    }

async function readFromFile(path){
	const url = chrome.runtime.getURL(path);

	await fetch(url)
	.then(async (response) => {
		console.log(response);
		let text = await response.json();
		console.log(text);
		return text;
		}
	)
	.then((json) => console.log(JSON.stringify(json))); 
	
}

function önemliDetayler(){
	//localStorage.un = new Array();
	//localStorage.un.push("nana");
	localStorage.me = "anan";
	console.log(localStorage.me);
	//localde kayıt yapabilirsin
	
}


run();



/**
 * element = getElementById()
 * element.value = valueToSelect;
 * secenekliolanlar = r-30o5oe r-1niwhzg r-17gur6a r-1yadl64 r-jwli3a r-1loqt21 r-ubezar r-crgep1 r-1ny4l3l r-t60dpp r-iphfwy r-n072k1 r-vmopo1 r-c2syf2
 */