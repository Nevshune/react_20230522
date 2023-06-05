import { Avatar, Button, HStack, Text, VStack } from "@chakra-ui/react";
import Layout from "./Layout";

export default function Profile() {
    return (
        <Layout>
            <VStack bg="blue.50" minH="100vh" py="140px" w="full" alignItems={"center"} px="4" spacing="10">
                <VStack>
                    <Avatar name='Kent Dodds' size="2xl" src="https://images.unsplash.com/photo-1684919557234-df00bece5153?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" />
                    <Text fontSize={20} fontWeight={600}>Rahul Kangdon Manish</Text>
                    <Text fontSize={14}>풀스택 개발자를 꿈꾸는 개발지망생</Text>
                </VStack>
                {/* <HStack w="80%" spacing={"4"}>
                    <Box border="2px" rounded={"xl"} px="20px" py="1" w="140px" Align="Center" color="blue.400" bg="white" fontWeight={500}>Contact</Box>
                    <Box border="2px" rounded={"xl"} px="20px" py="1" w="140px" Align="Center" color="blue.400" bg="white" fontWeight={500}>Fallow</Box>
                </HStack> */}
                <HStack w="80%" spacing={"4"}>
                <Button border="2px" rounded={"xl"} px="20px" py="1" w="140px" Align="Center" color="blue.400" bg="white" fontWeight={500}>Contact</Button>
                <Button border="2px" rounded={"xl"} px="20px" py="1" w="140px" Align="Center" color="blue.400" bg="white" fontWeight={500}>Fallow</Button>
                </HStack>

            </VStack>
        </Layout>
    )
}