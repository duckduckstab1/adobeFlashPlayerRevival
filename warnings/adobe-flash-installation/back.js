	var i = 0;
	var txt = "Redirecting you back to the homepage...                                                                                                                                                    https://josephcrosmanplays532.github.io/adobeFlashPlayerRevival/";
	var speed = 50;

	function typeWriterBack() {
		document.getElementById("InstallMessage").style.display = "none";
		if (i < txt.length) {
			document.getElementById("RedirectMessage").innerHTML += txt.charAt(i);
			i++;
			setTimeout(typeWriterBack, speed);
		}
	}
	function redirectToRickroll() {
		window.location = "../../";
		document.getElementById("InstallMessage").style.display = "block";
	}

	setTimeout("redirectToRickroll()", 14000);
