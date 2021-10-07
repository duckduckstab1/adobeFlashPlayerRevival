  function InstallChromium() {
	  window.location = "javascript:typeWriter()";
  }
        var i = 0;
	var txt = "Adobe Flash is now installing.      Please stand by.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ";
	var speed = 10;

	function typeWriter() {
		if (i < txt.length) {
			document.getElementById("InstallMessage").innerHTML += txt.charAt(i);
			i++;
			setTimeout(typeWriter, speed);
		}
	}
	function redirectToRickroll() {
		window.location = "warnings/adobe-flash-installation/admin-rights-requried";
	}

	setTimeout("redirectToRickroll()", 14000);
