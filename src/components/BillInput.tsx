import DollarIcon from "../assets/images/icon-dollar.svg";

type BillProps = {
  bill: number;
  setBill: (bill: number) => void;
};

const BillInput = ({ bill, setBill }: BillProps) => {
  const handleBill = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setBill(0);
    } else {
      setBill(parseFloat(e.target.value));
    }
  };

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor="bill" className="text-dark-grayish-cyan">
        Bill
      </label>
      <div className="relative">
        <img src={DollarIcon} alt="" className="absolute left-[1.2rem] top-4" />
        <input
          type="number"
          id="bill"
          name="bill"
          placeholder="0"
          value={bill === 0 ? "" : bill}
          onChange={(e) => handleBill(e)}
          className="w-full rounded-md bg-very-light-grayish-cyan py-1.5 pl-9 pr-5 text-right text-[1.55rem] tracking-[-0.03em] text-very-dark-cyan caret-strong-cyan ring-strong-cyan transition hover:ring-2 focus:outline-none focus:ring-2"
        />
      </div>
    </div>
  );
};
export default BillInput;
