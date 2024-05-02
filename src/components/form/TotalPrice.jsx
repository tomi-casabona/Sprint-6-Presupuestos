import { useFormContext } from "../../context/FormProvider";
import Euro from "../../assets/Icons/Euro";
export const TotalPrice = () => {
  const form = useFormContext();

  return (
    <div className="flex flex-row gap-2  w-4/5 items-center justify-center">
      <p className="font-medium ">Total price:</p>
      <Euro />
      <p className="font-extrabold text-2xl ">{form.total}</p>
    </div>
  );
};
