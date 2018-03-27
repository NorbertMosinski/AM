var Position = function (x, y)
{
	this.x = x;
	this.y = y;
}

/**
Adds the value of an position to this position
@param pos: the position containing the values to be added to this position
*/
Position.prototype.addPos = function(pos)
{
	this.x += pos.x;
	this.y += pos.y;
}