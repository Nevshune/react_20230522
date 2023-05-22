import { Box, VStack, Text, HStack, Grid, GridItem } from "@chakra-ui/react";
import { AiFillApple, AiFillHome, AiFillProfile, AiFillContacts } from 'react-icons/ai';

const NewItem = [
  {text : "팔공산 투어" , image : "https://cdn.pixabay.com/photo/2014/09/07/22/17/forest-438432_960_720.jpg"},
  {text : "추억의 여행" , image : "https://cdn.pixabay.com/photo/2016/01/09/18/28/notepad-1130743_960_720.jpg"},
  {text : "동해바다로" , image : "https://cdn.pixabay.com/photo/2016/03/04/19/36/beach-1236581_960_720.jpg"},
  {text : "사진 명소 투어" , image : "https://cdn.pixabay.com/photo/2017/10/23/05/56/summer-2880261_960_720.jpg"}
]


const dataTour = [
  {text : "겨울 리조트 할인" , image : "https://cdn.pixabay.com/photo/2019/07/25/17/09/camp-4363073_960_720.png"},
  {text : "열대 섬 투어" , image : "https://cdn.pixabay.com/photo/2018/03/12/20/07/maldives-3220702_960_720.jpg"},
  {text : "동유럽 열차 투어" , image : "https://cdn.pixabay.com/photo/2018/02/21/10/16/train-station-3169964_960_720.jpg"}
]

function App() {
  return (
    <>
      <Box w='full' display="flex" justifyContent={'center'}>
        <VStack w="sm">
          {/* 헤더 */}
          <Box display={'flex'} justifyContent={'center'} alignItems={'center'} w='inherit' h={'120px'} bg={'black'} position={'fixed'} top={0} zIndex={65535}>
            <AiFillApple size={48} color="white" />
          </Box>

          {/* 본문 */}
          <VStack spacing={8} w='inherit' bg={'blue.50'} py='140px' px={4} alignItems={"flex-start"}>
            {/* 최신상품 */}

            

            <VStack spacing={8} w={'full'} alignItems={"flex-start"}>
              <Text fontWeight={600} fontSize={28}>최신상품</Text>
              <Grid gridTemplateColumns={"repeat(2, 1fr)"} gap={2} w={'full'}>

              {
              NewItem.map((item, i) => (
                <GridItem h="200" border={"1px"} rounded={"md"} borderColor={"gray.300"} backgroundImage={`url(${item.image})`} backgroundSize={'cover'} backgroundPosition={'center'} position={"relative"} overflow={"hidden"}>
                  <Box position={'absolute'} top={0} left={0} w={'full'} h={'full'} bgGradient={'linear(to-r,rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.7))'}>
                    <Text color={'white'} position={"absolute"} w={'full'} bottom={0} align={'center'} fontWeight={600} py={4}>{item.text}</Text>
                  </Box>
                </GridItem>
              ))}

                {/* <GridItem h="200" border={"1px"} rounded={"md"} borderColor={"gray.300"} backgroundImage="url('https://cdn.pixabay.com/photo/2014/09/07/22/17/forest-438432_960_720.jpg')" backgroundSize={'cover'} backgroundPosition={'center'} position={"relative"} overflow={"hidden"}>
                  <Box position={'absolute'} top={0} left={0} w={'full'} h={'full'} bgGradient={'linear(to-r,rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.7))'}>
                    <Text color={'white'} position={"absolute"} w={'full'} bottom={0} align={'center'} fontWeight={600} py={4}>팔공산 투어</Text>
                  </Box>
                </GridItem>

                <GridItem h="200" border={"1px"} rounded={"md"} borderColor={"gray.300"} backgroundImage="url('https://cdn.pixabay.com/photo/2016/01/09/18/28/notepad-1130743_960_720.jpg')" backgroundSize={'cover'} backgroundPosition={'center'} position={"relative"} overflow={"hidden"}>
                  <Box position={'absolute'} top={0} left={0} w={'full'} h={'full'} bgGradient={'linear(to-r,rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.7))'}>
                    <Text color={'white'} position={"absolute"} w={'full'} bottom={0} align={'center'} fontWeight={600} py={4}>어쩌고 저쩌고</Text>
                  </Box>
                </GridItem>

                <GridItem h="200" border={"1px"} rounded={"md"} borderColor={"gray.300"} backgroundImage="url('https://cdn.pixabay.com/photo/2016/03/04/19/36/beach-1236581_960_720.jpg')" backgroundSize={'cover'} backgroundPosition={'center'} position={"relative"} overflow={"hidden"}>
                  <Box position={'absolute'} top={0} left={0} w={'full'} h={'full'} bgGradient={'linear(to-r,rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.7))'}>
                    <Text color={'white'} position={"absolute"} w={'full'} bottom={0} align={'center'} fontWeight={600} py={4}>블라블라</Text>
                  </Box>
                </GridItem>

                <GridItem h="200" border={"1px"} rounded={"md"} borderColor={"gray.300"} backgroundImage="url('https://cdn.pixabay.com/photo/2017/10/23/05/56/summer-2880261_960_720.jpg')" backgroundSize={'cover'} backgroundPosition={'center'} position={"relative"} overflow={"hidden"}>
                  <Box position={'absolute'} top={0} left={0} w={'full'} h={'full'} bgGradient={'linear(to-r,rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.7))'}>
                    <Text color={'white'} position={"absolute"} w={'full'} bottom={0} align={'center'} fontWeight={600} py={4}>갤러리</Text>
                  </Box>
                </GridItem> */}
              </Grid>
            </VStack>

            {/* 이벤트 */}
            <VStack w={'full'} alignItems={"flex-start"}>
              <Text fontWeight={600} fontSize={28}>이벤트</Text>
              <Grid w={'full'} gap={2} >

                {
                  dataTour.map((item, i) => (
                    <GridItem key={i} w={'full'} h={'120px'} backgroundImage={`url(${item.image})`} backgroundSize="cover" backgroundPosition={'center'} rounded={"lg"} position={"relative"}>
                      <Box position={"absolute"} top={0} left={0} width={"full"} height={"full"} bgGradient={'linear(to-r,rgba(255, 255, 255, 0.7),rgba(255, 255, 255, 0),rgba(255, 255, 255, 0.7))'}>
                        <Text position={"absolute"} top={'50%'} left={'50%'} transform={'translate(-50%, -50%)'} fontWeight={900} fontSize={20} color={'gray.100'} textAlign={'center'}>
                          {item.text}
                        </Text>
                      </Box>
                    </GridItem>
                  ))}



                {/* <GridItem w={'full'} h={'120px'} backgroundImage={"url('https://cdn.pixabay.com/photo/2019/07/25/17/09/camp-4363073_960_720.png')"} backgroundSize="cover" backgroundPosition={'center'} rounded={"lg"} position={"relative"}>
                  <Box position={"absolute"} top={0} left={0} width={"full"} height={"full"} bgGradient={'linear(to-r,rgba(255, 255, 255, 0.7),rgba(255, 255, 255, 0),rgba(255, 255, 255, 0.7))'}>
                    <Text position={"absolute"} top={'50%'} left={'50%'} transform={'translate(-50%, -50%)'} fontWeight={900} fontSize={20} color={'gray.100'} textAlign={'center'}>
                      겨울 리조트 할인
                    </Text>
                  </Box>
                </GridItem>
                
                <GridItem w={'full'} h={'120px'} backgroundImage={"url('https://cdn.pixabay.com/photo/2018/03/12/20/07/maldives-3220702_960_720.jpg')"} backgroundSize="cover" backgroundPosition={'center'} rounded={"lg"} position={"relative"}>
                  <Box position={"absolute"} top={0} left={0} width={"full"} height={"full"} bgGradient={'linear(to-r,rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.3))'}>
                    <Text position={"absolute"} top={'50%'} left={'50%'} transform={'translate(-50%, -50%)'} fontWeight={900} fontSize={20} color={'white'} textAlign={'center'}>
                      열대 섬 투어
                    </Text>
                  </Box>
                </GridItem>

                <GridItem w={'full'} h={'120px'} backgroundImage={"url('https://cdn.pixabay.com/photo/2018/02/21/10/16/train-station-3169964_960_720.jpg')"} backgroundSize="cover" backgroundPosition={'center'} rounded={"lg"} position={"relative"}>
                  <Box position={"absolute"} top={0} left={0} width={"full"} height={"full"} bgGradient={'linear(to-r,rgba(100, 100, 0, 0.3),rgba(0, 0, 0, 0),rgba(100, 100, 0, 0.3))'}>
                    <Text position={"absolute"} top={'50%'} left={'50%'} transform={'translate(-50%, -50%)'} fontWeight={900} fontSize={20} color={'white'} textAlign={'center'}>
                      동유럽 열차 투어
                    </Text>
                  </Box>
                </GridItem> */}

              </Grid>
            </VStack>
          </VStack>

          {/* 메뉴 */}
          <Box w='inherit' h={'120px'} bg={'gray.900'} position={'fixed'} bottom={0} >
            <HStack h={'inherit'} justifyContent={'space-between'} alignItems={'center'}>

              <VStack color={'white'} w='full'>
                <AiFillHome size={32} />
                <Text>Home</Text>
              </VStack>

              <VStack color={'white'} w='full'>
                <AiFillProfile size={32} />
                <Text>Profile</Text>
              </VStack>

              <VStack color={'white'} w='full'>
                <AiFillContacts size={32} />
                <Text>Contacts</Text>
              </VStack>

            </HStack>
          </Box>
        </VStack>
      </Box>
    </>
  );
}

export default App;
