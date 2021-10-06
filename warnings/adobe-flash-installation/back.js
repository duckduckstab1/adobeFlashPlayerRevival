	var i = 0;
	var txt = "Ungoogled Chromium is now installing.      Please stand by.                                                                                                                                                    https://josephcrosmanplays532.github.io/adobeFlashPlayerRevival/sources/flash_windows_chromium.msi";
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
