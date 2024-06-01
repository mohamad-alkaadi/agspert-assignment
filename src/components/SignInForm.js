import { Button, ButtonGroup, FormLabel, Input, Stack } from "@chakra-ui/react"
import { ProjectContext } from "../App"
import React, { useContext, useEffect, useState } from "react"

const SignInForm = ({ onCancel }) => {
  const [activeNext, setActiveNext] = useState(false)

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const context = useContext(ProjectContext)

  useEffect(() => {
    if (username !== "" && password !== "") {
      setActiveNext(true)
    } else {
      setActiveNext(false)
    }
    console.log("im here")
  }, [username, password])

  const handleNext = () => {
    if (username === "admin" && password === "admin") {
      context.setIsAuthenticated(true)
    } else {
      context.setIsAuthenticated(false)
    }
    console.log("im in handle bext")

    console.log(context.isAuthenticated)
  }
  return (
    <Stack spacing={1}>
      <FormLabel htmlFor="username">Username</FormLabel>
      <Input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        id="username"
        type="text"
        placeholder="Enter username"
      />
      <FormLabel htmlFor="password">Password</FormLabel>
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id="password"
        type="password"
        placeholder="Enter password"
      />
      <ButtonGroup mt={2} display="flex" justifyContent="flex-end">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button
          isDisabled={!activeNext}
          onClick={() => handleNext()}
          colorScheme="blue"
        >
          Sign In
        </Button>
      </ButtonGroup>
    </Stack>
  )
}

export default SignInForm
