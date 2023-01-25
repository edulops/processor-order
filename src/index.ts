import { OrderFactory } from "./factory";
import { OrdersType } from "./Order";

const request = {
    id: 'uuid',
    name: 'PRODUCT',
    quantity: 1,
    value: 100,
    type: OrdersType.NEW_MEMBER
}

const usecase = OrderFactory.create();
usecase.execute(request);
