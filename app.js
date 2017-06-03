function chat(){
	var textBoxValue = document.getElementById('dee').value;
	if (textBoxValue == "hello chap") {
		console.log('sAIEIEIEIEIE')
		document.getElementById("Bee").innerHTML = "EXCUSE ME BUT DID YOU JUST ASSUME MY GREETING? BLOCKED!\n";
	}
	if (textBoxValue == "calm yourself") {
		console.log('sAIEIEIEIEIE')
		document.getElementById("Bee").innerHTML = "ARE YOU TRYING TO MANTERUPT ME?\n";
	}
if (textBoxValue == "that's not even a real word") {
		console.log('sAIEIEIEIEIE')
		document.getElementById("Bee").innerHTML = "MAYBE THE DICTIONARY IS JUST OPRESSING US! EVER THOUGHT ABOUT THAT!?\n";
	}
if (textBoxValue == "the dictionary has no reason to do that") {
		console.log('sAIEIEIEIEIE')
		document.getElementById("Bee").innerHTML = "ARE YOU MANSPLAINING???????\n";
	}
if (textBoxValue == "are you just adding man to random words?") {
		console.log('sAIEIEIEIEIE')
		document.getElementById("Bee").innerHTML = "HALDHAKSHDKLADHKWAHKDWLHAKLSDHAKLDHASK\n";
	}
if (textBoxValue == "...") {
		console.log('sAIEIEIEIEIE')
		document.getElementById("Bee").innerHTML = "I'M TRIGGGEEEEEEEEEEEEERED\n";
		var audio = document.getElementById("one"); 
		audio.play() 
		setTimeout(function(){ 
		//.alert("Hello");
		location.reload()
		}, 3001);
		setTimeout(function(){ 
		alert("Tumblr.exe has stopped working");
		//.location.reload()
		}, 3000);

	}
}