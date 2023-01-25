import { Order, OrdersType } from "../Order";
import AbstractHandler from "./AbstractHandler";

export default class SalesCommissionHandler extends AbstractHandler {
   
    constructor() {
        super();
    }

    handler(request: Order) {
        if(request.type === OrdersType.BOOK 
           || request.type === OrdersType.PHYSICAL_PRODUCT
         ) {
            console.log(`GENERATE SALES COMMISSION ${request.id}`);
        }

        return super.handler(request);
    }
}