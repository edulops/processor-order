import { Order, OrdersType } from "../Order";
import AbstractHandler from "./AbstractHandler";

export default class UpgrandeMemberHandler extends AbstractHandler {
   
    constructor() {
        super();
    }

    handler(request: Order) {
        if(request.type === OrdersType.UPGRADE_MEMBER) {
            console.log(`UPGRADE ACCOUNT MEMBER ${request.id}`);
        }

        return super.handler(request);
    }
}