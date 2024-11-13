class ApiError extends Error {
  constructor(statusCode, message = "", errors = [], stack = "") {
    super(message);

    // Set properties
    this.name = "ApiError";
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;

    // If stack is provided, use it; otherwise, generate one
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor); // Capture stack trace
    }
  }
}

module.exports = { ApiError }; // Export the class for use in other files
