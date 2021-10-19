import React from "react";

function Food({ favorite }) {
  // {favorite} => props.favorite 도 가능
  return <h3>I like {favorite}</h3>;
}

function App() {
  return (
    <div>
      Hello!! BYE
      <Food favorite="kimchi" />
      <Food favorite="ramen" />
      <Food favorite="chicken" />
    </div>
  );
}

export default App;
