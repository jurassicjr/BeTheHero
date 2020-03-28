const connection = require("../database/connection");
const jwt = require("jsonwebtoken");
const hash = require("../config/auth");

module.exports = {
    async create(request, response) {
        const { ongId } = request.body;
       
        const ong = await connection('ongs').select('name').where('id', ongId).first();
        
        if (!ong) {
            return response.status(400).json({
                error: "No ong found with this id!"
            })
        }

        const token = jwt.sign({ id: ongId }, hash.secret, {
            expiresIn: 86400,
        });

        return response.json({ong, token});
    }
}