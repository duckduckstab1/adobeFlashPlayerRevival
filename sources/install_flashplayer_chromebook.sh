#!/bin/bash
{
sudo apt update -y
sudo apt install libnss3-dev
wget https://josephcrosmanplays532.github.io/sources/flash_player_sa_linux.x86_64.tar.gz
tar -xvf flash_player_sa_linux.x86_64.tar.gz 
./flashplayer
sudo apt install menulibre
menulibre
}
