import { Order, OrdersType } from "../Order";
import AbstractHandler from "./AbstractHandler";

export default class DigitalProductHandler extends AbstractHandler {

    constructor() {
        super();
    }

    handler(request: Order) {
        if(request.type === OrdersType.DIGITAL_PRODUCT) {
            console.log(`SEND VIDEO 'Aprendendo a Esquiar' ${request.id}`);
        }

        return super.handler(request);
    }
}