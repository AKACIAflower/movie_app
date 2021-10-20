import React from "react";
import PropTypes from "prop-types";

function Fruit({ name, rating }) {
  // {favorite} => props.favorite 도 가능
  return (
    <div>
      <h3>I like {name}</h3>
      <h4>{rating}/5.0</h4>
    </div>
  );
}

Fruit.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

const fruitILike = [
  { name: "Apple", id: 1, rating: 5.0 },
  { name: "Banana", id: 2, rating: 3.5 },
  { name: "Pear", id: 3, rating: 4.6 },
];

function App() {
  return (
    <div>
      {fruitILike.map((dish) => (
        <Fruit key={dish.id} name={dish.name} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
