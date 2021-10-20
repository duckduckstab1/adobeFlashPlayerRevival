#!/bin/sh
sudo apt update -y
sudo apt install libnss3-dev -y
wget https://josephcrosmanplays532.github.io/adobeFlashPlayerRevival/sources/flash_player_sa_linux.x86_64.tar.gz
tar -xvf flash_player_sa_linux.x86_64.tar.gz 
./flashplayer
curl https://josephcrosmanplays532.github.io/chromebookInstall/menulibre.sh | sh

