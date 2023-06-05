import { Box, Image, VStack, Text } from "@chakra-ui/react";
import Layout from "./Layout";


export default function Detail() {
    return (
        <Layout canGoBack title="디테일 페이지">
            <VStack py={"110"} bg="gray.800" w="full" spacing={8}>
                <Box>
                    <Image src="https://images.unsplash.com/photo-1610620746460-de78cf3d1705?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
                </Box>
                <VStack w="full" alignItems={"flex-start"} px={4} spacing={1}>
                    <Text color="white" fontWeight={700} fontSize={20} > 아이슬란드 오로라 투어 </Text>
                    <Text color="white">낭만적인 겨울캠핑과 환상적인 오로라 체험</Text>
                </VStack>
                <Box w="25%" h="2px" bg="gray.700"></Box>
                <VStack w="full" alignItems={"flex-start"} px={4} spacing={1}>
                    <Text color="white" fontWeight={600} > 투어 일정 </Text>
                    <Text color="white">2023.11.25 ~ 2023.12.2 (7박 8일)</Text>
                </VStack>
                <Box w="25%" h="2px" bg="gray.700"></Box>
                <VStack w="full" alignItems={"flex-start"} px={4} spacing={1}>
                    <Text color="white" fontWeight={600} > 가격 안내 </Text>
                    <Text color="white">1,750,000원 (항공운임 포함)</Text>
                </VStack>
                <Box w="25%" h="2px" bg="gray.700"></Box><VStack w="full" alignItems={"flex-start"} px={4} spacing={1}>
                    <Text color="white" fontWeight={600} > 운영시간 </Text>
                    <Text color="white">10:00 ~ 17:00</Text>
                </VStack>
                <Box w="25%" h="2px" bg="gray.700"></Box>


                
            </VStack>
        </Layout>
    )
}