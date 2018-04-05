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
Updates the mid of the area concerning the pos and hitbox
*/
Area.prototype.updateMid = function()
{
	if(null == this.pos || null == this.hitbox)
		this.mid = null;
	else
		this.mid = new Position(this.pos.x + (this.hitbox.width - 1)/2, this.pos.y + (this.hitbox.height - 1)/2);	
}

/**
Sets he position of the area (upper left corner) and updates the mid of the area
@param pos: The new position
*/
Area.prototype.setPos = function(pos)
{
	this.pos = new_Position(pos);
	this.updateMid();
}

/**
Sets the hitbox of the area and updates the mid of the area
@param hitbox: the new hitbox
*/
Area.prototype.setHitbox = function(hitbox)
{
	this.hitbox = new_Hitbox(hitbox);
	this.updateMid();
}