const html = require("html-template-tag");

module.exports = (animal) => html`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/style.css"> 
</head>
<body>
  <div>
    <h1><span>Animals</span>${animal.name}</h1>
    <p><a href="/index" class="goBack">Back to the list</a>
    <div>
      <h2><span>${animal.kind}</span> ${animal.breed}</h2>
      <p>Id: ${animal.id}</p>
      <p>Age: ${animal.age}</p>
    </div>
  </div>
</body>
</html>
`;