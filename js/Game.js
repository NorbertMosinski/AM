var Game = function()
{
	//the clock for this game
	this.clock = null;
	//the canvas object
	this.canvas = document.getElementById("P13_Canvas");
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
	var time = 60 * OPT_GAME_TIMELIMIT;
    var timeDisplay = document.getElementById('P13_time');

	//game won if true
	if(lvl > this.lastLvl)
	{
		getButton("P13_boton_win").click();
		return;
	}
	this.curLvl = lvl;

	//draw labirynth
	drawImageOnCanvas(this.mazes[this.curLvl-1].src, this.context);

	//FOR WIN TESTING

	var tmp = new_Position(this.mazes[this.curLvl-1].endArea.pos);
	tmp.y -=10;
	this.person.setPos(tmp);
	

	//set person at maze begin
	//this.person.setPos(this.mazes[this.curLvl-1].beginArea.mid);
	
	this.clock = startTimer(time, timeDisplay);
}

/**
Moves the person in the given direction if possible
@param direction: the direction to move the person to as pos object
*/
Game.prototype.movePerson = function(direction)
{
	//the color at the actual position of the person
	var actPosColor = imageDataToColor(this.person.area.pos, this.context);
	var newPos;

	if(direction == CONST_POS_BOT)
		newPos = new Position(this.person.area.pos.x+direction.x, this.person.area.pos.y+direction.y+this.person.area.hitbox.height-1);

	else if(direction == CONST_POS_RIGHT)
		newPos = new Position(this.person.area.pos.x+direction.x+this.person.area.hitbox.width-1, this.person.area.pos.y+direction.y);

	else
		newPos = new Position(this.person.area.pos.x+direction.x, this.person.area.pos.y+direction.y);
	
	console.log("new Pos: (" + newPos.x + "," + newPos.y + ")");
	for(i = 0; i < OPT_GAME_STEPS; i++)
	{
		if(colorsEqual(actPosColor, imageDataToColor(newPos, this.context)))
			this.person.move(direction, 1);
		else
			return;

		console.log("person: (" + this.person.area.pos.x + " , " + this.person.area.pos.y + ")");
		//win current lvl
		
		if(colision(this.person.area, this.mazes[this.curLvl-1].endArea))
		{
			//stop timer
			clearInterval(this.clock);

			if(this.maxUnlockedLvl < this.curLvl)
				this.maxUnlockedLvl = this.curLvl+1;

			this.initLvl(this.curLvl+1);
			break;
		}

		newPos.addPos(direction);
	}
}