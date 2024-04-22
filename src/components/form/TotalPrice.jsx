import { useFormContext } from "../../context/FormProvider";
export const TotalPrice = () => {
  const total = useFormContext();

    return (
        <div className="flex w-4/5 items-center justify-end">
        <p className="font-medium">Total price:</p>
        <p className="font-extrabold text-2xl px-2 sm:px-5 md:px-16">$ {total}</p>
      </div>
    )
}