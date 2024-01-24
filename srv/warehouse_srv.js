const cds = require("@sap/cds");

module.exports = cds.service.impl((srv) => {

    srv.on('setQuantity', async (req) => {
        try {
            const { productId, amount } = req.data;
            const { ProductSet } = srv.entities;
            const UpdateResponse = await srv.update(ProductSet).with({quantity: amount}).where({ID: productId});
            req.reply(UpdateResponse);
        } catch (oErr) {
            req.reject(oErr.message);
        }
    });

})