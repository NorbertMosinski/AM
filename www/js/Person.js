/**
Person constructor.
@param src: Reference to the image represanting the person
@param area: Area object representing the area of the person
*/
var Person = function(src, area)
{
	//person image
	this.src = src;
	//persons area
	this.area = new Area(area.pos, area.hitbox);
	
	this.src.style.width = OPT_PERSON_SIZE + "px";
	this.src.style.height = OPT_PERSON_SIZE + "px";

	this.updateViewStyle();
}

/**
Sets the actual position to a new position.
@param pos: Position object to be set for this person
NOTE: No effect if pos is null.
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
@param direction: Position object representing the direction to move the person to
@param steps: Number representing the number of steps the person will be moved by
*/
Person.prototype.move = function(direction, steps)
{
	this.area.setPos(new Position(this.area.pos.x + (direction.x * steps), this.area.pos.y + (direction.y * steps)));
}

/**
Updates the style settings in the html document, the visual representation of the person.
*/
Person.prototype.updateViewStyle = function()
{
	this.src.style.left = this.area.pos.x + "px";
	this.src.style.top = this.area.pos.y  + "px";	
}