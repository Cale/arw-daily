#!/bin/bash

postname=""
read -p "Enter new post name YYYY-MM-DD-name: " postname
#touch /home/cale/Documents/projects/arw-daily/_posts/$postname.md

cat > /home/cale/Documents/projects/arw-daily/_posts/$postname.md <<'_EOF'
---
title: 
date: 2024-11-00
excerpt: 
source: 
sourceurl: 
tags:
- post
---
_EOF

echo "$postname created"
