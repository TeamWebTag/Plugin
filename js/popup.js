var activ = document.getElementById('activer');
var desac = document.getElementById('desactiver');
var on = document.getElementById("On");
var off = document.getElementById("Off");
var tools = document.getElementById("outils");

document.onload = function(){
	if (!localStorage.activ)
	{
		localStorage.activ = true;
		localStorage.desactiv = false;
		localStorage.on = false;
		localStorage.off = true;
		StatusChange();
	}
}

function StatusChange(){
	desac.disabled = localStorage.desactiv;
	activ.disabled = localStorage.activ;
	on.disabled = localStorage.on;
	off.disabled = localStorage.off;
}

desac.onclick = function(){
	localStorage.desactiv = true;
	localStorage.activ = false;
	StatusChange();
	tools.style.display = 'none';
	chrome.tabs.sendMessage(tabs[0].id, {todo : "desactivateExt"});
}

activ.onclick = function(){
	localStorage.activ = true;
	localStorage.desactiv = false;
	StatusChange();
	tools.style.display = '';
}

on.onclick = function(){
	localStorage.on = true;
	localStorage.off = false;
	StatusChange();
}

off.onclick = function(){
	localStorage.on = false;
	localStorage.off = true;
	StatusChange();
}

// if (desac.disabled === false){
// 	chrome.tabs.sendMessage(tabs[0].id), {todo : "activateExt"};
// }
// else{
// 	chrome.tabs.sendMessage(tabs[0].id), {todo : "desactivateExt"};
// }