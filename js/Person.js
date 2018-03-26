var Person = function(src, pos)
{
	this.src = src;
	this.pos = pos;
}

/**
Sets the actual position to a new position.
@param pos: the new position
*/
Person.prototype.setPos = function(pos)
{
	this.pos = new Position(pos.x, pos.y);
	this.src.style.left = this.pos.x + "px";
	this.src.style.top = this.pos.y + "px";	
}