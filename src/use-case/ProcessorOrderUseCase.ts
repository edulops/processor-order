import { Handler, Order, UseCase } from "../Order";

export default class ProcessorOrderUseCase implements UseCase {
    private chain: Handler;

    constructor(chain: Handler) {
        this.chain = chain;
    }

    execute(request: Order)  {
        return this.chain.handler(request);
    }
}