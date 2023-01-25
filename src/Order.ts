export type Order = {
    id: string,
    name: string,
    quantity: number,
    value: number
    type: OrdersType
}

export enum OrdersType{
    PHYSICAL_PRODUCT = 'PHYSICAL_PRODUCT',
    DIGITAL_PRODUCT = 'DIGITAL_PRODUCT',
    BOOK = 'BOOK',
    NEW_MEMBER = 'NEW_MEMBER',
    UPGRADE_MEMBER = 'UPGRADE_MEMBER',
}

export interface Handler {
    next(handler: Handler): Handler
    handler(request: Order): void
}

export interface UseCase {
    execute(data: Order | Order[]): string|void
}