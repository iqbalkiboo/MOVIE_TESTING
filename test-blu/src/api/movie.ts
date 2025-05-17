import axios from 'axios';

const API_KEY = "93f0a4ccfe3f9c73511ef8e5bdea5c76";

const BASE_URL = 'https://api.themoviedb.org/3'

export const fetchMovies = (category: string, page = 1) =>
    axios.get(`${BASE_URL}/movie/${category}?api_key=${API_KEY}&language=en-US&page=${page}`)

export const searchMovies = (query: string, page = 1) =>
    axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`)

export const fetchMovieDetails = (movieId: number) =>
    axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US&append_to_response=credits`)

export const fetchMovieByCategory = (category: string, page = 1) => {
    return axios.get(`${BASE_URL}/movie/${category}`, {
        params: {
            api_key: API_KEY,
            language: 'en-US',
            page: page
        }
    })
}

export const searchMovie = (query: string, page = 1) => {
    return axios.get(`${BASE_URL}/search/movie`, {
        params: {
            api_key: API_KEY,
            language: "en-US",
            query: query,
            page: page,
        },
    });
};