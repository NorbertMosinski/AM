var Person = function(src, area)
{
	this.src = src;
	this.area = new Area(area.pos, area.hitbox);
	this.updateViewStyle();
}

/**
Sets the actual position to a new position.
@param pos: the new position
*/
Person.prototype.setPos = function(pos)
{
	this.area.pos = new Position(pos.x, pos.y);
	this.updateViewStyle();
}

/**
Moves the person in the given direction by the given steps
@param direction: The direction to move the person to
@param steps: Number of steps the person will be moved by
*/
Person.prototype.move = function(direction, steps)
{
	this.area.pos.x += direction.x * steps;
	this.area.pos.y += direction.y * steps;
	this.updateViewStyle();
}

/**
Updates the style settings in the html document, the visual representation of the person
*/
Person.prototype.updateViewStyle = function()
{
	this.src.style.left = this.area.pos.x + "px";
	this.src.style.top = this.area.pos.y  + "px";	
}