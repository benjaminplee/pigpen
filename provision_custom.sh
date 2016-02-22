#!/usr/bin/env bash

echo Performing custom task provisioning

sudo apt-get install python python-pip -y

sudo pip install objectpath

echo 'function query() { for f in /vagrant/data/*.json; do objectpath -e "$1" $f ; done }' >> ~/.bashrc
