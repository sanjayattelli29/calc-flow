import { useEffect, useState } from "react";
import BillInput from "./BillInput";
import PeopleCount from "./PeopleCount";
import ResetButton from "./ResetButton";
import Result from "./Result";
import TipSelection from "./TipSelection";

const Form = () => {
  const [bill, setBill] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [customTip, setCustomTip] = useState(false);
  const [people, setPeople] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const calculateTip = () => {
    if (!isNaN(bill) && !isNaN(tipPercentage) && people > 0) {
      const tipPerPerson = (bill * (tipPercentage / 100)) / people;
      const totalPerPerson = bill / people + tipPerPerson;
      setTipAmount(tipPerPerson);
      setTotalAmount(totalPerPerson);
    }
  };

  useEffect(() => {
    calculateTip();
  }, [bill, tipPercentage, people]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      className="px-8 py-8 lg:grid lg:grid-cols-2 lg:gap-[1.8rem]"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-[1.88rem] lg:gap-[2.45rem] lg:px-4 lg:py-3">
        <BillInput bill={bill} setBill={setBill} />
        <TipSelection
          tipPercentage={tipPercentage}
          setTipPercentage={setTipPercentage}
          customTip={customTip}
          setCustomTip={setCustomTip}
        />
        <PeopleCount people={people} setPeople={setPeople} />
      </div>
      <div className="pt-8 lg:p-0">
        <div className="flex flex-col gap-9 rounded-xl bg-very-dark-cyan px-6 pb-6 pt-[2.4rem] lg:h-full lg:justify-between lg:px-10 lg:pb-[2.4rem] lg:pt-[3.4rem]">
          <Result tipAmount={tipAmount} totalAmount={totalAmount} />
          <ResetButton
            bill={bill}
            tipPercentage={tipPercentage}
            people={people}
            setBill={setBill}
            setTipPercentage={setTipPercentage}
            setCustomTip={setCustomTip}
            setPeople={setPeople}
            setTipAmount={setTipAmount}
            setTotalAmount={setTotalAmount}
          />
        </div>
      </div>
    </form>
  );
};
export default Form;
