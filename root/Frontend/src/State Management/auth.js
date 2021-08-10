import { useState, createContext, useContext } from "react"

const authContext = createContext()

function useAuth() {
  return useContext(authContext)
}

function useProvideAuth({ children })  {
    const [user, setUser] = useState(null)

    const logIn = cb => {

    }

    const logOut = cb => {

    }

    return {
        user, 
        logIn,
        logOut
    }
}

export default function ProvideAuth({ children })  {
    const auth = useProvideAuth()
    return (
      <authContext.Provider value={auth}>
        {children}
      </authContext.Provider>
    )
  }