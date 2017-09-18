function sendMessage ()
{
	var name = document.getElementById('name').value;
	var from = document.getElementById('from').value;
	var message = document.getElementById('body').value;
	console.log(name);
	axios.post('/WildBadgers/Axios/email.php', {name: document.getElementById('name'), from: document.getElementById('from'), body: document.getElementById('body')});		
	console.log(document.getElementById('name').value);
}


