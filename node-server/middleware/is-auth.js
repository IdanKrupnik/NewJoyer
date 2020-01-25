
module.exports = (req, res, next) => {
    if (!req.session.isLoggedIn) {
        return res.send({message: 'unauthorized'});
    }

    next();
}