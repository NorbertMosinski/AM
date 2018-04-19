/**
Hitbox constructor.
@param width: Number represanting the width of the hitbox
@param height: Number represanting the height of the hitbox
*/
var Hitbox = function(width, height)
{
	this.width = width;
	this.height = height;
}

/**
Creates a copy of the passed hitbox.
@param hitbox: Hitbox object to be cloned
@return: Hitbox object that was cloned , NULL if the passed object was null
*/
function new_Hitbox(hitbox)
{
	if(null == hitbox)
		return null;
	return new Hitbox(hitbox.width, hitbox.height);	
}

/**
Checks if the passed Hitbox objects all equal this one.
@param hitboxes: Array containing the the Hitbox objects to be compared to this one
@return TRUE if all are equal , FALSE if not
*/
Hitbox.prototype.equals = function(hitboxes)
{
	for(var i = 0; i < hitboxes.length; i++)
		if(this.width != hitboxes[i].width || this.height != hitboxes[i].height)
		return false;
	return true;
}