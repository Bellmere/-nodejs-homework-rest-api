const validation = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      if (!req.body || Object.keys(req.body).length === 0) {
        error.status = 400;
        error.message = 'Missing fields';
      } else {
        error.status = 400;
        error.message = `Missing required "${error.details[0].context.key}" field`;
      }
      next(error);
    } else {
      next();
    }
  };
};

module.exports = validation;