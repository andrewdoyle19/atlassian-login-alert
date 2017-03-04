function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

var login = document.getElementsByClassName("login-link");
if(!login || login.length === 0) {
	login = document.getElementById("login-link");
}
if(login){
	//var dashboard = document.getElementsByClassName('aui-page-header');
	var header = document.getElementsByTagName('header');
	if(header){
		var logo = chrome.extension.getURL('/img/flashing-light.gif');
		var div = document.createElement('div');
		div.innerHTML = '<img src="' + logo + '" /> Alert: You are not logged in! <img src="' + logo + '" />';	
		div.className = 'login-alert';		
		insertAfter(header[0], div)
	}
}


    
	
   

