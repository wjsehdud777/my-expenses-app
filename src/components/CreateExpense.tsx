import { useState, ChangeEvent, MouseEvent, useEffect } from "react";
import { supabase } from "../utils/supabase";

const CreateExpense = () => {
  const [expenses, setExpenses] = useState<
    {
      id: number;
      date: string;
      item: string;
      amount: number;
      description: string;
    }[]
  >([]);

  const [inputDate, setInputDate] = useState<string>("");
  const [inputItem, setInputItem] = useState<string>("");
  const [inputAmount, setInputAmount] = useState<number>(0);
  const [inputDescription, setInputDescription] = useState<string>("");

  const fetchExpenses = async () => {
    try {
      const { data, error } = await supabase.from("todos").select("*");

      if (error) {
        console.error("지출 내역 불러오기 오류", error);
      } else {
        setExpenses(data);
      }
    } catch (error) {
      console.error("지출 내역 불러오기 오류", error);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

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

  const UploadHandler = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (inputDate.trim() && inputItem.trim() && inputAmount > 0) {
      const newExpense = {
        date: inputDate,
        item: inputItem,
        amount: inputAmount,
        description: inputDescription,
      };

      try {
        const { data, error } = await supabase
          .from("todos")
          .insert([newExpense]);

        if (error) {
          console.error("데이터 삽입 오류!", error);
        } else {
          fetchExpenses();
          setInputDate("");
          setInputItem("");
          setInputAmount(0);
          setInputDescription("");
        }
      } catch (error) {
        console.error("데이터 삽입 오류!", error);
      }
    }
  };

  const deleteExpense = async (id: number) => {
    try {
      const { error } = await supabase.from("todos").delete().match({ id });

      if (error) {
        console.error("데이터 삭제 오류!", error);
      } else {
        fetchExpenses();
      }
    } catch (error) {
      console.error("데이터 삭제 오류!", error);
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
        {expenses.map((expense) => (
          <div key={expense.id} className="flex items-center space-x-4">
            <p>
              {expense.date} / {expense.item} / {expense.amount} /{" "}
              {expense.description}
            </p>
            <button
              onClick={() => deleteExpense(expense.id)}
              className="text-red-600 hover:text-red-400"
            >
              삭제
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateExpense;
