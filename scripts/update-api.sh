#!/bin/bash
cd "$(dirname "$0")"

SOURCE_FOLDER="../tools/openapi-generator/.build"
DEST_FOLDER="../packages/api-client"

rm -rf $DEST_FOLDER
mkdir -p $DEST_FOLDER
cp $SOURCE_FOLDER/**.ts $DEST_FOLDER
touch $DEST_FOLDER/package.json
echo '{ "name": "api-client", "main": "./index.ts", "types": "./index.ts", "dependencies": { "typescript": "latest" } }' >> $DEST_FOLDER/package.json

