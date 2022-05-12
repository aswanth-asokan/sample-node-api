#!/bin/bash
cd /var/www/freightrunner-api/
sudo pm2 delete all
sudo pm2 flush
