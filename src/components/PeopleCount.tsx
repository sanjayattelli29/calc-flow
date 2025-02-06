import { useState } from "react";
import { twMerge } from "tailwind-merge";
import PersonIcon from "../assets/images/icon-person.svg";

type PeopleProps = {
  people: number;
  setPeople: (people: number) => void;
};

const PeopleCount = ({ people, setPeople }: PeopleProps) => {
  const [error, setError] = useState(false);

  const handlePeopleCountInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);

    setError(value === 0);
    setPeople(value);
  };

  const handleInputClick = () => {
    if (people === 0) {
      setError(true);
    }
  };

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex justify-between">
        <label htmlFor="people-count" className="text-dark-grayish-cyan">
          Number of People
        </label>
        {error && <span className="text-red-500">Can't be zero</span>}
      </div>

      <div className="relative">
        <img src={PersonIcon} alt="" className="absolute left-[1.1rem] top-4" />
        <input
          type="number"
          name="people-count"
          id="people-count"
          placeholder="0"
          className={twMerge(
            "w-full rounded-md bg-very-light-grayish-cyan px-[1.1rem] py-1.5 pl-9 text-right text-[1.55rem] tracking-[-0.03em] text-very-dark-cyan caret-strong-cyan transition focus:outline-none",
            error
              ? "ring-2 ring-red-500"
              : "ring-strong-cyan hover:ring-2 focus:ring-2",
          )}
          value={people === 0 ? "" : people}
          onChange={(e) => handlePeopleCountInput(e)}
          onClick={handleInputClick}
        />
      </div>
    </div>
  );
};
export default PeopleCount;
