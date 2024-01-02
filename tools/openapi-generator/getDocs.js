const fs = require('fs');

fetch('http://localhost:3001/api-json').then(async (res) => {
  const apiJson = await res.json();

  fs.writeFileSync(
    `tools/openapi-generator/api-docs.json`,
    JSON.stringify(apiJson),
  );
});
