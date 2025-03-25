import { useState, useEffect } from "react";
import { supabase } from "../utils/supabase";

interface Expense {
  id: number;
  amount: number;
  item: string;
  date: string;
  description: string;
}

const ExpenseList = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const fetchExpenses = async () => {
    try {
      const { data, error } = await supabase.from("todos").select("*");

      if (error) {
        throw error;
      }

      if (Array.isArray(data)) {
        setExpenses(data);
      } else {
        console.error("데이터가 예상한 형식이 아닙니다");
      }
    } catch (error) {
      console.error("데이터를 가져오는 중 오류 발생:", error.message);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div>
      <h1>저장한 지출 내역들</h1>
      <ul>
        {expenses.length > 0 ? (
          expenses.map((expense) => (
            <li key={expense.id}>
              <p>날짜: {expense.date}</p>
              <p>항목: {expense.item}</p>
              <p>금액: {expense.amount} 원</p>
              <p>설명: {expense.description}</p>
            </li>
          ))
        ) : (
          <p>저장된 지출 내역이 없습니다!</p>
        )}
      </ul>
    </div>
  );
};

export default ExpenseList;
