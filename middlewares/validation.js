const validateBody = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
        error.status = 400;
        error.message = `Missing required "${error.details[0].context.key}" field`;
      next(error);
    } else {
      next();
    }
  };
};

module.exports = validateBody;