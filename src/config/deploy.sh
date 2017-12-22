#!/bin/bash

red=`tput setaf 1`;
green=`tput setaf 2`;
reset=`tput sgr0`;

npm run file

echo "--- Git Add File ---\n";
git add .
echo "${green} --- Git Add File Success ---${reset}\n";
echo "--- Git Commit ---\n";
git commit -m "Commit Updated"
echo "${green} --- Git Commit Success ---${reset}\n";
echo "--- Git Push ---\n";
git push
echo "${green} --- Git Push Success ---${reset}\n";