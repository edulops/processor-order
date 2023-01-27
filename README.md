# Processor Order

This micro service aims to process orders from a platform, applying several specific business rules for each type of product delivered by the platform.

## Running locally
### Prerequisites

1. [Install nvm](https://github.com/nvm-sh/nvm)

### Launch

1. Run `nvm install`
2. Run `npm run start:dev`


## Defined Types

There are some predefined types of product categories to which the rules are applied.

These are:

``` typescript
enum OrdersType{
    PHYSICAL_PRODUCT = 'PHYSICAL_PRODUCT',
    DIGITAL_PRODUCT = 'DIGITAL_PRODUCT',
    BOOK = 'BOOK',
    NEW_MEMBER = 'NEW_MEMBER',
    UPGRADE_MEMBER = 'UPGRADE_MEMBER',
}
```
