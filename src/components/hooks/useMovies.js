import { useCallback, useEffect, useState, useMemo } from "react";
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

  // показать мои фильмы
  useEffect(() => {
    setState({
      ...state,
      loading: true,
    })
    const handleFetchMyMovies = async () => {
      try {
        const myMovies = await mainApi.getMyMovies();
        setState(state => ({
          ...state,
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
    handleFetchMyMovies();
    // eslint-disable-next-line
  }, []);

// показать все фильмы
  useEffect(() => {
    setState({
      ...state,
      loading: true,
    })
    const handleFetchMovies = async () => {
      try {
        const movies = await moviesApi.getMovies();

        setState(state => ({
          ...state,
          movies,
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
    handleFetchMovies();
    // eslint-disable-next-line
  }, []);

  const filteredMovies = useMemo(() => {
    const { movies } = state;

    //  тру заполненная строка/тру короткометражки
    if (!search && !shortMovies) {
      return movies;
    }

    const result = [];

    for (const movie of movies) {
      const { nameEN, duration } = movie;

      const isSearched = search && nameEN.includes(search); // !
      const isShort = shortMovies && duration <= SHORT_DURATION; // !
      // false строка/false короткометражки
      if (search && shortMovies) {
        if (isSearched && isShort) {
          result.push(movie);
        }
      }
      // false строка|true короткометражки
      if (search && !shortMovies) {
        if (isSearched) {
          result.push(movie);
        }
      }
      // true строка/false короткометражки
      if (!search && shortMovies) {
        if (isShort) {
          result.push(movie);
        }
      }
    }

    return result;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, shortMovies, state.movies]); 

  const handleSetSearch = useCallback((value) => {
    setSearch(value);
  }, []);

  const handleSetShortMovies = useCallback((e) => {
    const { checked } = e.currentTarget;
    setShortMovies(checked);
    console.log(checked);
  }, []);


  console.log({ state, filteredMovies, search, shortMovies });
  return {
    setState,
    state,
    handleSetSearch,
    handleSetShortMovies,
  };
}