/**
Shows all elements of the main screen u want to switch to
@param p_id_new: All elements beginning with this string will be shown, all others hiden
*/
function changeMainScreenTo(p_id_new)
{
	/*
	for(var i in buttons)
	{
		if(buttons[i].id.substring(0, p_id_new.length) == p_id_new)
			buttons[i].classList.remove("hidden");
		else
			buttons[i].classList.add("hidden");
	}

	for(var i in images)
	{
		if(images[i].id.substring(0, p_id_new.length) == p_id_new)
			images[i].classList.remove("hidden");
		else
			images[i].classList.add("hidden");	
	}

	for(var i in videos)
	{
		if(videos[i].id.substring(0, p_id_new.length) == p_id_new)
		{
			videos[i].classList.remove("hidden");
			videos[i].play();
		}

		else
			videos[i].classList.add("hidden");
	}
	*/
	for(var i in containers)
	{
		if(containers[i].id.substring(0, p_id_new.length) == p_id_new)
			containers[i].classList.remove("hidden");
		else
			containers[i].classList.add("hidden");	
	}

}