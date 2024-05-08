import { useFormContext } from "../../context/FormProvider";
import { AgregateOptionsInput } from "./AgregateOptionsInput";

export const ListAgregationImputs = ({ productData, check }) => {
  const form = useFormContext();

  return form.additionsArray.map(
    (element) =>
      productData.type === "Web" &&
      check === true && (
        <AgregateOptionsInput key={element.id} addition={element} />
      )
  );
};
