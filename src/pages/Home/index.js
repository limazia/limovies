import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

import Header from "../../components/Header";
import Details from "../../components/Details";
import LoadingMovieCard from "../../components/Shimmer/LoadingMovieCard";

import styles from "./styles.module.css";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [movieId, setMovieId] = useState("");
  const [details, setDetails] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadMovies();

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  async function loadMovies() {
    try {
      const { data } = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=a8347441de3ac774a2cbef4710f46109&language=pt-BR&page=1");
      const { results } = data;

      if (results) setMovies(results);
    } catch (e) {
      toast.error("Erro ao carregar!");
    }
  }

  useEffect(() => {
    if (movieId) {
      setDetails(true);
    }
  }, [movieId]);

  useEffect(() => {
    if (!details) {
      setMovieId("");
      loadMovies();
    }
  }, [details]);

  return (
    <div className="h-100">
      <Header />
      <div className="container">
        {details && <Details close={() => setDetails(false)} id={movieId} />}
        {movies.length > 1 ? (
          <div className="row mt-5">
            {movies.map((movie, index) => (
              <div key={movie.id} className="col-md-3 pb-5">
                {isLoading ? (
                  <LoadingMovieCard key={index} />
                ) : (
                  <div
                    className={styles.movieCard}
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.7) 100%),
                      url(${`https://image.tmdb.org/t/p/w500/${movie.poster_path}`})`,
                    }}
                    onClick={() => setMovieId(movie.id)}
                  ></div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
