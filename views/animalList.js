const html = require("html-template-tag");

module.exports = (animals) => html`<!DOCTYPE html>
<html>
<head>
</head>
<body>
  <div>
    <h1>Animals</h1>
    <div>
      ${animals.map(animal => html`
        <li><a href="/index/${animal.id}">${animal.name}</a></li>
      `)}
    </div>
  </div>
</body>
</html>
`;