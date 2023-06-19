#!/bin/bash
cd /var/www/freightrunner-web/
sudo npm install
sudo pm2 start ecosystem.config.json