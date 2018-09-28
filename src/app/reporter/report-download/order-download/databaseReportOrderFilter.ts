type OrderItemType =  "rent" | "buy" | "extend" | "sell" | "buyout" | "return" | "cancel";

export interface DatabaseReportOrderFilter {
	branchId?: string;
	fromDate?: Date;
	toDate?: Date;
	byCustomer?: boolean;
  orderItemNotHandedOut?: boolean;
  includedOrderItemTypes?: OrderItemType[]
}
