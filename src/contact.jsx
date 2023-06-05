import { Button, Input, Radio, RadioGroup, Stack, Text, VStack } from "@chakra-ui/react";
import Layout from "./Layout";

export default function Contact() {


    return (
        <Layout>
            <VStack bg="blue.50" py="140px" w="full" alignItems={"flex-start"} px="4" spacing="10">

                <Text fontWeight={700} fontSize={20}>
                    무료상담신청
                </Text>

                <VStack as="form" w="full" alignItems={"flex-start"}>
                    <Text fontWeight={600}>이름</Text>
                    <Input placeholder="이름을 입력해 주세요" bg="white"></Input>
                </VStack>

                <VStack as="form" w="full" alignItems={"flex-start"}>
                    <Text fontWeight={600}>연락처</Text>
                    <Input  placeholder="연락처를 입력해 주세요 ( '-' 제외 )" bg="white"></Input>
                </VStack>

                <VStack as="form" w="full" alignItems={"flex-start"}>
                    <Text fontWeight={600}>email</Text>
                    <Input placeholder="이메일을 입력해 주세요" bg="white"></Input>
                </VStack>

                <VStack as="form" w="full" alignItems={"flex-start"}>
                    <Text fontWeight={600}>참가 신청 연령</Text>
                    <RadioGroup>
                        <Stack>
                            <Radio value='1' bg="white">성인(만 18세 이상)</Radio>
                            <Radio value='2' bg="white">중·고등학생</Radio>
                            <Radio value='3' bg="white">어린이(만 12세 미만)</Radio>
                        </Stack>
                    </RadioGroup>

                </VStack>
                <Button alignSelf={"center"} bg="gray.400" color={"white"}>문의하기</Button>



            </VStack>

        </Layout>
    )
}