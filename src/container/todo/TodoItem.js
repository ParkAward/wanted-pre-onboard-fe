import axios from "axios";

import { MdDelete, MdDone, MdCancel, MdRemoveDone } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Input from "../../components/Input";
import styled from "styled-components";

const TodoItem = ({ data, execute }) => {
  const [edit, setEdit] = useState(false);
  const labelRef = useRef();
  const formRef = useRef();
  useEffect(() => {
    if (labelRef.current) {
      if (data.isCompleted) {
        labelRef.current.classList.add("done");
      } else {
        labelRef.current.classList.remove("done");
      }
    }
    if (edit) {
      setTodoInput(data.todo);
    }
  }, [edit, data.isCompleted, data.todo]);

  const isCompleted = useMemo(() => data.isCompleted, [data.isCompleted]);
  const todo = useMemo(() => data.todo, [data.todo]);
  const [todoInput, setTodoInput] = useState("");

  const updateTodoLabel = async (e) => {
    e.preventDefault();
    try {
      const result = axios.put(`/todos/${data.id}`, {
        todo: todoInput,
        isCompleted,
      });
      if (result) {
        setEdit(false);
        execute(true);
      }
    } catch (e) {
      alert(e);
    }
  };
  const onChangeTodoLabel = (e) => setTodoInput(e.target.value);
  const handleSubmit = () => formRef.current.submit();
  const handleEditMode = () => setEdit((f) => !f);
  const updateTodoIsCompleted = async () => {
    try {
      const result = axios.put(`/todos/${data.id}`, {
        todo,
        isCompleted: !isCompleted,
      });
      if (result) {
        execute(true);
      }
    } catch (e) {
      alert(e);
    }
  };
  const deleteTodo = () => {
    axios.delete(`/todos/${data.id}`);
    execute(true);
  };
  return (
    <TodoItemContainer>
      <TodoLabelContainer ref={formRef} onSubmit={updateTodoLabel}>
        {edit ? (
          <Input
            width={"20rem"}
            name={"todo"}
            value={todoInput}
            onChange={onChangeTodoLabel}
          />
        ) : (
          <TodoItemLabel ref={labelRef}>{data.todo}</TodoItemLabel>
        )}
      </TodoLabelContainer>
      <TodoItemEventBox>
        {edit ? (
          <>
            <button>
              <MdDone size={25} onClick={handleSubmit} />
            </button>
            <button onClick={handleEditMode}>
              <MdCancel size={25} />
            </button>
          </>
        ) : (
          <>
            <button onClick={handleEditMode}>
              <FaPencilAlt size={20} />
            </button>
            <button onClick={updateTodoIsCompleted}>
              {data.isCompleted ? (
                <MdRemoveDone size={25} />
              ) : (
                <MdDone size={25} />
              )}
            </button>
            <button onClick={deleteTodo}>
              <MdDelete size={25} />
            </button>
          </>
        )}
      </TodoItemEventBox>
    </TodoItemContainer>
  );
};
const TodoItemContainer = styled.div`
  width: 100%;
  height: 4rem;
  background: ${({ theme }) => theme.red.light}55;
  margin-top: 0.3rem;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
`;
const TodoLabelContainer = styled.form`
  display: flex;
  align-items: center;
  & > input {
    position: relative;
    left: -4%;
    margin-top: 12px;
    font-size: 25px;
    align-self: flex-end;
  }
`;
const TodoItemLabel = styled.p`
  font-weight: 500;
  font-size: 26px;
  position: relative;

  &.done {
    opacity: 0.6;
    &:before {
      content: "";
      position: absolute;
      top: 50%;
      left: -0.5rem;
      display: block;
      width: 0%;
      height: 1px;
      background: #fff;
      animation: strikeitem 0.3s ease-out 0s forwards;
    }
  }
`;
const TodoItemEventBox = styled.div`
  display: flex;
  margin-left: auto;
  button {
    display: block;
    border: 0px;
    background: none;
    color: #fff;
    padding: 0.3rem;
    :hover {
      color: ${({ theme }) => theme.red.light};
    }
  }
`;

export default TodoItem;
