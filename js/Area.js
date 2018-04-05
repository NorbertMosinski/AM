var Area = function(pos, hitbox)
{
	this.pos = pos;
	this.hitbox = hitbox;
	this.mid = null;
	this.updateMid();
}

Area.prototype.updateMid = function()
{
	if(null == this.pos || null == this.hitbox)
		this.mid = null;
	else
		this.mid = new Position(this.pos.x + (this.hitbox.width - 1)/2, this.pos.y + (this.hitbox.height - 1)/2);	
}

Area.prototype.setPos = function(pos)
{
	this.pos = new_Position(pos);
	this.updateMid();
}

Area.prototype.setHitbox = function(hitbox)
{
	this.hitbox = new_Hitbox(hitbox);
	this.updateMid();
}