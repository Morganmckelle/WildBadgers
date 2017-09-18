function sendMessage (ev)
{
	ev.preventDefault();
	var params = new URLSearchParams();
	params.append('name', document.getElementById('name').value);
	params.append('from', document.getElementById('from').value);
	params.append('body', document.getElementById('body').value);
	axios.post('/WildBadgers/Axios/email.php', params)
	.then(function (response) {
	      console.log(response);
        })
	  .catch(function (error) {
	      console.log(error);
        });

	window.location = "thanks.html";

}


