import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4001/movies")
    .then(res => res.json())
    .then(data => setMovies(data))
    .catch(error => console.log(error))
  }, [])

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {movies && movies.map(movie => (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </main>
    </>
  );
};

export default Home;