import CreateExpense from "../components/CreateExpense";
import ExpenseList from "../components/ExpenseList";
import MouthNavigation from "../components/MonthNavigation";

const Home = () => {
  return (
    <div>
      <MouthNavigation />
      <CreateExpense />
      <ExpenseList/>
    </div>
  );
};

export default Home;
