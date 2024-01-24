using { Product } from '../db/models';

service WarehouseService {

    entity ProductSet as projection on Product;

    function setQuantity(productId: UUID, amount: Integer) returns String;

}