"use client";
import React, { useState } from "react";
import { Box, Button, ChakraProvider, Flex, Heading, HStack, Input, Stack, Text } from "@chakra-ui/react";
export default function TodoList() {
  const [toodos, setToodos] = useState("");
  const [todos, setTodos] = useState([
    { todo: "HTML", completed: true },
    { todo: "CSS", completed: true },
    { todo: "JavaScript", completed: true },
    { todo: "ReactJS", completed: false },
  ]);
  // const onClickHandler = (element: any) => {
  //   console.log("Element : ", element);
  //   const newTodos = todos.map((todo: any) => {
  //     console.log("todo : ", todo);
  //     if (todo.todo == element.todo) {
  //       todo.completed = !todo.completed;
  //     }
  //     return todo;
  //   });
  //   setTodos(newTodos);
  // };
 
  const addTodo = ()=>{
    const newTodo = {todo:toodos,completed:false}
    const NewTodos = [...todos,newTodo]
    setTodos(NewTodos);
    
  };
  const deleteTodo = (element:any) => {
    const NewTodos = todos.filter(toodos=>{
      if(toodos.todo==element.todo) return false;
      return true;
    })
    console.log("old Todos ", todos, 'new Todos', NewTodos)
    setTodos(NewTodos);
  }
  return (
    <ChakraProvider>
      <Box maxW="650px"
    mx={{ base: "20px", lg: "auto" }}
    //   ml={{ base: "20px", lg: "auto" }}
    //   mr={{ base: "20px", lg: "auto" }}
    
    //   mx="20px"
    mt="-150px"
    //   mx="20px"
    bg="white"
    borderRadius={"10px"}
    padding='50px'
    overflow="hidden"
    boxShadow={
      " 0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);"
    }>
      <Text fontWeight={"semibold"} fontSize="40px">
        <Input
          placeholder="Type Here"
          value={toodos}
          mb="20px"
          paddingRight={'20px'}
          size="md"
          borderColor={"black"}
          mr={"10px"}
          w={'400px'}
          onChange={(e) => {
            setToodos(e.target.value);
          }}
        />
        <Button w={'80px'} bg="purple" color="white" height="45px" onClick={addTodo}> Add Todo </Button>
        <Stack style={{listStyle:"none"}}>
          {todos.map((element: any) => {
            

            return (
              <Flex>
              <li
                // style={{ color: element.completed ? "green" : "red" ,marginBottom:"20px"}}
                key={element.todo}
              >
                {/* <Input
                  type="checkbox"
                  w={"20px"}
                  h={"30px"}
                  checked={element.completed}
                  onChange={() => {
                    onClickHandler(element);
                  }}
                /> */}
                {element.todo}
                
                  
                  <Button ml="50px" bg='purple' color='white' borderColor={"black"} onClick={()=>{deleteTodo(element)}}>Delete</Button>
                
              </li>
              </Flex>
            );
          })}
        </Stack>
        </Text>
      </Box>
    </ChakraProvider>
  );
}