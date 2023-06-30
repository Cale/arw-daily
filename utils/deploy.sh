#!/bin/bash

cd /home/cale/Documents/projects/arw-daily/
npx @11ty/eleventy
rsync -a _site/ cale@calemooth.com:/var/www/html/daily.hamweekly.com/public_html
