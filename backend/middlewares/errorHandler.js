function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something went wrong Chillies!!!!!');
  }
  
  module.exports = errorHandler;
  