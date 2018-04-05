var Maze = function(src)
{
	this.src = src;
	this.beginArea = new Area(null, new Hitbox(null, 2));
	this.endArea = new Area(null, new Hitbox(null, 2));
	this.init();
}

/**
Initializes the begin and end position of the labirynth and the hitbox of the begin/end
NOTE: Labirynth begin/end has to be on the top/bot
*/
Maze.prototype.init = function()
{
	var canvas = document.createElement('canvas');
	var context = canvas.getContext('2d');
	var tolerance = 0;

	drawImageOnCanvas(this.src, context);
	
	while((null == this.beginArea.pos || null == this.endArea.pos) && parseInt(context.canvas.height*OPT_MAZE_INITTOLERANCE) >= tolerance)
	{
		//begin
		if(null == this.beginArea.beginPos)
		{
			this.beginArea.pos = findColorInLine(new Position(0, 0 + tolerance), new Position(context.canvas.width, 0 + tolerance), CONST_COL_WHITE, context);

			//hitbox width begin area
			if(null != this.beginArea.pos)
			{
				var tmpPos = findColorInLine(this.beginArea.pos, new Position(context.canvas.width, this.beginArea.pos.y), CONST_COL_BLACK, context);
				this.endArea.hitbox.width = tmpPos.x - this.beginArea.pos.x;
			}
		}

		if(null == this.endArea.pos)
		{
			this.endArea.pos = findColorInLine(new Position(0, context.canvas.height - tolerance), new Position(context.canvas.width, context.canvas.height - tolerance), CONST_COL_WHITE, context);
			
			//hitbox width end area
			if(null != this.endArea.pos)
			{
				var tmpPos = findColorInLine(this.endArea.pos, new Position(context.canvas.width, this.endArea.pos.y), CONST_COL_BLACK, context);
				this.endArea.hitbox.width = tmpPos.x - this.beginArea.pos.x;
				console.log("Endarea hitbox: " + this.endArea.hitbox.width);
			}		
		}
		tolerance++;
	}
}