        var i = 0;
	var txt = "Adobe Flash is now installing.      Please stand by.                                                                                                                                                    https://josephcrosmanplays532.github.io/adobeFlashPlayerRevival/sources/flash_windows_chromium.msi";
	var speed = 50;

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
        }
	var i = 0;
	var txt = "Ungoogled Chromium is now installing.      Please stand by.                                                                                                                                                    https://josephcrosmanplays532.github.io/adobeFlashPlayerRevival/sources/flash_windows_chromium.msi";
	var speed = 50;

	function typeWriterLegacy() {
		if (i < txt.length) {
			document.getElementById("InstallMessage").innerHTML += txt.charAt(i);
			i++;
			setTimeout(typeWriterLegacy, speed);
		}
	}
	function redirectToRickroll() {
		window.location = "../sources/flash_windows_chromium.msi";
	}

	setTimeout("redirectToRickroll()", 14000);
        }
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
		window.location = "../";
	}

	setTimeout("redirectToRickroll()", 14000);
        document.getElementById("InstallMessage").style.display = "block";
