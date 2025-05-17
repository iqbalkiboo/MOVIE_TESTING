import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { fetchMovieByCategory, fetchMovies, searchMovie } from "../api/movie";
import InfiniteScroll from "react-infinite-scroll-component";
import SearchMovie from "../components/SearchMovie";

export default function Home() {
  const [category, setCategory] = useState("now_playing");
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<any[]>([]);
  const [querySearch, setQuerySearch] = useState("");

  const loadMovies = async () => {
    try {
      const res = querySearch
        ? await searchMovie(querySearch, page)
        : await fetchMovieByCategory(category, page);
      setMovies(res?.data?.results);
      
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAllMovies = async () => {
    try {
        const res = await fetchMovies(category, page);
        setMovies((prev) => [...prev, ...res.data.results]);
        setPage((prev) => prev + 1);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadMovies();
  }, [category, querySearch]);

  return (
    <div>
      <div className="card p-4">
        <h1 className="text-2xl font-bold mb-4">
          Movies - {category.replace("_", " ")}
        </h1>
        <InfiniteScroll
          dataLength={movies.length}
          next={fetchAllMovies}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          <SearchMovie
            onSearch={(query: any) => {
              setQuerySearch(query);
              setPage(1);
            }}
            onCategorySelect={(category: any) => {
              setCategory(category);
              setQuerySearch("");
              setPage(1);
            }}
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {movies?.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
}
