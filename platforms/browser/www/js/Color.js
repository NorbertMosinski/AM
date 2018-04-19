/**
Color constructor.
@param r: Number represanting the red color value
@param g: Number represanting the green color value
@param b: Number represanting the blue color value
*/
var Color = function (r, g, b)
{
	this.r = r;
	this.g = g;
	this.b = b;
}

/**
Creates a copy of the passed color.
@param color: Color object to be cloned
@return Color object that was cloned , NULL if the passed object is null
*/
Color.prototype.new_Color = function(color)
{
	if(null == color)
		return null;

	return new Color(color.r, color.g, color.b);
}

/**
Checks if the passed colors all equal this one.
@param colors: Array containing the Color objects to be compared to this
@return TRUE if all are equal , FALSE if not
*/
Color.prototype.equals = function(colors)
{
	for(var i = 0; i < colors.length; i++)
		if(this.r != colors[i].r || this.g != colors[i].g || this.b != colors[i].b)
			return false;
	return true;
}