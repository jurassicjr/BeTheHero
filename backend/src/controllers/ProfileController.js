connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const ong_id = request.headers.authorization;
        if (ong_id == null) return response.status(401).json({ error: "Authorization denied!" });

        const incidents = await connection('incidents').select('*').where('ong_id', ong_id);

        return response.json(incidents);
    }
}