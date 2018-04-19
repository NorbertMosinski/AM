/**
Creates a new Maze object.
@param src: the image source of the maze
*/
var Maze = function(src)
{
	console.log("maze");
	//maze image
	this.src = src;
	//maze begin
	this.beginArea = new Area(null, new Hitbox(null, 2));
	//maze end
	this.endArea = new Area(null, new Hitbox(null, 2));
	//color of the maze walls
	this.wallColor = null;
	this.init();
}

/**
Initializes the begin and end position of the labirynth and the hitbox of the begin/end.
NOTE: Labirynth begin/end has to be on the top/bot.
*/
Maze.prototype.init = function()
{
	var canvas = document.createElement('canvas');
	var context = canvas.getContext('2d');
	var tolerance = 0;

	drawImageOnCanvas(this.src, context);

	//determine color of walls
	//this.wallColor = imageDataToColor(findDifferentColorInLine(new Position(OPT_CANVAS_WIDTH/2, OPT_CANVAS_HEIGHT/2), new Position(OPT_CANVAS_WIDTH, OPT_CANVAS_HEIGHT/2), CONST_COL_WHITE, context), context);
	while((null == this.beginArea.pos || null == this.endArea.pos) && parseInt(context.canvas.height*OPT_MAZE_INITTOLERANCE) >= tolerance)
	{
		//begin
		if(null == this.beginArea.beginPos)
		{
			this.beginArea.setPos(findSpecificColorInLine(new Position(0, 0 + tolerance), new Position(context.canvas.width, 0 + tolerance), CONST_COL_WHITE, context));

			//hitbox width begin area
			if(null != this.beginArea.pos)
			{
				var tmpPos = findDifferentColorInLine(this.beginArea.pos, new Position(context.canvas.width, this.beginArea.pos.y), CONST_COL_WHITE, context);
				this.beginArea.setHitbox(new Hitbox(tmpPos.x - this.beginArea.pos.x, 2));
			}
		}

		//end
		if(null == this.endArea.pos)
		{
			this.endArea.setPos(findSpecificColorInLine(new Position(0, context.canvas.height - tolerance), new Position(context.canvas.width, context.canvas.height - tolerance), CONST_COL_WHITE, context));
			
			//hitbox width end area
			if(null != this.endArea.pos)
			{
				var tmpPos = findDifferentColorInLine(this.endArea.pos, new Position(context.canvas.width, this.endArea.pos.y), CONST_COL_WHITE, context);
				this.endArea.setHitbox(new Hitbox(tmpPos.x - this.endArea.pos.x, 2));
			}		
		}
		tolerance++;
	}
}