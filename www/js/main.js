//holds all buttons of the html file
var buttons = [];
//holds all images of the html file
var images = [];
//holds all videos of the html file
var videos = [];
//holds all containers of the html file
var containers = [];
//game
var game;

/**
The first function to be called by starting the application.
*/
window.onload = function()
{
	init();
}

/**
Initializes the variables and events and other things needed for the functionality.
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
	for(var i = 0; i < tmp.length; i++)
	{
		if(tmp[i].id.indexOf('boton') !== -1)
			buttons.push(tmp[i]);
	}

	//images
	tmp = document.getElementsByTagName('img');
	for(var i = 0; i < tmp.length; i++)
		images.push(tmp[i]);

	//videos
	tmp = document.getElementsByTagName('video');
	for(var i = 0; i < tmp.length; i++)
		videos.push(tmp[i]);

	//containers
	tmp = document.getElementsByTagName('div');
	for(var i = 0; i < tmp.length; i++)
		containers.push(tmp[i]);

	game = new Game();
}

/**
Manages the events of the html document.
*/
function events()
{
	for(var i = 0; i < buttons.length; i++)
	{
		buttons[i].addEventListener("click", function(){
			navEvent(this.id);
		});
	}

	for(var i = 0; i < videos.length; i++)
	{
		videos[i].addEventListener("ended", function(){
			navEvent(this.id);
		});
	}

	//prevent scroll on pressing arrow keys
	window.addEventListener("keydown", function(e)
	{
		if([37,38,39,40].indexOf(e.keyCode) > -1)
			e.preventDefault();
	}, false);
}

/**
Manages the events caused by navigation like click or video end.
@param o: the id of the object that caused the event
*/
function navEvent(o)
{
	console.log("event fired: " + o);
	switch(o)
	{
		//CHANGED TO SAVE TIME!
		case 'P01_boton_iniciar':
			if(getVideo("P11_video").ended)
				changeMainScreenTo("P03");
			else
			{
				changeMainScreenTo("P11");
				getVideo("P11_video").play();
			}
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
				getButton('P04_boton_conteo_3').click();
			}, 2000);
			break;
		case 'P04_boton_conteo_3':
		changeMainScreenTo("P05");
			window.setTimeout(function(){
				getButton('P05_boton_conteo_2').click();
			}, 2000);
			break;
		case 'P05_boton_conteo_2':
			changeMainScreenTo("P06");
			window.setTimeout(function(){
				getButton('P06_boton_conteo_1').click();
			}, 2000);
			break;
		case 'P06_boton_conteo_1':
			window.setTimeout(function(){
			changeMainScreenTo("P13");
			setControlListeners();
			}, 2000);
			game.initLvl(7);
			break;
		case 'P07_boton_volver':
			changeMainScreenTo("P01");
			break;
		case 'P07_boton_progreso':
			changeMainScreenTo("P08");
			for(var i = 0; i < game.maxUnlockedLvl; i++)
			{
				var str = 'P08_boton_lvl';
				if(i < 9)
					str += '0';
				str += (i+1);
				getButton(str).classList.remove("hidden");
			}
			break;
		case 'P08_boton_volver':
			changeMainScreenTo("P07");
			break;
		case 'P11_video':
			changeMainScreenTo("P02");
			//eventListener for video still active!
			break;
		case 'P13_boton_win':
			removeControlListeners();
			changeMainScreenTo("P09");
			window.setTimeout(function(){
				changeMainScreenTo("P01");
			}, 4000);
			break;
		case 'P13_boton_lose':
			removeControlListeners();
			changeMainScreenTo("P10");
			window.setTimeout(function(){
				changeMainScreenTo("P01");
			}, 4000);
			break;
		default:
			if(o.substring(0, o.length-2) == 'P08_boton_lvl')
			{
				changeMainScreenTo("P13");
				game.initLvl(parseInt(o.substring(o.length-2, o.length)));
				setControlListeners();
			}
			break;
	}
}

/**
Activates the listeners needed for game control during the play.
*/
function setControlListeners()
{
	document.addEventListener("click", handleMouseClick, true);
	
	window.onkeydown = function(e)
	{
		var key = e.keyCode;
		switch(key)
		{
			case 40:
				game.movePerson(CONST_POS_BOT);
				break;
			case 37:
				game.movePerson(CONST_POS_LEFT);
				break;
			case 38:
				game.movePerson(CONST_POS_TOP);
				break;
			case 39:
				game.movePerson(CONST_POS_RIGHT);
				break;
		}
	};
}

/**
Removes the event listeners used for game control during the game.
*/
function removeControlListeners()
{
	window.onkeydown = null;
	document.removeEventListener("click", handleMouseClick, true);
}

/**
Function for handling a mouse click during the game.
*/
var handleMouseClick = function(e)
{
 	var left = e.pageX;
	var right = OPT_CANVAS_WIDTH - left;
	var top = e.pageY;
	var bot = OPT_CANVAS_HEIGHT - top;
	
	switch(min([left, right, top, bot]))
	{
		case 0:
			game.movePerson(CONST_POS_LEFT);
			break;
		case 1:
			game.movePerson(CONST_POS_RIGHT);
			break;
		case 2:
			game.movePerson(CONST_POS_TOP);
			break;
		case 3:
			game.movePerson(CONST_POS_BOT);
			break;
	}
};