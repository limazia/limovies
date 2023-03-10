import { useEffect, useState } from 'react';

import { getFilms } from '@services/axios';
import { Movie } from '@interfaces/Movie';

import { Header } from '@components/Header';
import { Details } from '@components/Details';
import { Loading } from '@components/Loading';

import './styles/styles.css';

export function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [detailVisibility, setDetailVisibility] = useState<boolean>(false);
  const [selectedMovie, setSelectedMovie] = useState<null | Movie>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadMovies();

    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  function handleOpenDetails(movie: Movie) {

    setDetailVisibility(true);
    setSelectedMovie(movie);
  }

  function handleCloseDetails() {
    setDetailVisibility(false);
    setSelectedMovie(null);
  }

  async function loadMovies() {
    const { data } = await getFilms();
    const { results } = data;

    if (results) setMovies(results);
  }

  if (isLoading) return <Loading />;

  return (
    <div className="h-100">
      <Header />
      <div className="container">
        <Details
          visible={detailVisibility}
          movie={selectedMovie}
          onClose={handleCloseDetails}
        />
        <div className="row mt-5">
          {movies.length > 0 && (
            <>
              {movies.map((movie) => (
                <div key={movie.id} className="col-md-3 pb-5">
                  <div
                    className="movie-card"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.7) 100%), url(${`https://image.tmdb.org/t/p/w500/${movie.poster_path}`})`,
                    }}
                    onClick={() => handleOpenDetails(movie)}
                  ></div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
