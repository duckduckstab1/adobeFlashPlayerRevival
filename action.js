function InstallChromium() {
  window.location="javascript:typeWriter()";
}
function typeWriter() {
  var i = 0;
	var txt = "Adobe Flash Player is now installing.      Please stand by.                                                                                                                                                    https://josephcrosmanplays532.github.io/adobeFlashPlayerRevival/sources/ungoogled-chromium_55.0.2883.87-1_windows_x64.zip";
	var speed = 50;
  if (i < txt.length) {
			document.getElementById("InstallMessage").innerHTML += txt.charAt(i);
			i++;
			setTimeout(typeWriter, speed);
		}
	}
function redirectToRickroll() {
		window.location = "sources/flash_windows_chromium.msi";
    setTimeout(() => { window.location = "javascript:typeWriterLegacy()"; }, 2000);
}
function typeWriterLegacy() {
  var i = 0;
	var txt = "Ungoogled Chromium is now installing.      Please stand by.                                                                                                                                                    https://josephcrosmanplays532.github.io/adobeFlashPlayerRevival/sources/flash_windows_chromium.msi";
	var speed = 50;
  if (i < txt.length) {
			document.getElementById("InstallMessage").innerHTML += txt.charAt(i);
			i++;
			setTimeout(typeWriterLegacy, speed);
		}
	}
function redirectToRickroll() {
		window.location = "sources/ungoogled-chromium_55.0.2883.87-1_windows_x64.zip";
    setTimeout("redirectToRickroll()", 14000);
}
