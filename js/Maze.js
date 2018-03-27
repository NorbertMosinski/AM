var Maze = function(src)
{
	this.src = src;
	this.beginPos = null;
	this.endPos = null;

	this.init();
}

/**
Initializes the begin and end position of the labirynth
*/
Maze.prototype.init = function()
{
	var canvas = document.createElement('canvas');
	var context = canvas.getContext('2d');
	var tolerance = 0;

	drawImageOnCanvas(this.src, context);

	while((null == this.beginPos || null == this.endPos) && parseInt(context.canvas.height*OPTIONS_MAZE_INITTOLERANCE) >= tolerance)
	{
		if(null == this.beginPos)
			this.beginPos = findColorInLine(new Position(0, 0 + tolerance), new Position(context.canvas.width, 0 + tolerance), newWhiteColor(), context);
		if(null == this.endPos)
			this.endPos = findColorInLine(new Position(0, context.canvas.height - tolerance), new Position(context.canvas.width, context.canvas.height - tolerance), newWhiteColor(), context);
		tolerance++;
	}
}