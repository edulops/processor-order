# Processor Order

This micro service aims to process orders from a platform, applying several specific business rules for each type of product delivered by the platform.

## Problem

A company with a high volume of orders with targeted flows, with manual and automated commercial practices distributed by various third-party tools.

## Objective

Unify all flows in a single app that is simple to add and modify these business rules and that is a scalable application.


## Solution

Build an ecosystem of micro services where it is possible, in a distributed way, to carry out payment and process orders according to the definitions of your business flows.

![Context Diagram](/docs/diagrama-context.webp)

With that in mind, a serveless solution was designed to process this information using a chain of responsibility strategy. Where each rule or flow is implemented independently and isolated, causing no side effects on other rules, this makes adding and modifying flows simple.

![Order Processing System Container Diagram](/docs/diagrama-container.webp)

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

// params 
const request = {
    id: 'uuid',
    name: 'PRODUCT',
    quantity: 1,
    value: 100,
    type: OrdersType.BOOK
}

const usecase = OrderFactory.create();
usecase.execute(request);

```
