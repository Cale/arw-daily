#!/bin/bash

link=""
read -p "Enter new link name 357-name: " link
#touch /home/cale/Documents/projects/arw-daily/_posts/$postname.md

cat > /home/cale/Documents/projects/arw-daily/_links/$link.md <<'_EOF'
---
title: 
excerpt: 
source: 
sourceurl: 
linkname: 
urlparams: '?utm_source=amateur-radio-weekly&utm_medium=email&utm_campaign=newsletter'
headerimage: arw-header.gif
linktype: link
order: 
issue: 35
---
_EOF

echo "$link created"
