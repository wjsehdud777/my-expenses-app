import CreateExpense from "../components/CreateExpense";
import ExpenseList from "../components/ExpenseList";
import MouthNavigation from "../components/MouthNavigation";

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
