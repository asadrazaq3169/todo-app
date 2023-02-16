"use client";
import TodoList from "./todoList";
import { Box, ChakraProvider, Heading } from "@chakra-ui/react";
export default function Home() {
  return (
    <ChakraProvider>
      <Box
        mx={{ base: "20px", lg: "auto" }}
        textAlign="center"
        bg="purple"
        color="white"
        pt="90px"
        pb="250px"
      >
        <Heading fontSize={"36px"}>Welcome to Todo Application</Heading>
      </Box>
      <TodoList />
    </ChakraProvider>
  );
}
