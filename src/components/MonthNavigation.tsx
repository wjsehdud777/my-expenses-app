const MonthNavigation = () => {
  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className="flex flex-wrap gap-3 justify-center p-4">
      {months.map((month) => (
        <button
          key={month}
          className="px-4 py-4 bg-[#242424] text-white rounded-md shadow-md hover:bg-[#da7a7a] transition-colors cursor-pointer"
        >
          {month}월
        </button>
      ))}
    </div>
  );
};

export default MonthNavigation;
