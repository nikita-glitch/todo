class ValidationError extends Error {
  constructor(status, message) {
    super();
    this.message = message;
    this.status = status;
  }
  static badRequest(message) {
    return new ValidationError(400, message)
  }
  static unautorizedError(message) {
    return new ValidationError(401, message)
  }
  static invalidTokenError(message) {
    return new ValidationError(400, message)
  }
  static forbidden(message) {
    return new ValidationError(403, message)
  }
  static notFound(message) {
    return new ValidationError(404, message)
  }
}
module.exports = ValidationError;