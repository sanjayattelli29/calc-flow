import { twMerge } from "tailwind-merge";

type TipProps = {
  tipPercentage: number;
  customTip: boolean;
  setCustomTip: (value: boolean) => void;
  setTipPercentage: (value: number) => void;
};

const TipSelection = ({
  tipPercentage,
  customTip,
  setTipPercentage,
  setCustomTip,
}: TipProps) => {
  const tipPercentages = [5, 10, 15, 25, 50];

  const handleTip = (percentage: number) => {
    setTipPercentage(percentage);
    setCustomTip(false);
  };

  const handleCustomTip = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);

    if (value >= 0 || !isNaN(value)) {
      setTipPercentage(value);
      setCustomTip(true);
    } else {
      setTipPercentage(0);
    }
  };

  const handleCustomInputClick = () => {
    setTipPercentage(0);
    setCustomTip(true);
  };

  return (
    <fieldset>
      <legend className="text-dark-grayish-cyan">Select Tip %</legend>
      <div className="grid grid-cols-2 gap-4 pr-[0.1rem] pt-4 lg:grid-cols-3">
        {tipPercentages.map((percentage) => (
          <div key={percentage}>
            <label
              htmlFor={`tip-${percentage}`}
              className={twMerge(
                "inline-block size-full rounded-md bg-very-dark-cyan py-[0.52rem] text-center text-2xl text-white transition",
                percentage === tipPercentage
                  ? "bg-strong-cyan text-very-dark-cyan"
                  : "hover:bg-light-cyan cursor-pointer hover:text-very-dark-cyan",
              )}
            >
              {percentage}%
            </label>
            <input
              type="radio"
              id={`tip-${percentage}`}
              name="tip"
              value={percentage}
              onClick={() => handleTip(percentage)}
              className="appearance-none "
            />
          </div>
        ))}

        <div>
          <label htmlFor="custom-tip" className="sr-only">
            Custom Tip
          </label>
          <input
            type="number"
            id="custom-tip"
            className={twMerge(
              "h-full w-full appearance-none rounded-md bg-very-light-grayish-cyan pr-4 text-right text-2xl text-very-dark-cyan placeholder-dark-grayish-cyan caret-strong-cyan ring-strong-cyan transition hover:ring-2 focus:outline-none focus:ring-2 ",
              customTip ? "ring-2 ring-strong-cyan" : "ring-0",
            )}
            placeholder="Custom"
            onClick={handleCustomInputClick}
            onChange={(e) => handleCustomTip(e)}
          />
        </div>
      </div>
    </fieldset>
  );
};
export default TipSelection;
