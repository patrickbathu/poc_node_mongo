'use strict';

exports.get = async(req, res, next) => {

    console.info("IndexController - get - start");

    try {
        res.status(200).send({
            title : "Node",
            version : "0.0.1"
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }

    console.info("IndexController - get - end");
}