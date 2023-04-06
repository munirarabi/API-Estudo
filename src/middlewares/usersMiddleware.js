const validateBodyPOST = (req, res, next) => {
  const { body } = req;

  if (body.username === undefined) {
    return res.status(400).json({
      message: `The field "username" is required`,
    });
  }

  if (body.username === "") {
    return res.status(400).json({
      message: `"username" cannot be empty`,
    });
  }

  if (body.password === undefined) {
    return res.status(400).json({
      message: `The field "password" is required`,
    });
  }

  if (body.password === "") {
    return res.status(400).json({
      message: `"password" cannot be empty`,
    });
  }

  next();
};

const validateBodyPUT = (req, res, next) => {
  const { body } = req;

  if (body.username === undefined) {
    return res.status(400).json({
      message: `The field "username" is required`,
    });
  }

  if (body.username === "") {
    return res.status(400).json({
      message: `"username" cannot be empty`,
    });
  }

  if (body.password === undefined) {
    return res.status(400).json({
      message: `The field "password" is required`,
    });
  }

  if (body.password === "") {
    return res.status(400).json({
      message: `"password" cannot be empty`,
    });
  }

  if (body.status === undefined) {
    return res.status(400).json({
      message: `The field "status" is required`,
    });
  }

  if (body.status === "") {
    return res.status(400).json({
      message: `"status" cannot be empty`,
    });
  }

  next();
};

module.exports = {
  validateBodyPOST,
  validateBodyPUT,
};
