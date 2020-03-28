const express = require('express');
const routes = express.Router();
const { celebrate, Segments, Joi } = require('celebrate');
const authMiddleware = require('./middlewares/auth');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


routes.get('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required().length(8)
    })
}), OngController.index);

routes.post('/ongs', celebrate({
    /**
     * Validação de:
     * Query Params
     * Route Params
     * Body Params
     */
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(9).max(14),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}), OngController.create);

routes.post('/incidents', IncidentController.create);

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}), IncidentController.index);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    }),
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}), authMiddleware, IncidentController.delete);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}), authMiddleware, ProfileController.index);

routes.post('/sessions', SessionController.create);

module.exports = routes;