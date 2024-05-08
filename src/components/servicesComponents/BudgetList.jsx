import { DATA_PRODUCT } from "../../data/dataForm";
import { Checkbox } from "./Checkbox";

export const BudgetList = () => {
  return DATA_PRODUCT.map((data) => (
    <Checkbox key={data.id} productData={data} />
  ));
};
