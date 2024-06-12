import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e6e8e9;
  background-color: #fff;
  border-radius: 5px;
  padding: 10px 20px;
  border-right: 5px solid ${(props) => (props.isExpense ? "red" : "green")};
  margin-bottom: 10px;
  cursor: pointer;
`;

const Details = styled.span`
  flex: 2;
`;

const Amount = styled.span`
  flex: 1;
  text-align: right;
  margin-left: 20px;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-left: 20px;
`;

const EditIcon = styled(FontAwesomeIcon)`
  color: green;
  cursor: pointer;
`;

const DeleteIcon = styled(FontAwesomeIcon)`
  color: red;
  cursor: pointer;
`;

const TransactionItem = ({ transaction, onDelete }) => {
  return (
    <Item key={transaction.id}>
      <Details>{transaction.details}</Details>
      <Amount>Rs {transaction.amount}</Amount>
      <IconContainer>
        <DeleteIcon icon={faTrash} onClick={() => onDelete()} />
      </IconContainer>
    </Item>
  );
};

export default TransactionItem;
