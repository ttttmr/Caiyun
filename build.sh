
#!/bin/bash

cd build

rm -rf chrome

mkdir chrome
cp -r ../src/* chrome/
cp ../manifest/chrome.json chrome/manifest.json

rm -rf firefox

mkdir firefox
cp -r ../src/* firefox/
cp ../manifest/firefox.json firefox/manifest.json

cd firefox
zip -rq ../caiyun_firefox.zip ./*
cd ..

cd ..