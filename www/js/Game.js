/**
Creates an new Game object.
*/
var Game = function()
{
	//the clock for this game
	this.clock = null;
	//the canvas object
	this.canvas = document.getElementById("P13_canvas");
	//the context of the canvas
	this.context = this.canvas.getContext("2d");
	//the current level
	this.curLvl = 1;
	//the person in the labirynth
	this.person = new Person(document.getElementById("P13_person"), new Area(new Position(0,0), new Hitbox(OPT_PERSON_SIZE, OPT_PERSON_SIZE)));
	//all mazes
	this.mazes = [];
	//the max level unlocked until now
	this.maxUnlockedLvl = 1;

	this.createMazes();

	//the last possible level
	this.lastLvl = this.mazes.length;
}

/**
Creates the mazes for the game.
*/
Game.prototype.createMazes = function()
{	
	for(var i in images)
		if(images[i].id.substring(0, 8) == 'P13_maze')
			this.mazes[parseInt(images[i].id.substring(images[i].id.length-2, images[i].id.length))-1] = new Maze(images[i]);		
		
}

/**
Initializes the given level.
@param lvl: the level to be initialized
*/
Game.prototype.initLvl = function(lvl)
{
	//timer
	var time = 60 * OPT_GAME_TIMELIMIT;
    var timeDisplay = document.getElementById('P13_time');

	//game won if last lvl reached
	if(lvl > this.lastLvl)
	{
		getButton("P13_boton_win").click();
		return;
	}
	this.curLvl = lvl;

	//draw labirynth
	drawImageOnCanvas(this.mazes[this.curLvl-1].src, this.context);

	//FOR WIN TESTING
	/*
	var tmp = new_Position(this.mazes[this.curLvl-1].endArea.pos);
	tmp.y -=10;
	this.person.setPos(tmp);
	*/

	//set person at maze begin
	this.person.setPos(this.mazes[this.curLvl-1].beginArea.mid);
	
	this.clock = startTimer(time, timeDisplay);
}

/**
Moves the person in the given direction if possible.
@param direction: the direction to move the person to as pos object
*/
Game.prototype.movePerson = function(direction)
{	
	//moving person step by step in the given direction as long as possible
	for(i = 0; i < OPT_GAME_STEPS; i++)
	{
		if(this.personCanMove(direction))
			this.person.move(direction, 1);
		else
			return;

		//end of labirynth reached? -> win current lvl		
		if(colision(this.person.area, this.mazes[this.curLvl-1].endArea))
		{
			//stop timer
			clearInterval(this.clock);

			if(this.maxUnlockedLvl < this.curLvl)
				this.maxUnlockedLvl = this.curLvl+1;

			//init next lvl
			this.initLvl(this.curLvl+1);
			break;
		}
	}
}

/**
Checks if the person can move one step in the given direction
@param direction: the direction to move the person to
@return true if movement possible, else false
*/
Game.prototype.personCanMove = function(direction)
{
	if(OPT_PERFORMANCEMODE)
		if(imageDataToColor(this.person.area.pos, this.context).equals(new_Position(this.person.area.pos).addPos(direction), this.context))
			return true;
		else
			return false;
		
	if(imageDataToColor(this.person.area.pos, this.context).equals([ //act upper left corner
		imageDataToColor(new_Position(this.person.area.pos).addPos([direction]), this.context), //new upper left corner
		imageDataToColor(new_Position(this.person.area.pos).addPos([direction, new Position(this.person.area.hitbox.width-1, 0)]), this.context), //new upper right corner
		imageDataToColor(new_Position(this.person.area.pos).addPos([direction, new Position(0, this.person.area.hitbox.height-1)]), this.context), //new bottom left corner
		imageDataToColor(new_Position(this.person.area.pos).addPos([direction, new Position(this.person.area.hitbox.width-1, this.person.area.hitbox.height-1)]), this.context) //new bottom right corner
	]))
	{
		return true;
	}
	return false;

}