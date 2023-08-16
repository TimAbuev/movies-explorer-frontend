import { useCallback, useState, useMemo, useEffect } from "react";
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

  useEffect(() => {
    const handleFetchMyMovies = async () => {
      setState(state => ({
        ...state,
        loading: true,
      }));
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
  }, []);

  useEffect(() => {
    const storedCheckboxValue = localStorage.getItem('checkbox');
    if (storedCheckboxValue === 'true') {
      setShortMovies(true);
      console.log(`выполнился useEffect storedCheckboxValue = ${storedCheckboxValue}`);
    } else {
      setShortMovies(false);
      console.log(`выполнился useEffect storedCheckboxValue else = ${storedCheckboxValue}`);
    }
  }, []);

  const filterMovies = useCallback((movies) => {

    if (!search && !shortMovies) {
      return movies;
    }

    const result = [];

    for (const movie of movies) {
      const { nameEN, duration, nameRU } = movie;

      // const isSearched = search && nameEN.toLowerCase().includes(search.toLowerCase()); // !

      const isSearched =
        (search &&
          (nameEN.toLowerCase().includes(search.toLowerCase()) ||
            nameRU.toLowerCase().includes(search.toLowerCase())))

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
    if (state.movies && state.movies.length > 0) {
      setShortMovies(checked);
      localStorage.setItem('checkbox', checked);
      // console.log(`handleSetShortMovies сработал if ${checked}`);
    } else {
      handleFetchMovies();
      setShortMovies(checked);
      localStorage.setItem('checkbox', checked);
      // console.log(`handleSetShortMovies сработал else ${checked}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleDeleteMovie(movie) {
    console.log("and now ......." + movie.id);
    mainApi.deleteMovie(movie.id)
      .then(() => {
        setState((prevState) => ({
          ...prevState, myMovies:
            prevState.myMovies.filter((m) => m.id !== movie.id)
        }));
      })
      .catch(function (error) {
        console.log('ошибка', error);
        setState(state => ({
          ...state,
          error: error.status,
        }));
      })
  }

  function handleCreateMovie(data) {
    mainApi.createMovie(data)
      .then(function (res) {
        setState((prevState) => ({
          ...prevState,
          myMovies: [...prevState.myMovies, res],
        }));
        console.log(state.myMovies);
      })
      .catch(function (error) {
        console.log('ошибка', error);
        setState(state => ({
          ...state,
          error: error.status,
        }));
      })
  }

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
    shortMovies,
    setShortMovies,
    handleDeleteMovie,
    handleCreateMovie,
  };
}