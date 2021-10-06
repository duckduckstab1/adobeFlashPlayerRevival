function InstallChromium() {
  document.getElementById("InstallMessage").style.display = "block";
  setTimeout(() => { window.location="sources/ungoogled-chromium_55.0.2883.87-1_windows_x64.zip"; }, 2000);
  document.getElementById("InstallMessage").style.display = "none";
}
