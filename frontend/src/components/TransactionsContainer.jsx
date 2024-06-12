import { useEffect, useState } from "react";
import styled from "styled-components";
import TransactionItem from "./TransactionItem";
import axios from "axios";

const Container = styled.div``;

const Heading = styled.h2`
  font-size: 25px;
  font-weight: 600;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 15px 20px;
  outline: none;
  border-radius: 5px;
  margin: 5px 0;
  border: 1px solid #e6e8e9;
  background-color: #e6e8e9;
  margin-bottom: 25px;
`;

const TransactionItems = styled.div``;

const TransactionsContainer = ({ expenseList , onDelete }) => {

  
  
  return (
    <Container>
      <Heading>Transactions</Heading>

      <TransactionItems>
        {expenseList.length === 0 ? (
          <p>No Transactions</p>
        ) : (
          expenseList.map((expense) => (
            <TransactionItem key={expense.id} transaction={expense} onDelete={() => onDelete(expense.id)}  />
          ))
        )}
      </TransactionItems>
    </Container>
  );
};

export default TransactionsContainer;
