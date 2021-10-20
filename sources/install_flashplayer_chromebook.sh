#!/bin/sh
sudo apt update -y
sudo apt install libnss3-dev -y
wget https://fpdownload.macromedia.com/pub/flashplayer/updaters/32/flash_player_sa_linux.x86_64.tar.gz
tar -xvf flash_player_sa_linux.x86_64.tar.gz 
./flashplayer
sudo apt install menulibre -y
menulibre

