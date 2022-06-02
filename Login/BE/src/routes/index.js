
const authUserRoute = require('../routes/authUser.route');
const serviceRoute = require("../routes/service.route");
module.exports = app => {
    app.use('/api/user', authUserRoute);
    app.use('/api/service',serviceRoute);
};