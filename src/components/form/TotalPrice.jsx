import { useFormContext } from "../../context/FormProvider";
import Euro from "../../assets/Icons/Euro";
export const TotalPrice = () => {
  const form = useFormContext();

  return (
    <>
      <div className="flex flex-row gap-2 items-center justify-center">
        <p className="font-medium ">Total price:</p>
        <Euro />
        <p className="font-extrabold text-2xl ">{form.total}</p>
      </div>
      <div className=" border-b-2 border-dashed w-full  "></div>
    </>
  );
};
