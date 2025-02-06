import { twMerge } from "tailwind-merge";

type ResetButtonProps = {
  bill: number;
  tipPercentage: number;
  people: number;
  setBill: (value: number) => void;
  setTipPercentage: (value: number) => void;
  setPeople: (value: number) => void;
  setCustomTip: (value: boolean) => void;
  setTipAmount: (value: number) => void;
  setTotalAmount: (value: number) => void;
};

const ResetButton = ({
  bill,
  tipPercentage,
  people,
  setBill,
  setTipPercentage,
  setPeople,
  setCustomTip,
  setTipAmount,
  setTotalAmount,
}: ResetButtonProps) => {
  const isDisabled = bill === 0 && tipPercentage === 0 && people === 0;

  const handleReset = () => {
    setBill(0);
    setTipPercentage(0);
    setPeople(0);
    setCustomTip(false);
    setTipAmount(0);
    setTotalAmount(0);
  };

  return (
    <button
      className={twMerge(
        "rounded-md bg-strong-cyan py-2.5 text-xl uppercase text-very-dark-cyan transition-all hover:bg-light-cyan",
        isDisabled
          ? "cursor-not-allowed text-opacity-50 opacity-20"
          : "cursor-pointer",
      )}
      onClick={handleReset}
      disabled={isDisabled}
    >
      Reset
    </button>
  );
};
export default ResetButton;
