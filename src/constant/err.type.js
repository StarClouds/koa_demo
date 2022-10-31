const createErrorInfo = (code, message, result) => {
  return {
    code,
    message,
    result,
  };
};
module.exports = {
  userFormateError: createErrorInfo('10001','用户名或者密码为空'),
  userAlreadyExited: createErrorInfo('10002','用户已经存在'),
};
