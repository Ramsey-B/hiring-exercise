export const failAction = (request, h, error) => {
  // todo: factor out
  return error.isJoi
    ? h
        .response(error.details[0])
        .code(400)
        .takeover()
    : h.response(error).takeover();
};
