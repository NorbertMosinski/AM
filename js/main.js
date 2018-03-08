//holds all buttons of the html file
var buttons = [];
//holds all images of the html file
var images = [];
//videos
var videos = [];
//containers
var containers = [];

/**
The first function to be called by starting the application
*/
window.onload = function()
{
	init();
}

/**
Initializes the variables and events and other things needed for the functionality
*/
function init()
{
	variables();
	events();
}

/**
Saves the variables of the html document.
*/
function variables()
{
	var tmp;
	
	//buttons
	tmp = document.getElementsByTagName('input');
	for(i = 0; i < tmp.length; i++)
	{
		if(tmp[i].id.indexOf('boton') !== -1)
			buttons.push(tmp[i]);
	}
	console.log(buttons);
	//images
	tmp = document.getElementsByTagName('img');
	for(i = 0; i < tmp.length; i++)
		images.push(tmp[i]);

	//videos
	tmp = document.getElementsByTagName('video');
	for(i = 0; i < tmp.length; i++)
		videos.push(tmp[i]);

	//containers
	tmp = document.getElementsByTagName('div');
	for(i = 0; i < tmp.length; i++)
		containers.push(tmp[i]);
}

/**
Manages the events of the html document.
*/
function events()
{
	for(i = 0; i < buttons.length; i++)
	{
		buttons[i].addEventListener("click", function(){
			navEvent(this.id);
		});
	}

	for(i = 0; i < videos.length; i++)
	{
		videos[i].addEventListener("ended", function(){
			navEvent(this.id);
		});
	}
}

/**
Manages the events caused by navigation like click or video enden. o is the id of the object that caused the event
*/
function navEvent(o)
{
	console.log("event fired: " + o);
	switch(o)
	{
		//CHANGED TO SAVE TIME!
		case 'P01_boton_iniciar':
			changeMainScreenTo("P03");
			break;
		case 'P01_boton_info':
			changeMainScreenTo("P07");
			break;
		case 'P02_boton_saltar':
			changeMainScreenTo("P03");
			break;
		case 'P03_boton_jugar':
			changeMainScreenTo("P04");
			window.setTimeout(function(){
				document.getElementById('P04_boton_conteo_3').click();
			}, 2000);
			break;
		case 'P04_boton_conteo_3':
		changeMainScreenTo("P05");
			window.setTimeout(function(){
				document.getElementById('P05_boton_conteo_2').click();
			}, 2000);
			break;
		case 'P05_boton_conteo_2':
			changeMainScreenTo("P06");
			window.setTimeout(function(){
				document.getElementById('P06_boton_conteo_1').click();
			}, 2000);
		case 'P05_boton_conteo_1':
			window.setTimeout(function(){
			changeMainScreenTo("P12");
			}, 2000);
			break;
		case 'P07_boton_volver':
			changeMainScreenTo("P01");
			break;
		case 'P07_boton_progreso':
			changeMainScreenTo("P08");
			break;
		case 'P08_boton_volver':
			changeMainScreenTo("P07");
			break;
		case 'P11_video':
			changeMainScreenTo("P02");
			//eventListener for video still active!
			break;
	}
}