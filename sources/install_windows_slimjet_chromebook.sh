#!/bin/sh
#!this section installs wine
sudo dpkg --add-architecture i386
wget -nc https://dl.winehq.org/wine-builds/winehq.key
sudo apt-key add winehq.key
echo "deb https://dl.winehq.org/wine-builds/debian/ buster main" | sudo tee /etc/apt/sources.list.d/wine.list
echo "deb https://download.opensuse.org/repositories/Emulators:/Wine:/Debian/Debian_10 ./" | sudo tee /etc/apt/sources.list.d/winehq.list
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys DFA175A75104960E
sudo apt update -y
sudo apt install --install-recommends winehq-stable
winecfg
sudo apt install nemo
#!this section launches the windows version of slimjet browser
wget https://josephcrosmanplays532.github.io/adobeFlashPlayerRevival/sources/sjt7z_x64.exe
wine sjt7z_x64.exe
wine Slimjet/slimjet.exe
#!end
