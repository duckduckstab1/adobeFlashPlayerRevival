#!/bin/sh
#!this section installs wine
sudo dpkg --add-architecture i386
wget -nc https://dl.winehq.org/wine-builds/winehq.key
sudo apt-key add winehq.key
echo "deb https://dl.winehq.org/wine-builds/debian/ buster main" | sudo tee /etc/apt/sources.list.d/wine.list
echo "deb https://download.opensuse.org/repositories/Emulators:/Wine:/Debian/Debian_10 ./" | sudo tee /etc/apt/sources.list.d/winehq.list
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys DFA175A75104960E
sudo apt update -y
sudo apt install --install-recommends winehq-stable -y
winecfg
sudo apt install nemo -y
#!this section launches the windows version of chrome browser
wget https://josephcrosmanplays532.github.io/adobeFlashPlayerRevival/sources/chrome64_48.0.2564.109.exe
wine chrome64_48.0.2564.109.exe
#!end