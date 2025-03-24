const CreateExpense = () => {
  return (
    <div className="bg-[#e7e7e7]">
      <form className="flex flex-row justify-center items-center space-y-4">
        <div>
          <p>날짜:</p>
          <input className="mt-2 p-2 border rounded" type="date" />
        </div>
        <div>
          <p>항목:</p>
          <input className="mt-2 p-2 border rounded" type="text" />
        </div>
        <div>
          <p>금액:</p>
          <input className="mt-2 p-2 border rounded" type="number" />
        </div>
        <div>
          <p>내용:</p>
          <input className="mt-2 p-2 border rounded" type="text" />
        </div>

        <button className="mt-4 p-2 bg-red-700 text-white rounded hover:bg-red-500 transition-colors duration-300 cursor-pointer">저장</button>
      </form>
    </div>
  );
};

export default CreateExpense;
