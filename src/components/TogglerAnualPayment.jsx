import { useFormContext } from "../context/FormProvider";

export const TogglerAnualPayment = () => {
  const form = useFormContext();

  const handleClick = () => {
    form.toggleAnualPayment();
  };

  return (
    <div className="text-lg font-bold flex flex-row p-4 gap-4">
      <p> Mensual payment</p>
      <input
        type="checkbox"
        className="toggle toggle-success "
        onClick={handleClick}
      />
      <p className="text-end"> Anual payment</p>
    </div>
  );
};
