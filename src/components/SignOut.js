import { Button } from "@chakra-ui/react"
import React, { useContext } from "react"
import { ProjectContext } from "../App"

const SignOut = () => {
  const context = useContext(ProjectContext)
  const handleSignOut = () => {
    context.setIsAuthenticated(false)
  }
  return <Button onClick={() => handleSignOut()}>Sign Out</Button>
}

export default SignOut
