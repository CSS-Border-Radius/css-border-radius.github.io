var textarea = document.querySelector('#textarea');
var cor = document.querySelector('#color');
var estilo = document.querySelector('#estilo');
var espesura = document.querySelector('#borda');
var all = document.querySelector('#all');

var ec = document.querySelector('#ec');
var eb = document.querySelector('#eb');
var dc = document.querySelector('#dc');
var db = document.querySelector('#db');

function texto(){
	textarea.value = "\n\n\n";

	if(espesura.value != "0"){
		textarea.value = "\nborder-style: "+ estilo.value+";";
		textarea.value = textarea.value + "\nborder-color: "+cor.value+";";
		textarea.value = textarea.value + "\nborder-width: "+espesura.value+"px;";
	}
	if(ec.value == eb.value && eb.value == dc.value && dc.value == db.value && db.value == ec.value){
		if(ec.value != "0"){
			textarea.value = textarea.value + "\nborder-radius: "+all.value+"px;";
		}
	}else{
		if(ec.value != "0"){ 
			textarea.value = textarea.value + "\nborder-top-left-radius: "+ec.value+"px;";
		}
		if(eb.value != "0"){ 
			textarea.value = textarea.value + "\nborder-bottom-left-radius: "+eb.value+"px;";
		}
		if(dc.value != "0"){ 
			textarea.value = textarea.value + "\nborder-top-right-radius: "+dc.value+"px;";
		}
		if(db.value != "0"){ 
			textarea.value = textarea.value + "\nborder-bottom-right-radius: "+db.value+"px;";
		}
	}
};

function estilos(){
	if(espesura.value != "0"){
		textarea.style.borderStyle = estilo.value;
		textarea.style.borderColor = cor.value;
		textarea.style.borderWidth = espesura.value+"px";
	}else{ 
		textarea.style.borderWidth = "0px";
	}
	texto();
};

function allborder(){
	textarea.style.borderRadius = all.value+"px";
	ec.value = all.value;
	eb.value = all.value;
	dc.value = all.value;
	db.value = all.value;
	texto();
};

function border(){

	if(ec.value != "0"){ 
		textarea.style.borderTopLeftRadius = ec.value+"px";
	}else{
		textarea.style.borderTopLeftRadius = ec.value+"px";
	}
	if(eb.value != "0"){ 
		textarea.style.borderBottomLeftRadius = eb.value+"px";
	}else{
		textarea.style.borderBottomLeftRadius = eb.value+"px";
	}
	if(dc.value != "0"){ 
		textarea.style.borderTopRightRadius = dc.value+"px";
	}else{
		textarea.style.borderTopRightRadius = dc.value+"px";
	}
	if(db.value != "0"){ 
		textarea.style.borderBottomRightRadius = db.value+"px";
	}else{
		textarea.style.borderBottomRightRadius = db.value+"px";
	}

	if(ec.value == "0" && eb.value == "0" && dc.value == "0" && db.value == "0"){
		all.value = "0";
	}

	texto();
};

function copyToClipboards(){
	document.execCommand(textarea.value);
}

function copyToClipboard() {
	text = textarea.value
	var textArea = document.createElement("textarea");

	textArea.style.position = 'fixed';
	textArea.style.top = 0;
	textArea.style.left = 0;
	textArea.style.width = '2em';
	textArea.style.height = '2em';
	textArea.style.padding = 0;
	textArea.style.border = 'none';
	textArea.style.outline = 'none';
	textArea.style.boxShadow = 'none';
	textArea.style.background = 'transparent';
	textArea.value = text;

	document.body.appendChild(textArea);
	textArea.select();

	try {
		var successful = document.execCommand('copy');
		var msg = successful ? 'successful' : 'unsuccessful';
		console.log('Copying text command was ' + msg);
	} catch (err) {
		console.log('Oops, unable to copy');
		window.prompt("Copie para área de transferência: Ctrl+C e tecle Enter", text);
	}

	document.body.removeChild(textArea);
	window.alert(text + "\n\n\nCopiado para a area de transferência");
}