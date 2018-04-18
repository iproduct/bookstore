const NOT_FOUND = 'Not Found';

class NotFoundError extends Error {
  constructor(message = NOT_FOUND) {
    super(message);
  }
}

module.exports = NotFoundError;
