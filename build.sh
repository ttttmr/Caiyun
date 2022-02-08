
#!/bin/bash

rm -rf build

mkdir build

cd build

mkdir chrome
cp -r ../src/* chrome/
cp ../manifest/chrome.json chrome/manifest.json

cd chrome
zip -rq ../caiyun.crx ./*
cd ..

mkdir firefox
cp -r ../src/* firefox/
cp ../manifest/firefox.json firefox/manifest.json

cd firefox
zip -rq ../caiyun.ipx ./*
cd ..

cd ..