var Person = function(src, area)
{
	//person image
	this.src = src;
	//persons area
	this.area = new Area(area.pos, area.hitbox);
	this.updateViewStyle();
}

/**
Sets the actual position to a new position. No effect if pos is null.
@param pos: the new position
*/
Person.prototype.setPos = function(pos)
{
	if(null != pos)
	{
		this.area.setPos(new Position(pos.x, pos.y));
		this.updateViewStyle();
	}
}

/**
Moves the person in the given direction by the given count of steps.
@param direction: The direction to move the person to
@param steps: Number of steps the person will be moved by
*/
Person.prototype.move = function(direction, steps)
{
	this.area.setPos(new Position(this.area.pos.x + (direction.x * steps), this.area.pos.y + (direction.y * steps)));
	this.updateViewStyle();
}

/**
Updates the style settings in the html document, the visual representation of the person.
*/
Person.prototype.updateViewStyle = function()
{
	this.src.style.left = this.area.pos.x + "px";
	this.src.style.top = this.area.pos.y  + "px";	
}