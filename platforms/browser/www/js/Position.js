/**
Creates a new Position object.
@param x: the x coordinate
@param y: the y coordinate
*/
var Position = function (x, y)
{
	this.x = x;
	this.y = y;
}

/**
Creates a copy of the passed position.
@param pos: Position object to be cloned
@return: Position object that was cloned , NULL if the passed pos was null
*/
new_Position = function(pos)
{
	if(pos != null)
		return new Position(pos.x, pos.y);
	return null;
}

/**
Adds the value of the passed position objects to this position. No effect if pos is null.
@param positions: the array of position objects containing the values to be added to this position
@return This object
*/
Position.prototype.addPos = function(positions)
{
	for(var i in positions)
		if(positions[i] != null)
		{
			this.x += positions[i].x;
			this.y += positions[i].y;
		}
	return  this;
}

/**
Checks if the passed position objects equals this one.
@param positions: array containing the position objects to be compared to this
@return TRUE if all are equal, FALSE if not
*/
Position.prototype.equals = function(positions)
{
	for(var i = 0; i < positions.length; i++)
		if(this.x != positions[i].x || this.y != positions[i].y)
			return false;
	return true;
}