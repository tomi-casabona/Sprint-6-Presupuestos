import { useFormContext } from "../../context/FormProvider";

export const WebAggregation = () => {
  const form = useFormContext();

  const webAggregations = form.additionsArray?.filter(
    (element) => element.quantity > 0
  );

  if (webAggregations && webAggregations.length > 0) {
    return (
      <span>
        {" "}
        (
        {webAggregations.map((element) => (
          <span key={element.id}>
            {element.id === 1
              ? `${element.quantity} pages${webAggregations.length > 1 ? "," : "."}`
              : element.id === 2
                ? ` ${element.quantity} lenguajes.`
                : "Unknown web aggregation"}
          </span>
        ))}
        )
      </span>
    );
  }

  return null;
};
