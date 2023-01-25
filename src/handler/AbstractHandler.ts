import { Handler, Order } from "../Order";

export default abstract class AbstractHandler implements Handler {
    private nextHandler!: Handler;

    next(handler: Handler): Handler {
        this.nextHandler = handler;
        return this.nextHandler;
    }

    handler(request: Order) {
        if(this.nextHandler) {
            return this.nextHandler.handler(request);
        }

        return null
    }
}