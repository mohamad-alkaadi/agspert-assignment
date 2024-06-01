import { createContext, useState } from "react"
import { ChakraProvider } from "@chakra-ui/react"
import "./App.css"
import Navbar from "./components/Navbar"
export const ProjectContext = createContext()
function App() {
  const [useDarkMode, setUseDarkMode] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const changeDarkMode = () => [setUseDarkMode(!useDarkMode)]

  return (
    <ChakraProvider>
      <ProjectContext.Provider
        value={{
          useDarkMode,
          changeDarkMode,
          setIsAuthenticated,
          isAuthenticated,
        }}
      >
        <Navbar />
      </ProjectContext.Provider>
    </ChakraProvider>
  )
}

export default App
