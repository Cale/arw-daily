#!/bin/bash

postname=""
read -p "Enter new post name YYYY-MM-DD-name: " postname
#touch ../_posts/$postname.md

cat > ../_posts/$postname.md <<'_EOF'
---
title: 
date: 2023-07-00
excerpt: 
source: 
sourceurl: 
tags:
- post
---
_EOF

echo "$postname created"
