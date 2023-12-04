// Déclaration des modules à importer
const express = require('express');
const app = express();
const OpenApiValidator = require('express-openapi-validator');

// Utilisation de middleware globaux
app.use(express.json()); // Permet de parser automatiquement le json en entrée

app.use(
    OpenApiValidator.middleware({
      apiSpec: './open-api.yaml',
      ignoreUndocumented: true
    }),
  );

const spec = path.join(__dirname, './open-api.yaml');
app.use('/spec', express.static(spec));

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello world');
});

// Déclaration globale du middleware d'erreur, on assume que le paramètre error, possède certains attributs
app.use((error, req, res, next) => {
    res.status(error.status || 500)
        .json({success: false, message: error.message, status: error.status});
});


// On oublie pas d'exporter pour tester
module.exports = app