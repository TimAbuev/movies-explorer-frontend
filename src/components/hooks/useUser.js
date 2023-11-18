import { useState, useEffect, createContext, useContext } from "react"
import * as Auth from '../../utils/Auth';

const CurrentUserContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, setState] = useState({
    loading: false,
    user: null,
  })

  // если есть токен в localStorage, то получаем данные о пользователе
  useEffect(() => {
    const jwt = localStorage.getItem('jwt');

    if (!jwt) {
      localStorage.clear();
      return;
    }

    const getUser = async () => {
      setState({ ...state, loading: true });
      let fetchedUser = null;

      try {
        fetchedUser = await Auth.getContent(jwt);
      }
      catch (err) {
        console.log(err);
      }
      finally {
        setState({
          user: fetchedUser,
          loading: false,
        })
      }
    }
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CurrentUserContext.Provider value={{...state}}>
      {children}
    </CurrentUserContext.Provider>
  );
}

export const useUser = () => {
  const { user } = useContext(CurrentUserContext);

  if (user === undefined) {
    throw new Error('u need UserProvider');
  }
  return user;
}

