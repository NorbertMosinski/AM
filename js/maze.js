//the current level
var curLvl;
var lastLvl;
var canvas;
var context;
var mazeImgEl;
var person;

/**
Initializes the maze part of the game
*/
function initMaze()
{
	curLvl = 1;
	lastLvl = mazes.length;
	mazeImgEl = document.getElementById("P13_maze01");//new Image();
	canvas = document.createElement('canvas');
	canvas.width = mazes[0].width;
	canvas.height = mazes[0].height;
	context = canvas.getContext('2d');
	person = document.getElementById("P13_Person");
	initLvl(curLvl);
}

/**
Initializes the given level
@param lvl: the level to be initialized
*/
function initLvl(lvl)
{
	if(lvl > lastLvl)
		changeMainScreenTo('P09');
	curLvl = lvl;		
	mazeImgEl.onload = function()
	{
		context.drawImage(mazeImgEl, 0, 0, mazeImgEl.width, mazeImgEl.height);	
	};
	//mazeImgEl.src = mazes[lvl-1];

	person.style.top = 10 + "px";
	person.style.left = 0 + "px";
}

/**
Moves the person to the direction if possible
@param direction: the direction to move the person to
*/
function movePerson(direction)
{
	var top = parseInt(person.style.top.substring(0, person.style.top.length-2));
	var left = parseInt(person.style.left.substring(0, person.style.left.length-2));
	
	switch(direction)
	{
		case 'top':
			top--;
			person.style.top = top + "px";
			break;
		case 'down':
			top++;
			person.style.top = top + "px";
			break;
		case 'left':
			left--;
			person.style.left = left + "px"; 
			break;
		case 'right':
			console.log(context.getImageData(left, top, 1, 1).data);
			console.log(context.getImageData(left +1, top, 1, 1).data)
			if(context.getImageData(left, top, 1, 1).data[0] == context.getImageData(left +1, top, 1, 1).data[0])
			{
				left++;
				person.style.left = left + "px";
			}
			break;
	}
}

/**
Scans the maze and finds out, which color the walls have which is important for further funcionality
*/
/*
function initColors()
{
	var tmp = context.getImageData(0, 0, 1, 1).data;
	console.log(context.getImageData(0, 0, 1, 1).data);
	for(i = 0; i < mazes[0].width; i++)
		for(j = 0; j < mazes[0].height; i++)
			for(k = 0; k < 4; k++)
				if(tmp[k] != context.getImageData(i, j, 1, 1).data[k])
					console.log("i: " + i + "j: " + j + "data[k]:" + context.getImageData(i, j, 1, 1).data[k]);

}
*/