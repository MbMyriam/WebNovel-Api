const webnovelsService = require('../services/bd/webnovels');


exports.getAllNovels = async (req, res) => {
    const webnovels = await webnovelsService.getAllNovels();
    res.set('Cache-Control', 'max-age=30');
    res.json({success: true, data: webnovels});
 };

 exports.addWebnovel = async  (req, res, next) => {
    const webnovelCreated = await  webnovelsService.addWebnovel(req.body.title, req.body.date)
    if (webnovelCreated) {
       res.status(201).json({success: true, id: webnovelCreated.id});
    } else {
       next(createError(400, "Erreur lorsque vous tentez de créer ce webnovel, vérifier vos arguments"))
    }
 };

 exports.getWebnovelById = async (req, res, next) => {
   const webnovel = await webnovelsService.getWebnovelById(req.params.id)
   if (webnovel) {
      res.json({success: true, data: webnovel})
   } else {
      next(createError(404, "Non trouvé"))
   }
};

exports.deleteWebnovelById = (req, res, next) => {
   try {
      webnovelsService.deleteWebnovelById(req.params.id)
      res.status(204).send()
   } catch(e) {
      next(createError(404, `Ce webnovel n'existe pas`))
   }
};