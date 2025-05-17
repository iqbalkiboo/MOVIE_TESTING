import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../api/movie";
import { useNavigate, useParams } from "react-router-dom";

export default function MovieDetail() {
  const { id } = useParams()
  const [movie, setMovie] = useState<any>(null);
  const navigate = useNavigate()

  console.log(id);
  useEffect(() => {
    const getMovie = async () => {
      const res = await fetchMovieDetails(Number(id));
      console.log(res.data)
      setMovie(res?.data ?? []);
    };
    getMovie();
  }, [id])

  console.log('ma', movie);


  return (
    <div className="p-4">
      <div className="flex item-end">
        <button onClick={() => navigate(-1)} className="mb-4">
          &larr; Back
        </button>
      </div>
      <div className="flex gap-4">
        <div className="flex h-full w-[100%]">
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie?.poster_path}`}
            alt={movie?.original_title}
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{movie?.original_title}</h1>
          <p className="my-2 w-[72]">{movie?.overview}</p>
          <div>
            <p className="text-lg text-bold">Director</p>
            <div className="flex justify-center">
              {movie?.production_companies.map((company: any) => (
                <div className="flex">
                  <span
                    key={company.id}
                    className="text-sm text-gray-500 p-2 font-bold"
                  >
                    {company.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-lg text-bold">Main Cast</p>
            {movie?.credits?.cast.map((cast: any) => (
              <span key={cast.id} className="text-sm text-gray-500 font-bold">
                {cast.name}
              </span>
            ))}
          </div>
          <div>
            <p className="text-lg text-bold">Release Date:</p>
            <p>{movie?.release_date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
