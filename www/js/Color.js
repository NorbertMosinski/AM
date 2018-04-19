/**
Creates an new Color object.
@param r: the red color value
@param g: the green color value
@param b: the blue color value
*/
var Color = function (r, g, b)
{
	this.r = r;
	this.g = g;
	this.b = b;
}

/**
Checks if the passed color objects all equal this one.
@param colors: the array containing the color objects to be compared to this
@return true if all are equal, else false
*/
Color.prototype.equals = function(colors)
{
	for(var i = 0; i < colors.length; i++)
		if(this.r != colors[i].r || this.g != colors[i].g || this.b != colors[i].b)
			return false;
	return true;
}