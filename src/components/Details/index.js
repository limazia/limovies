import React, { useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import axios from "axios";

import styles from "./styles.module.css";

function Details({ id, close }) {
  document.body.style.overflow = "hidden";

  const [details, setDetails] = useState([]);

  const clickOutside = useCallback(
    function clickOutsideEventListener(e) {
      if (e.target.id === "outsideProductModal") {
        close();
      }
    },
    [close]
  );

  useEffect(() => {
    loadDetails();
    document.addEventListener("click", clickOutside);

    return () => {
      document.removeEventListener("click", clickOutside);
    };
  }, [id, clickOutside]);

  async function loadDetails() {
    try {
      const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=a8347441de3ac774a2cbef4710f46109&language=pt-BR`);

      if (data) {
        setDetails(data);
      }
    } catch (e) {
      toast.error(e);
    }
  }

  function getClassByRate(vote) {
    if (vote >= 8) {
      return <span className="badge badge-success">{vote}</span>;
    } else if (vote >= 5) {
      return <span className="badge badge-warning">{vote}</span>;
    } else {
      return <span className="badge badge-danger">{vote}</span>;
    }
  }

  return (
    <div className={styles.boxDetails} id="outsideProductModal">
      <div className="container">
        <div className={styles.boxContainer}>
          <div className="m-5">
            <div className="row">
              <div class="col-md-6">
                <h1 className={styles.movieTitle}>{details.title}</h1>
                <div className="stars">
                  {getClassByRate(details.vote_average)}
                </div>
                <div className={styles.boxDescription}>
                  <small>{details.overview}</small>
                </div>
              </div>

              <div className={styles.boxPoster}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
                  className="thumbnail img-responsive"
                  alt={details.title}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
