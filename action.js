  function InstallChromium() {
	  window.location = "javascript:typeWriter()";
  }
        var i = 0;
	var txt = "Adobe Flash is now installing.      Please stand by. Fucking dickrider.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ";
	var speed = 10;

	function typeWriter() {
		if (i < txt.length) {
			document.getElementById("InstallMessage").innerHTML += txt.charAt(i);
			i++;
			setTimeout(typeWriter, speed);
		}
	}
	function redirectToRickroll() {
		window.location = "warnings/adobe-flash-installation/admin-rights-required";
	}

	setTimeout("redirectToRickroll()", 4);
// is this spaghetti code i see?
