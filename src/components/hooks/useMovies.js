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
  const [filteredMoviesState, setFilteredMoviesState] = useState([]);

  const SHORT_DURATION = 40;

  useEffect(() => {
    setState({
      ...state,
      loading: true,
    })

    const handleFetchMovies = async () => {
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
    handleFetchMovies();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const filteredMovies = state.movies.filter(movie => {
      const { nameEN, duration } = movie;
      const isSearched = search && nameEN.includes(search);
      const isShort = shortMovies && duration <= SHORT_DURATION;
      
      if (search && shortMovies) {
        return isSearched && isShort;
      } else if (search) {
        return isSearched;
      } else if (shortMovies) {
        return isShort;
      }
      
      return true;
    });
    
    setFilteredMoviesState(filteredMovies);

  }, [state.movies, search, shortMovies]);


  const handleSetSearch = useCallback((value) => {
    setSearch(value);
  }, []);

  const handleSetShortMovies = useCallback((e) => {
    const { checked } = e.currentTarget;
    setShortMovies(checked);
    console.log(checked);
  }, []);


  console.log({ state, filteredMoviesState, search, shortMovies });

  return {
    setState,
    state,
    handleSetSearch,
    handleSetShortMovies,
    filteredMoviesState,
  };
}