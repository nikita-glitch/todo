class ValidationError extends Error {
  constructor(status, message) {
    super();
    this.message = message;
    this.status = status;
  }
  static unautorizedError(message) {
    return new ValidationError(401, message);
  }
  static invalidTokenError(message) {
    return new ValidationError(401, message)
  }
}