/**
Shows all containers on the main screen u want to switch to.
@param p_id_new: String. All containers beginning with this string will be shown, all others hidden
*/
function changeMainScreenTo(p_id_new)
{

	for(var i in containers)
	{
		if(containers[i].id.substring(0, p_id_new.length) == p_id_new)
			containers[i].classList.remove("hidden");
		else
			containers[i].classList.add("hidden");	
	}

}

/**
Converts a string like "200px" to number.
@param src: String source
@return Number created from the string
*/
function pxToValue(src)
{
	return parseInt(src.substring(0, src.length-2));
}

/**
Looks for a specific color in a line in the canvas context. 
If the start- and endposition are not in the same line, the function will be useless.
@param posBegin: Position object representing the start
@param posEnd: Position object representing the end
@param color: Color object that the function will be looking for
@param context: Context object of the canvas containing the drawn image 
@return: Position object representing the position of the color if found , NULL if not
*/
function findSpecificColorInLine(posBegin, posEnd, color, context)
{
	for(var i = posBegin.x; i <= posEnd.x; i++)
	{
		for(var j = posBegin.y; j <= posEnd.y; j++)
		{
			if(posEnd.y != 0)
				//console.log("(" + i + "," + j + ")" + "r: " + context.getImageData(i, j, 1, 1).data[0] + " g:" + context.getImageData(i, j, 1, 1).data[1] + " b: " + context.getImageData(i, j, 1, 1).data[2]);
				if(new Color(context.getImageData(i, j, 1, 1).data[0], context.getImageData(i, j, 1, 1).data[1], context.getImageData(i, j, 1, 1).data[2]).equals([color]))
				{
					return new Position(i, j);
				}
		}	
	}
	return null;
}

/**
Looks for a color in a line that is different from the passed color as an argument in the canvas context. 
If the start- and endposition are not in the same line, the function will be useless.
@param posBegin: Position object representing the start
@param posEnd: Position object representing the end
@param color: Color object representing the different color that the function will be looking for
@param context: Context object of the canvas containing the drawn image 
@return: Position object representing the position of the different color if found , NULL if not
*/
function findDifferentColorInLine(posBegin, posEnd, color, context)
{
	for(var i = posBegin.x; i <= posEnd.x; i++)
	{
		for(var j = posBegin.y; j <= posEnd.y; j++)
		{
			if(posEnd.y != 0)
				//console.log("(" + i + "," + j + ")" + "r: " + context.getImageData(i, j, 1, 1).data[0] + " g:" + context.getImageData(i, j, 1, 1).data[1] + " b: " + context.getImageData(i, j, 1, 1).data[2]);
				if(!(new Color(context.getImageData(i, j, 1, 1).data[0], context.getImageData(i, j, 1, 1).data[1], context.getImageData(i, j, 1, 1).data[2]).equals([color])))
				{
					return new Position(i, j);
				}
		}	
	}
	return null;
}


/**
Gives the color of the canvas context at the given position.
@param pos: Position object
@param context: Context object of the canvas
@return: Color object representing the color at the given position
*/
function imageDataToColor(pos, context)
{
	return new Color(context.getImageData(pos.x, pos.y, 1, 1).data[0], context.getImageData(pos.x, pos.y, 1, 1).data[1], context.getImageData(pos.x, pos.y, 1, 1).data[2]);
}

/**
Draws an image on the given canvas context and sets the size of the canvas.
@param src: Reference to the source of the image
@param context: Context object of the canvas
*/
function drawImageOnCanvas(src, context)
{
	//set size of canvas
	context.canvas.width = OPT_CANVAS_WIDTH;
	context.canvas.height = OPT_CANVAS_HEIGHT;

	//draw the image on canvas	
	context.drawImage(src, 0, 0, src.width, src.height, 0, 0, OPT_CANVAS_WIDTH, OPT_CANVAS_HEIGHT);
}

/**
Looks for the button that matches the id.
@param id: String representing the id of the button
@return: Reference to the button if found , NULL if not
*/
function getButton(id)
{
	for(var i in buttons)
		if(buttons[i].id == id)
			return buttons[i];
	return null;
}

/**
Looks for the video that matches the id.
@param id: String representing the id of the video
@return: Reference to the video if found , NULL if not
*/
function getVideo(id)
{
	for(var i in videos)
		if(videos[i].id == id)
			return videos[i];
	return null;
}

/**
This function realizes a timer.
@param duration: String representing the timer duration
@param display: DIV content where the timer will be displayed
@return: Reference to the clock
*/
function startTimer(duration, display) 
{
    var timer = duration, minutes, seconds;
    var clock = setInterval(function () 
    {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) 
        {
        	clearInterval(clock);
            timer = duration;
            getButton("P13_boton_lose").click();
        }
    }, 1000);
    return clock;
}

/**
Checks if 2 areas colidate with each other concerning their positions and hitboxes.
@param o1: Area object representing the first object for comparison
@param o2: Area object representing the second object for comparison
@return TRUE if the objects colidate , FALSE if not
NOTE: Each such object passed to this function has to have an area.
*/
function colision(a1, a2)
{
	var xcol = false , ycol = false;	
	
	if(a1.pos.x <= a2.pos.x && ((a1.pos.x + a1.hitbox.width) > a2.pos.x))
		xcol = true;
	else if(a2.pos.x < a1.pos.x && ((a2.pos.x + a2.hitbox.width) > a1.pos.x))
		xcol = true;

	if(a1.pos.y <= a2.pos.y && ((a1.pos.y + a1.hitbox.height) > a2.pos.y))
		ycol = true;
	else if(a2.pos.y < a1.pos.y && ((a2.pos.y + a2.hitbox.height) > a1.pos.y))
		ycol = true;

	if(xcol && ycol)
		return true;
	return false;
}

/**
Calculates the index of an array with the minimum value.
@param array: Array object containing the values
@return Number representing the index of the array containing the minimum value 
*/
function min(array)
{
	var ret = 0;
	var min = array[0];

	for(var i = 0; i < array.length; i++)
		if(array[i] < min)
		{
			min = array[i];
			ret = i;
		}
	return ret;
}