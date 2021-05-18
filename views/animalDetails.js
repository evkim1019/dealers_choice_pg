const html = require("html-template-tag");

module.exports = (animal) => html`<!DOCTYPE html>
<html>
<head>
</head>
<body>
  <div>
    <h1>${animal.id}</h1>
    <div>
      <h2>${animal.name}</h2>
      <p>Kind: ${animal.kind}</p>
      <p>Age: ${animal.age}</p>
    </div>
  </div>
</body>
</html>
`;