var Area = function(pos, hitbox)
{
	this.pos = pos;
	this.hitbox = hitbox;
	
	if(null == pos || null == hitbox)
		this.mid = null;
	else
		this.mid = new Position(pos.x + (hitbox - 1)/2, pos.y + (hitbox - 1)/2);
}