import { Order, OrdersType } from "../Order";
import AbstractHandler from "./AbstractHandler";

export default class SendMailToOwnerHandler extends AbstractHandler {
   
    constructor() {
        super();
    }

    handler(request: Order) {
        if(request.type === OrdersType.UPGRADE_MEMBER 
           || request.type === OrdersType.NEW_MEMBER
         ) {
            console.log(`SEND EMAIL TO THE OWNER ${request.id}`);
        }

        return super.handler(request);
    }
}