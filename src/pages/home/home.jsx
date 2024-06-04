import React, { useEffect, useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  const [islands, setIslands] = useState([]);
  // Use 'islands' instead of 'trips'
  useEffect(() => {
    fetch("  https://jsonplaceholder.typicode.com/photos")
      .then((data) => data.json())
      .then((response) => {
        setIslands(response.slice(0, 10)); // Access the 'islands' property
      });
  }, []);

  return (
    <div>
      <ul className="cardlist">
        {islands.map((island) => {
          return (
            <li className="card" key={island.id}>
              <img className="img" src={island.url} alt="" />
              <h2 className="title">{island.title}</h2>
              <button className="btn">
                <Link to="/about">More</Link>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Home;
