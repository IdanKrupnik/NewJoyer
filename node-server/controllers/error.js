exports.get404 = (req, res, next) => {

  let isLoggedIn;

  if(req.get('Cookie')) {
    isLoggedIn = req.session.isLoggedIn;
  }

  res.status(404).send({
    status: 404
  });

}
