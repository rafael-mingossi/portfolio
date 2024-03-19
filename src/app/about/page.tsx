import React, { Suspense } from "react";

async function getTodos() {
  await wait(2000);
  // throw new Error("ERROR COMING FROM GET TODOS FUNC");
  return fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
    res.json(),
  );
}

function wait(duration: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

const TodoList = async () => {
  const todos = await getTodos();
  return <h1>{todos && todos.length}</h1>;
};

const About = () => {
  return (
    <div>
      <h1>ABOUT</h1>

      <Suspense fallback={"Loading...."}>
        <TodoList />
      </Suspense>
    </div>
  );
};

export default About;
