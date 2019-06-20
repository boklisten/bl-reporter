type OrderItemType =
  | "rent"
  | "buy"
  | "extend"
  | "sell"
  | "buyout"
  | "return"
  | "cancel"
  | "partly-payment"
  | "buyback";

export interface DatabaseReportOrderFilter {
  branchId?: string;
  fromDate?: Date;
  toDate?: Date;
  byCustomer?: boolean;
  orderItemNotHandedOut?: boolean;
  includedOrderItemTypes?: OrderItemType[];
}
