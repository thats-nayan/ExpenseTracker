import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import AddTransaction from "./AddTransaction";
import OverviewComponent from "./OverviewComponent";
import TransactionsContainer from "./TransactionsContainer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  max-width: 100%;
  background-color: aliceblue;
  padding: 30px 20px;
  border: 1px solid #000;
  border-radius: 5px;
  margin: 10px;
`;

const Heading = styled.h1`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

const TransactionDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 25px;
`;

const ExpenseBox = styled.div`
  flex: 1;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 10px 20px;
  background-color: #fff;
  & span {
    font-weight: bold;
    font-size: 25px;
    display: block;
    color: ${(props) => (props.isExpense ? "red" : "green")};
  }
`;


const Tracker = () => {
  const [toggle, setToggle] = useState(false);
  const [total, setTotal] = useState(0)
  const [expenseList, setExpenseList] = useState([]);
  const fetchData = async () => {
    const response = await axios.get("http://localhost:8080/expenses");
    setExpenseList(response.data);
    let sum = 0;
    for (let i = 0; i < response.data.length; i++) {
        sum += response.data[i].amount;
    }
    setTotal(sum);
  }
  useEffect(() => {
    fetchData();
  }, []);

  async function onDelete(id) {
    await axios.delete("http://localhost:8080/expenses/" + id);
    fetchData();
  }

  const AddTransactions = async ({amount,details}) => {
    await axios.post("http://localhost:8080/expenses", {
      amount,details
    });
    fetchData();
  };


  return (
    <Container>
      <Heading>Expense Tracker</Heading>
      <OverviewComponent
        toggle={toggle}
        setToggle={setToggle}
      />

      {toggle && (
        <AddTransaction
          setToggle={setToggle}
          AddTransactions={AddTransactions}
        />
      )}

      <TransactionDetails>
        <ExpenseBox isExpense>
          Expense <span>Rs {total}</span>
        </ExpenseBox>

      </TransactionDetails>

      <TransactionsContainer expenseList={expenseList} onDelete={onDelete} />
    </Container>
  );
};

export default Tracker;
