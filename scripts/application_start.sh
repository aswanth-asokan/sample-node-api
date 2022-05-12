#!/bin/bash
cd /var/www/freightrunner-api/
sudo pm2 start index.js --name api
