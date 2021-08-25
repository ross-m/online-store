import { useState, createContext, useContext } from "react"

const authContext = createContext()

export function useAuth() {
  return useContext(authContext)
}

function useProvideAuth()  {
    const [user, setUser] = useState(() => {
      return localStorage.getItem("user")
    })

    const logIn = cb => {
      setUser(1)
      localStorage.setItem("user", 1)
    }

    const logOut = cb => {
      setUser(null)
      localStorage.setItem("user", 0)
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