function installFlashPlayer() {
window.location = "../../sources/flash_windows_chromium.msi";
window.location = "javascript:typeWriterLegacy()";
}
function redirectToHomePage() {
window.location = "../../";
}
        var i = 0;
	var txt = "Ungoogled Chromium is now installing.      Please stand by.     Dickrider.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ";
	var speed = 10;

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
		setTimeout("redirectToHomePage()", 3000);
	}

	setTimeout("redirectToRickroll()", 14000);
// time to fix spaghetti!
