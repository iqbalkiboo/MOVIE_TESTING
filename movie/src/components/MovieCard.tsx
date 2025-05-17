import React from "react";
import { Link } from "react-router-dom";

type Props = {
  movie: {
    id: number;
    original_title: string;
    poster_path: string;
    release_date: string;
  };
};

export default function MovieCard({ movie }: Props) {
  return (
    <div>
      <div className="card flex h-full">
        <Link
          to={`/movies/${movie.id}`}
          className="bg-white rounded shadow-md p-4"
        >
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={movie.original_title}
            className="w-full h-auto"
          />
          <div className="p-2">
            <h2 className="text-lg font-bold mt-2">{movie?.original_title}</h2>
            <p className="text-xs text-gray-500">
              {new Date(movie.release_date).getFullYear()}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
