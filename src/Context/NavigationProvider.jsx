import { NavigationContext } from "./NavigationContext"
import {useNavigate} from "react-router"

export default function NavigationProvider({children}) {
    const navigate = useNavigate()
  return (
    < NavigationContext value={{navigate}}>
      {children}
    </NavigationContext>
  )
}
