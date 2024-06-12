import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

const AddBtn = styled.button`
  cursor: pointer;
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 7px 20px;
  font-size: 16px;
  border: none;
  text-transform: uppercase;
  border-radius: 5px;
`;

const OverviewComponent = ({ toggle, setToggle}) => {
  return (
    <Container>
      <AddBtn onClick={() => setToggle(!toggle)}>
        {toggle ? "Cancel" : "Add Transaction"}
      </AddBtn>
    </Container>
  );
};

export default OverviewComponent;
