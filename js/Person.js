var Person = function(src, pos)
{
	this.src = src;
	this.pos = pos;
	this.updateViewStyle();
}

/**
Sets the actual position to a new position.
@param pos: the new position
*/
Person.prototype.setPos = function(pos)
{
	this.pos = new Position(pos.x, pos.y);
	this.updateViewStyle();
}

/**
Moves the person in the given direction by the given steps
@param direction: The direction to move the person to
@param steps: Number of steps the person will be moved by
*/
Person.prototype.move = function(direction, steps)
{
	this.pos.x += direction.x * steps;
	this.pos.y += direction.y * steps;
	this.updateViewStyle();
}

/**
Updates the style settings in the html document, the visual representation of the person
*/
Person.prototype.updateViewStyle = function()
{
	this.src.style.left = this.pos.x - OPT_PERSON_SIZE/2 + "px";
	this.src.style.top = this.pos.y - OPT_PERSON_SIZE/2 + "px";	
}