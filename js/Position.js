var Position = function (x, y)
{
	this.x = x;
	this.y = y;
}

/**
Creates an new position with the same values like pos
@param pos: the position to be cloned
@return: new Position object with same values as pos or null, if the passed pos is null.
*/
new_Position = function(pos)
{
	if(pos != null)
		return new Position(pos.x, pos.y);
	return null;
}

/**
Adds the value of an position to this position. No effect if pos is null.
@param pos: the position containing the values to be added to this position
*/
Position.prototype.addPos = function(pos)
{
	if(pos != null)
	{
		this.x += pos.x;
		this.y += pos.y;
	}
}