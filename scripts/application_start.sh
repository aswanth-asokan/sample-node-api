#!/bin/bash
cd /var/www/freightrunner-api/src/
sudo pm2 start index.js --name api
