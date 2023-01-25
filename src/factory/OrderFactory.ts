import { 
    BookHandler, 
    DigitalProductHandler,
    NewMemberHandler, 
    PhysicalProductHandler, 
    SalesCommissionHandler,
    SendMailToOwnerHandler, 
    UpgrandeMemberHandler
} from "../handler";

import { ProcessorOrderUseCase } from "../use-case";

export default class OrderFactory {
    static create() {

        const handler = new PhysicalProductHandler();
            
        handler.next(new BookHandler())
            .next(new DigitalProductHandler())
            .next(new NewMemberHandler())
            .next(new UpgrandeMemberHandler())
            .next(new SalesCommissionHandler())
            .next(new SendMailToOwnerHandler());

        return new ProcessorOrderUseCase(handler);
    }
}