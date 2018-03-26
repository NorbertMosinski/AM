//TODO: Export the options in a seperate file, if there are more of them

var Game = function()
{
	//OPTIONS
	this.STEPS = 4;


	//the current level
	this.curLvl = 1;
	//the last possible level
	this.lastLvl;
	this.person = new Person(document.getElementById("P13_Person"), null);
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
Initializes the next level
*/
Game.prototype.initNextLvl = function()
{
	//game won if true
	if(this.curLvl > this.lastLvl)
		changeMainScreenTo('P09');		

	//initialize context od canvas
	context.canvas.width = this.mazes[this.curLvl-1].src.width;
	context.canvas.height = this.mazes[this.curLvl-1].src.height;

	//context.drawImage(mazes[curLvl-1], 0, 0, window.innerWidth, window.innerHeight);

	//draw the image on canvas	
	context.drawImage(this.mazes[this.curLvl-1].src, 0, 0, this.mazes[this.curLvl-1].src.width, this.mazes[this.curLvl-1].src.height);
	this.initPersonPosition();
}

Game.prototype.movetest = function(obj){


}
/**
TODO: Move speed
Moves the person in the given direction if possible
@param direction: the direction to move the person to as pos object
*/
Game.prototype.movePerson = function(direction)
{
	//the color at the actual position of the person
	var actPosColor = imageDataToColor(this.person.pos);
	var newPos = new Position(this.person.pos.x+direction.x, this.person.pos.y+direction.y);

	for(i = 0; i < this.STEPS; i++)
	{
			if(colorsEqual(actPosColor, imageDataToColor(newPos)))
				this.person.setPos(newPos);
			else
				return;

			newPos.x += direction.x;
			newPos.y += direction.y;
	}
}

/**
//TODO
Initializes the position of the person at the beginning of the level
*/
Game.prototype.initPersonPosition = function()
{
	var pos;
	var tmpPos = findColorInLine(new Position(0, 0), new Position(400, 0), new Color(255,255,255));
	this.person.setPos(new Position(5, 5));
	//Looking for the beginning of the maze.
}