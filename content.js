async function  run(){
	let a = "deneme";
	console.log(a);
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


async function sleep(ms){ //UNUSED
        return new Promise(resolve=>{
            setTimeout(resolve,ms);
        })
    }





run();