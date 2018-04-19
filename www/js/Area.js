/**
Area constructor.
@param pos: Position object representing the upper left corner of the area
@param hitbox: Hitbox object representing the hitbox of the area
*/
var Area = function(pos, hitbox)
{
	//upper left corner
	this.pos = pos;
	//the hitbox of the area
	this.hitbox = hitbox;
	//the mid of the area
	this.mid = null;
	
	this.updateMid();
}

/**
Creates a copy of the passed area.
@param area: Area object to be cloned
@return a copy of the Area object, null if the passed object is null
*/
Color.prototype.new_Area = function(area)
{
	if(null == area)
		return null;

	return new Area(area.pos, area.hitbox);
}

/**
Updates the mid of the area concerning the pos and hitbox.
*/
Area.prototype.updateMid = function()
{
	if(null == this.pos || null == this.hitbox)
		this.mid = null;
	else
		this.mid = new Position(this.pos.x + (this.hitbox.width - 1)/2, this.pos.y + (this.hitbox.height - 1)/2);	
}

/**
Sets the position of the area (upper left corner) and updates the mid of the area.
@param pos: Position object to be set for this area
*/
Area.prototype.setPos = function(pos)
{
	this.pos = new_Position(pos);
	this.updateMid();
}

/**
Sets the hitbox of the area and updates the mid of the area.
@param hitbox: Hitbox object to be set for this area
*/
Area.prototype.setHitbox = function(hitbox)
{
	this.hitbox = new_Hitbox(hitbox);
	this.updateMid();
}

/**
Checks if the passed area objects all equal this one.
@param areas: Array containing the the area objects to be compared to this
@return TRUE if all are equal , FALSE if not
*/
Area.prototype.equals = function(areas)
{
	for(var i = 0; i < areas.length; i++)
		if(!this.pos.equals([areas[i].pos]) || !this.hitbox.equals([areas[i].hitbox]) || !this.mid.equals([areas[i].mid]))
		return false;
	return true;
}