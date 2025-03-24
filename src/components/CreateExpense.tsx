import { useState, ChangeEvent, MouseEvent } from "react";

const CreateExpense = () => {
  const [expenses, setExpenses] = useState<
    { date: string; item: string; amount: number; description: string }[]
  >([]);
  const [inputDate, setInputDate] = useState<string>("");
  const [inputItem, setInputItem] = useState<string>("");
  const [inputAmount, setInputAmount] = useState<number>(0);
  const [inputDescription, setInputDescription] = useState<string>("");

  const inputDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputDate(e.target.value);
  };

  const inputItemChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputItem(e.target.value);
  };

  const inputAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputAmount(Number(e.target.value));
  };

  const inputDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputDescription(e.target.value);
  };

  const UploadHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (inputDate.trim() && inputItem.trim() && inputAmount > 0) {
      const newExpense = {
        date: inputDate,
        item: inputItem,
        amount: inputAmount,
        description: inputDescription,
      };

      setExpenses((prevState) => [newExpense, ...prevState]);

      setInputDate("");
      setInputItem("");
      setInputAmount(0);
      setInputDescription("");
    }
  };

  return (
    <div className="bg-[#e7e7e7]">
      <form className="flex flex-row justify-center items-center space-y-4">
        <div>
          <p>날짜:</p>
          <input
            className="mt-2 p-2 border rounded"
            type="date"
            value={inputDate}
            onChange={inputDateChange}
          />
        </div>
        <div>
          <p>항목:</p>
          <input
            className="mt-2 p-2 border rounded"
            type="text"
            value={inputItem}
            onChange={inputItemChange}
          />
        </div>
        <div>
          <p>금액:</p>
          <input
            className="mt-2 p-2 border rounded"
            type="number"
            value={inputAmount}
            onChange={inputAmountChange}
          />
        </div>
        <div>
          <p>내용:</p>
          <input
            className="mt-2 p-2 border rounded"
            type="text"
            value={inputDescription}
            onChange={inputDescriptionChange}
          />
        </div>

        <button
          className="mt-4 p-2 bg-red-700 text-white rounded hover:bg-red-500 transition-colors duration-300 cursor-pointer"
          onClick={UploadHandler}
        >
          저장
        </button>
      </form>
      <div className="flex flex-col justify-center items-center">
        {expenses.map((expense, id) => {
          return (
            <p key={id}>
              {expense.date} / {expense.item} / {expense.amount} /{" "}
              {expense.description}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default CreateExpense;
