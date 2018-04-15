var Hitbox = function(width, height)
{
	this.width = width;
	this.height = height;
}

/**
Returns an new hitbox object containing the same value as the passed hitbox object
@param hitbox: The hitbox object to be cloned
@return: a copy of the passed hitbox object or null, if the passed object is null
*/
function new_Hitbox(hitbox)
{
	if(null == hitbox)
		return null;
	return new Hitbox(hitbox.width, hitbox.height);	
}