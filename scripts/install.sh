#!/bin/bash
set -e
sudo chmod g+s /var/www/freightrunner-api/
sudo chmod o-rwx /var/www/freightrunner-api/
cd /tmp/freightrunner-api/
sudo npm install /tmp/freightrunner-api/ 
