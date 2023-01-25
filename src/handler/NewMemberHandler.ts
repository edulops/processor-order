import { Order, OrdersType } from "../Order";
import AbstractHandler from "./AbstractHandler";

export default class NewMemberHandler extends AbstractHandler {

    constructor() {
        super();
    }

    handler(request: Order) {
        if(request.type === OrdersType.NEW_MEMBER) {
            console.log(`ACTIVATE ACCOUNT MEMBER ${request.id}`);
        }

        return super.handler(request);
    }
}