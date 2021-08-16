import { useState, createContext, useContext } from "react"

const authContext = createContext()

export function useAuth() {
  return useContext(authContext)
}

function useProvideAuth()  {
    const [user, setUser] = useState(0)

    const logIn = cb => {
      setUser(1)
      cb()
    }

    const logOut = cb => {
      setUser(0)
      cb()
    }

    return {
        user, 
        logIn,
        logOut
    }
}

export function ProvideAuth({ children })  {
    const auth = useProvideAuth()
    return (
      <authContext.Provider value={auth}>
        {children}
      </authContext.Provider>
    )
}