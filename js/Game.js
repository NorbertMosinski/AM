var Game = function()
{
	//the canvas object
	this.canvas = document.getElementById("P13_Canvas");
	//the context of the canvas
	this.context = this.canvas.getContext("2d");
	//the current level
	this.curLvl = 1;
	//the person in the labirynth
	this.person = new Person(document.getElementById("P13_Person"), new Position(0,0));
	//all mazes
	this.mazes = [];

	this.createMazes();

	this.lastLvl = this.mazes.length;
}

/**
Creates the mazes for the game
*/
Game.prototype.createMazes = function()
{	
	for(i in images)
		if(images[i].id.substring(0, 8) == 'P13_maze')
			this.mazes.push(new Maze(images[i]));
}

/**
Initializes the given level
@param lvl: the level to be initialized
*/
Game.prototype.initLvl = function(lvl)
{
	this.curLvl = lvl;
	//game won if true
	if(this.curLvl > this.lastLvl)
		changeMainScreenTo('P09');		

	//draw labirynth
	drawImageOnCanvas(this.mazes[this.curLvl-1].src, this.context);
	
	//set person at maze begin
	this.person.setPos(this.mazes[this.curLvl-1].beginPos);
}

/**
Moves the person in the given direction if possible
@param direction: the direction to move the person to as pos object
*/
Game.prototype.movePerson = function(direction)
{
	//the color at the actual position of the person
	var actPosColor = imageDataToColor(this.person.pos, this.context);
	var newPos = new Position(this.person.pos.x+direction.x, this.person.pos.y+direction.y);

	for(i = 0; i < OPT_GAME_STEPS; i++)
	{
		if(colorsEqual(actPosColor, imageDataToColor(newPos, this.context)))
			this.person.move(direction, 1);
		else
			return;

		newPos.addPos(direction);
	}
}