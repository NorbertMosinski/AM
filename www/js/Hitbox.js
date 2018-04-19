/**
Creates an new Hitbox object
@param width: the width of the hitbox
@param height: the height of the hitbox
*/
var Hitbox = function(width, height)
{
	this.width = width;
	this.height = height;
}

/**
Returns an new hitbox object containing the same value as the passed hitbox object.
@param hitbox: The hitbox object to be cloned
@return: a copy of the passed hitbox object or null, if the passed object is null
*/
function new_Hitbox(hitbox)
{
	if(null == hitbox)
		return null;
	return new Hitbox(hitbox.width, hitbox.height);	
}

/**
Checks if the passed hitbox objects all equal this one.
@param hitboxes: array containing the the hitbox objects to be compared to this one
@return true if all are equal, else false
*/
Hitbox.prototype.equals = function(hitboxes)
{
	for(var i = 0; i < hitboxes.length; i++)
		if(this.width != hitboxes[i].width || this.height != hitboxes[i].height)
		return false;
	return true;
}