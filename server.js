const app = require('./app');
const db = require('./models/index');

db.instance.sync({force: true}).then(async () => {
    console.log('Database connected and synchronized');

    await db.webnovels.create({title: "Webnovels", date: "2023-12-04"});

    app.listen(3000, () => {
        console.log('Server running on port 3000 !');
    });
}).catch((e) => {
    console.error(e);
});