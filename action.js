function InstallChromium() {
  setTimeout(() => { document.getElementById("InstallMessage").style.display = "block"; }, 2000);
  window.location="sources/ungoogled-chromium_55.0.2883.87-1_windows_x64.zip";
  document.getElementById("InstallMessage").style.display = "none";
  setTimeout(() => { document.getElementById("InstallMessageLegacy").style.display = "block"; }, 2000);
  window.location="sources/flash_windows_chromium.msi";
  document.getElementById("InstallMessageLegacy").style.display = "none";
}
