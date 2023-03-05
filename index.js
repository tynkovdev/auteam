const express = require(`express`);
const hbs = require(`hbs`)
const app = express();

const port = 8080;

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

app.set(`views`, `views`);
app.set(`view engine`, `hbs`);

app.get(`/`, (req, res) => {
    res.render(`index`);
});
