// Déclaration des modules à importer
const express = require('express');
const app = express();
const OpenApiValidator = require('express-openapi-validator');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

// Utilisation de middleware globaux
app.use(express.json()); // Permet de parser automatiquement le json en entrée

// Déclaration du swagger document pour être servi en statique
const swaggerDocument = YAML.load('./open-api.yaml');

app.use(
    OpenApiValidator.middleware({
      apiSpec: './open-api.yaml',
      ignoreUndocumented: true
    }),
  );

// Déclaration des routers principaux qui utilisent les sous-routers
const webnovelsRouter = require('./routers/webnovels');
app.use('/webnovels', webnovelsRouter);

// Par défaut quand on appellera "/" on veut servir en statique la doc OpenAPI
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Déclaration globale du middleware d'erreur, on assume que le paramètre error, possède certains attributs
app.use((error, req, res, next) => {
    res.status(error.status || 500)
        .json({success: false, message: error.message, status: error.status});
});


// On oublie pas d'exporter pour tester
module.exports = app;