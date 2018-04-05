var Hitbox = function(width, height)
{
	this.width = width;
	this.height = height;
}

function new_Hitbox(hitbox)
{
	return new Hitbox(hitbox.width, hitbox.height);	
}