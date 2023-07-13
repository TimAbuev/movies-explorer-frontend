import { useCallback, useState, useMemo } from "react";
import moviesApi from "../../utils/MoviesApi";
import mainApi from '../../utils/MainApi';

export const useMovies = () => {
  const [state, setState] = useState({
    loading: false,
    movies: [],
    error: null,
    myMovies: [],
  });

  const [search, setSearch] = useState('');
  const [shortMovies, setShortMovies] = useState(false);

  const SHORT_DURATION = 40;

  const handleFetchMovies = async () => {
    setState(state => ({
      ...state,
      loading: true,
    }));
    try {
      const movies = await moviesApi.getMovies();
      const myMovies = await mainApi.getMyMovies();

      setState(state => ({
        ...state,
        movies,
        myMovies,
      }));
    }
    catch (error) {
      setState(state => ({
        ...state,
        error: error.status,
      }));
    }
    finally {
      setState(state => ({
        ...state,
        loading: false,
      }));
    }
  };

  const filterMovies = useCallback((movies) => {

    if (!search && !shortMovies) {
      return movies;
    }

    const result = [];

    for (const movie of movies) {
      const { nameEN, duration } = movie;

      const isSearched = search && nameEN.toLowerCase().includes(search.toLocaleLowerCase()); // !
      const isShort = shortMovies && duration <= SHORT_DURATION; // !

      if (search && shortMovies) {
        if (isSearched && isShort) {
          result.push(movie);
        }
      }

      if (search && !shortMovies) {
        if (isSearched) {
          result.push(movie);
        }
      }

      if (!search && shortMovies) {
        if (isShort) {
          result.push(movie);
        }
      }
    }

    return result;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, shortMovies, state.movies, state.myMovies]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const filteredMovies = useMemo(() => {
    const { movies } = state;
    return filterMovies(movies);
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const filteredMyMovies = useMemo(() => {
    const { myMovies } = state;
    return filterMovies(myMovies);
  });

  const moviesNotFound = (search || shortMovies) && filteredMovies.length === 0;
  const myMoviesNotFound = (search || shortMovies) && filteredMyMovies.length === 0;


  const handleSetSearch = useCallback((value) => {
    setSearch(value);
  }, []);

  const handleSetShortMovies = useCallback((e) => {
    const { checked } = e.currentTarget;
    setShortMovies(checked);
  }, []);


  console.log({ state, filteredMovies, search, shortMovies });

  return {
    setState,
    state,
    handleSetSearch,
    handleSetShortMovies,
    filteredMovies,
    filteredMyMovies,
    moviesNotFound,
    myMoviesNotFound,
    handleFetchMovies,
  };
}