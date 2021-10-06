function InstallChromium() {
  document.getElementById("InstallMessage").style.display="block"();
  window.location="sources/ungoogled-chromium_55.0.2883.87-1_windows_x64.zip";
  document.getElementById("InstallMessage").style.display="none"();
  document.getElementById("InstallMessageLegacy").style.display="block"();
  window.location="sources/flash_windows_chromium.msi";
  document.getElementById("InstallMessageLegacy").style.display="none"();
}
