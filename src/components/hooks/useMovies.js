import { useCallback, useEffect, useState } from "react";
import moviesApi from "../../utils/MoviesApi";

export const useMovies = () => {
  const [state, setState] = useState({
    loading: false,
    movies: [],
    error: null,
  });

  const [search, setSearch] = useState('');
  const [shortMovies, setShortMovies] = useState(false);

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
  }, []);

  const handleSetSearch = useCallback((value) => {
    setSearch(value);
  }, []);

  const handleSetShortMovies = useCallback((e) => {
    const { checked } = e.currentTarget;
    setShortMovies(checked);
  }, []);


  console.log(state);
  return {
    state,
    handleSetSearch,
    handleSetShortMovies
  };
}