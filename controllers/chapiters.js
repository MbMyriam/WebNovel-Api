const chapitersService = require('../services/bd/chapiters');
const webnovelsService = require('../services/bd/webnovels');


exports.getAllChapiters = async (req, res) => {
    const chapiters = await chapitersService.getAllChapiters();
    res.set('Cache-Control', 'max-age=30');
    res.json({success: true, data: chapiters});
 };

 exports.addChapiter = async  (req, res, next) => {
    if (req.body && req.body.webnovelid) {
        const webnovel = await webnovelsService.getWebnovelById(req.params.id)
        try {
           if (webnovel) {
            chapitersService.addChapiter(req.body.idWebnovel)
              res.status(201).json({success: true, message: 'chapitre ajouté'})
           } else {
              res.status(400).json({success: false, message: 'Un webnovel doit exister pour ajouter un chapitre'})
           }
        } catch (e) {
           res.status(400).json({success: false, message: 'Le chapitre ne peut pas être ajouté', error: e.message})
        }
     } else {
        res.status(400).json({success: false, message: 'Argument manquant'})
     }
    const chapiterCreated = await chapitersService.addChapiter(req.body.title, req.body.date)
    if (chapiterCreated) {
       res.status(201).json({success: true, number: chapiterCreated.number});
    } else {
       next(createError(400, "Erreur lorsque vous tentez de créer ce chapitre, vérifier vos arguments"))
    }
 };


 exports.getChapiterByNumber = async (req, res, next) => {
   const chapiter = await chapitersService.getChapiterByNumber(req.params.id)
   if (chapiter) {
      res.json({success: true, data: chapiter})
   } else {
      next(createError(404, "Non trouvé"))
   }
};

exports.deleteChapiterByNumber = (req, res, next) => {
   try {
    chapitersService.deleteChapiterByNumber(req.params.number)
      res.status(204).send()
   } catch(e) {
      next(createError(404, `Ce chapitre n'existe pas`))
   }
};