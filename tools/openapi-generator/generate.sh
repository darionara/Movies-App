openapi-generator-cli generate \
    -i api-docs.json \
    --generator-name typescript-axios \
    -o /local/out \
    --additional-properties=useSingleRequestParameter=true
