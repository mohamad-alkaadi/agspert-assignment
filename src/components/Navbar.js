import { Box, Button, Flex, HStack, Link, IconButton } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"

import React, { useContext } from "react"
import SignIn from "./SignIn"
import { ProjectContext } from "../App"
import SignOut from "./SignOut"
const Navbar = () => {
  const context = useContext(ProjectContext)
  return (
    <Flex w="100%" borderBottom="1px solid black" justify="space-between">
      <Box p={2}>
        <Link _hover={{ textDecoration: "none" }}>Logo</Link>
      </Box>
      <HStack gap="10px" pr={2}>
        <Box>{context.isAuthenticated ? <SignOut /> : <SignIn />}</Box>
        <Box>
          <IconButton icon={<MoonIcon />} />
        </Box>
      </HStack>
    </Flex>
  )
}

export default Navbar
