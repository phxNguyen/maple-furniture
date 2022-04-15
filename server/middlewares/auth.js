const firebaseAdmin = require('../firebase')

exports.authCheck = async(req, res, next) =>{
  console.log(req.headers);
  try {
    const firebaseUser = await firebaseAdmin.auth().verifyIdToken(req.headers.authtoken)
    //console.log("FIREBASE USER AUTH CHECK" ,firebaseUser);
    req.user = firebaseUser;
    next()
  } catch (err) {
    res.status(401).json({
      err:'Invalid or expired token'
    })
  }
  
}