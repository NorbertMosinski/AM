var Position = function (x, y)
{
	this.x = x;
	this.y = y;
}

/**
Creates an new position with the same values like pos
@param pos: the position to be cloned
@return: new Position object with same values as pos
*/
new_Position = function(pos)
{
	return new Position(pos.x, pos.y);
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