import { Order, OrdersType } from "../Order";
import AbstractHandler from "./AbstractHandler";

export default class BookHandler extends AbstractHandler {

    constructor() {
        super();
    }

    handler(request: Order) {
        if(request.type === OrdersType.BOOK) {
            console.log(`CREATE A DUPLICATE PACKING SLIP FOR THE ROYALTY DEPARTMENT ${request.id}`);
        }

        return super.handler(request);
    }
}