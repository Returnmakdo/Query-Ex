import React from "react";
import { useQuery } from "react-query";

function Todo() {
  // const { status, data, error } = useQuery("todos", fetchTodoList);
  // 위처럼 status를 isLoading, isError 대신 사용한다.
  // const { isLoading, isError, data, error } = useQuery("todos", fetchTodoList, {
  //   refetchOnWindowFocus: false,
  //   retry: 0, // 실패 시 재호출 몇번 할지
  //   onSuccess: (data) => {
  //     // 성공시 호출
  //     console.log(data);
  //   },
  //   onError: (e) => {
  //     // 실패시 호출
  //     console.log(e.message);
  //   },
  // });
  const { isLoading, error, data } = useQuery(["todo"], async () => await fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) => res.json()));

  // status를 사용할 시 조건은 status === "loading" , status === "error" 로 변경된다.
  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>Error : {error.message}</span>;
  }

  return <div>{data.title}</div>;
}

export default Todo;
