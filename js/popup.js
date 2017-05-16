var activ = document.getElementById('activer');
var desac = document.getElementById('desactiver');
var on = document.getElementById("On");
var off = document.getElementById("Off");
var tools = document.getElementById("outils");

desac.onclick = function(){
	desac.disabled = true;
	activ.disabled = false;
	tools.style.display = 'none';
}

activ.onclick = function(){
	activ.disabled = true;
	desac.disabled = false;
	tools.style.display = '';
}

on.onclick = function(){
	on.disabled = true;
	off.disabled = false;
}

off.onclick = function(){
	off.disabled = true;
	on.disabled = false;
}
