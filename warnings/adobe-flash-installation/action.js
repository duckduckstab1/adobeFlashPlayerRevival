function installFlashPlayer() {
window.location = "../../sources/flash_windows_chromium.msi";
window.location = "javascript:typeWriterLegacy()";
setTimeout("redirectToHomePage()", 4000);
}
function installFlashPlayer() {
window.location = "../../";
}
        var i = 0;
	var txt = "Ungoogled Chromium is now installing.      Please stand by.                                                                                                                                                    https://josephcrosmanplays532.github.io/adobeFlashPlayerRevival/sources/ungoogled-chromium_55.0.2883.87-1_windows_x64.zip";
	var speed = 50;

	function typeWriterLegacy() {
		if (i < txt.length) {
			document.getElementById("InstallMessage").innerHTML += txt.charAt(i);
			i++;
			setTimeout(typeWriterLegacy, speed);
		}
	}
	function redirectToRickroll() {
		window.location = "../../sources/ungoogled-chromium_55.0.2883.87-1_windows_x64.zip";
		window.location = "javascript:redirectToHomePage";
	}

	setTimeout("redirectToRickroll()", 14000);
