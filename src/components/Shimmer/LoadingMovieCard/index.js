import React from "react";
import Skeleton from "../Skeleton";

import styles from "./styles.module.css";

function LoadingMovieCard() {
  return (
    <div className={styles.movieCard}>
      <Skeleton className={styles.posterSkeleton} />
    </div>
  );
}

export default LoadingMovieCard;