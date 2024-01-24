using { cuid } from '@sap/cds/common';

entity Product : cuid {
    name: String;
    quantity: Integer;
    price: Integer;
    totalWorth: Integer = (quantity * price);
}