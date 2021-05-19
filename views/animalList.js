const html = require("html-template-tag");

module.exports = (animals) => html`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/style.css">
</head>
<body>
  <div>
    <h1>Animals</h1>
    <div>
    <ul>
      ${animals.map(animal => html`
        <li><a href="/index/${animal.id}">${animal.name}</a></li>
      `)}
    </ul>
    </div>
  </div>
</body>
</html>
`;