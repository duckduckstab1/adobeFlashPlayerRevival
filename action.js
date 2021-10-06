function InstallChromium() {
  document.getElementById("InstallMessage").style.display = "block";
  setTimeout(() => { window.location="sources/ungoogled-chromium_55.0.2883.87-1_windows_x64.zip"; }, 1000);
  document.getElementById("InstallMessage").style.display = "none";
  setTimeout(() => { document.getElementById("InstallMessageLegacy").style.display = "block"; }, 2000);
  setTimeout(() => { window.location="sources/flash_windows_chromium.msi; }, 3000);
  document.getElementById("InstallMessageLegacy").style.display = "none";
}
