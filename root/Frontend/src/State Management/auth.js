import { useState, createContext, useContext } from "react"

const authContext = createContext()

export function useAuth() {
  return useContext(authContext)
}

function useProvideAuth()  {
    const [user, setUser] = useState(() => {
      return localStorage.getItem("user")
    })

    const [cart, setCart] = useState(() => {
      return JSON.parse(localStorage.getItem("shopping-cart"))
    })

    const logIn = () => {
      setUser(1)
      localStorage.setItem("user", 1)
      localStorage.setItem("shopping-cart", JSON.stringify([]))
    }

    const logOut = () => {
      setUser(0)
      localStorage.setItem("user", 0)
      localStorage.setItem("shopping-cart", JSON.stringify([]))
    }

    const addToCart = product => {
      setCart(prevCart => {
        localStorage.setItem("shopping-cart", JSON.stringify([...prevCart, product]))
        return [...prevCart, product]
      })
    }

    const removeFromCart = product => {
        let newCart = cart.filter(prod => {
          return prod._id !== product._id
        })
        localStorage.setItem("shopping-cart", JSON.stringify(newCart))
        setCart(newCart)
    }

    return {
        user,
        cart, 
        logIn,
        logOut,
        addToCart,
        removeFromCart
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