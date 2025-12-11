#!/bin/bash

cd /home/cale/Documents/projects/arw-daily/
npx @11ty/eleventy
rsync -av _site/_arw/ _site/css _site/js _site/images cale@calemooth.com:/var/www/html/hamweekly.com/public_html
