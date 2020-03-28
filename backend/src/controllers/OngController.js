const connection = require("../database/connection");
const generateUniqueId = require('../utils/generateUniqueId');
const jwt = require("jsonwebtoken");
const hash = require("../config/auth");


module.exports = {


    async index(request, response){
        const ongs = await connection('ongs').select('*');
        
        return response.json(ongs);
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

       const id = generateUniqueId();

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });

        const token = jwt.sign({ id: id }, hash.secret, {
            expiresIn: 86400,
        });
        return response.json({ id, token });
    }
}