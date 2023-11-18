export class NotFoundError extends Error {
    constructor(message = 'Not found') {
        this.message = message;
        this.status = 404;
    }
}