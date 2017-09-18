function sendMessage ()
{
	axios.post('/WildBadgers/Axios/email.php', 
		{
		name: document.getElementById('name'), 
		from: document.getElementById('from'), 
		body: document.getElementById('body')
		});
		
		

}


