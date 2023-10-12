const validateBody = (request, response, next) => {
  const { body } = request;

  if (body.title === undefined) {
    return response.status(400).json({message: 'Field "title" is required'});
  }

  if (body.title === '') {
    return response.status(400).json({message: 'Field "title" cannot bet empty'});
  }

  next();
};

module.exports = {
  validateBody
};
