/*
document.addEventListener( "DOMContentLoaded", function(){
	document.removeEventListener( "DOMContentLoaded", arguments.callee, false );
	
	FB.init({
      appId      : '157695017741774',
      xfbml      : true,
	  status     : true,
      version    : 'v2.8'
    });
	
	FB.api('/me', {fields: 'last_name'}, function(response) {
	  console.log(response);
	});
	
	FB.api('/113124472034820', function(response) {
	  console.log(response);
	});
	
	var body = 'Reading JS SDK documentation';
	FB.api('/me/feed', 'post', { message: body }, function(response) {
	  if (!response || response.error) {
		alert('Error occured');
	  } else {
		alert('Post ID: ' + response.id);
	  }
	});
	
	FB.api(
		"/YairLapid/feed",
		function (response) {
		  if (response && !response.error) {
			// handle the result 
			console.log(response);
		  }
		}
	);
	
}, false );/* make the API call */

  window.fbAsyncInit = function() {
	FB.init({
	  appId      : '157695017741774',
	  xfbml      : true,
	  version    : 'v2.8'
	});

	FB.getLoginStatus(function(response) {
	  if (response.status === 'connected') {
		console.log('Logged in.');
		FB.api('/me/feed',function(response){
			var idDiv=document.getElementById('result');
			idDiv.textContent=JSON.stringify(response);
		}); 
	  }
	  else {
		console.log('initiate FB login...');
		FB.login();
	  }
	});


  };

  (function(d, s, id){
	 var js, fjs = d.getElementsByTagName(s)[0];
	 if (d.getElementById(id)) {return;}
	 js = d.createElement(s); js.id = id;
	 js.src = "http://connect.facebook.net/en_US/sdk.js";
	 console.log(js.length);
	 fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

