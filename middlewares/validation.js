const validation = (shema) => {
    return (req, res, next) => {
        const { error } = shema.validate(req.body);
        if (error) {
            error.status = 400;
            error.message = error.details[0].message;
            throw error;
        }
        next();
    }
}

module.exports = validation;