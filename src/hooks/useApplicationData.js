import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useApplicationData(props) {
  const GET_TASKS = `http://localhost:8080/api/tasks`

  const [state, setState] = useState({
    user: null,
    menu: "Dashboard",
    tasks: [],
  })

  const setMenu = menu => setState({...state, menu});

  const setUser = user => setState({...state, user});

  useEffect(() => {
    Promise.all([
      axios.get(GET_TASKS),
    ]).then(all => {
      setState(prev => ({...prev, tasks: all[0].data}))
    })
  }, [])

  return { state, setMenu, setUser }

}