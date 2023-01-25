import { Order, OrdersType } from "../Order";
import AbstractHandler from "./AbstractHandler";

export default class PhysicalProductHandler extends AbstractHandler {

    constructor() {
        super();
    }
   
    handler(request: Order) {
        if(request.type === OrdersType.PHYSICAL_PRODUCT) {
            console.log(`GENERATE A DELIVERY NOTE FOR SHIPMENT ${request.id}`);
        }

        return super.handler(request);
    }
}