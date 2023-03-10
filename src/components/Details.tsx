import { useEffect } from 'react';

import { Movie } from '@interfaces/Movie';

interface DetailsProps {
  visible: boolean;
  movie: Movie | null;
  onClose: () => void;
}

export function Details(props: DetailsProps) {
  const { visible, movie, onClose } = props;

  if (!visible || !movie) {
    return null;
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  function getClassByRate(vote: number) {
    if (vote >= 8) {
      return <span className="badge badge-success">{vote}</span>;
    } else if (vote >= 5) {
      return <span className="badge badge-warning">{vote}</span>;
    } else {
      return <span className="badge badge-danger">{vote}</span>;
    }
  }

  return (
    <div className="container-fluid details">
      <div className="box-details">
        <div className="m-5">
          <div className="row">
            <div className="col-md-6">
              <span className="movie-close" onClick={onClose}>Fechar</span>
              <h1 className="movie-title">{movie.title}</h1>
              <div className="stars">{getClassByRate(movie.vote_average)}</div>
              <div className="box-description">
                <small>{movie.overview}</small>
              </div>
            </div>

            <div className="box-poster">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                className="thumbnail img-responsive"
                alt={movie.title}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
