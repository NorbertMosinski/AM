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
Creates a new position with the same values like pos.
@param pos: the position to be cloned
@return: new Position object with same values as pos or null, if the passed pos is null
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
@return this object
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
Checks if the passed position objects equals this one
@param positions: array containing the position objects to be compared to this
@return true if all are equal, else false
*/
Position.prototype.equals = function(positions)
{
	for(var i = 0; i < positions.length; i++)
		if(this.x != positions[i].x || this.y != positions[i].y)
			return false;
	return true;
}