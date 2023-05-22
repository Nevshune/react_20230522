import { Box, VStack, Text, HStack} from "@chakra-ui/react";
import { AiFillApple, AiFillHome, AiFillProfile, AiFillContacts } from 'react-icons/ai';
import { Link } from "react-router-dom";
// import Home from "./home";
// import { children } from "react";


export default function Layout({children}) {
  return (
    <>
      <Box w='full' display="flex" justifyContent={'center'}>
        <VStack w="sm">
          {/* 헤더 */}
          <Box display={'flex'} justifyContent={'center'} alignItems={'center'} w='inherit' h={'120px'} bg={'black'} position={'fixed'} top={0} zIndex={65535}>
            <AiFillApple size={48} color="white" />
          </Box>

          {/* 본문 */}
          {children}

          {/* 메뉴 */}
          <Box w='inherit' h={'120px'} bg={'gray.900'} position={'fixed'} bottom={0} >
            <HStack h={'inherit'} justifyContent={'space-around'} alignItems={'center'}>
              <Link to="/">
              <VStack color={'white'} w='full'>
                <AiFillHome size={32} />
                <Text>Home</Text>
              </VStack>
              </Link>

              <Link to="/profile">
              <VStack color={'white'} w='full'>
                <AiFillProfile size={32} />
                <Text>Profile</Text>
              </VStack>
              </Link>

              <Link to="/contect">
              <VStack color={'white'} w='full'>
                <AiFillContacts size={32} />
                <Text>Contacts</Text>
              </VStack>
              </Link>

            </HStack>
          </Box>
        </VStack>
      </Box>
    </>
  );
}

