import { twMerge } from "tailwind-merge";

type ResultProps = {
  tipAmount: number;
  totalAmount: number;
};

const Result = ({ tipAmount, totalAmount }: ResultProps) => {
  return (
    <div className="space-y-6 lg:space-y-[3.25rem]">
      <div className="flex justify-between">
        <h2 className="flex flex-col justify-center text-white">
          Tip Amount{" "}
          <span className="text-[.8125rem] text-grayish-cyan">/ person</span>
        </h2>
        <p
          className={twMerge(
            "pt-1 text-strong-cyan",
            tipAmount > 99999 ? "text-xl" : "text-3xl lg:text-[2.9rem]",
          )}
        >
          ${tipAmount.toFixed(2)}
        </p>
      </div>
      <div className="flex justify-between ">
        <h2 className="flex flex-col justify-center text-white">
          Total <span className="text-[13px] text-grayish-cyan">/ person</span>
        </h2>
        <p
          className={twMerge(
            "pt-1 text-strong-cyan lg:pt-0 ",
            totalAmount > 99999 ? "text-xl" : "text-3xl lg:text-[2.9rem]",
          )}
        >
          ${totalAmount.toFixed(2)}
        </p>
      </div>
    </div>
  );
};
export default Result;
