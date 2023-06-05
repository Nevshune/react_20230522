import { Box, VStack, Text, HStack } from "@chakra-ui/react";
import { AiFillApple, AiFillHome, AiFillProfile, AiFillContacts, AiOutlineArrowLeft } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from "react-router-dom";
// import Home from "./home";
// import { children } from "react";

const GNB = [
  { title: "Home", href: "/", icon: AiFillHome },
  { title: "Profile", href: "/profile", icon: AiFillProfile },
  { title: "Contacts", href: "/contact", icon: AiFillContacts }
]


export default function Layout({ children, canGoBack, title }) {
  const location = useLocation();
  console.log(location.pathname);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1)
  }
  return (
    <>
      <Box w='full' display="flex" justifyContent={'center'}>
        <VStack w="sm">
          {/* 헤더 */}
          <Box display={'flex'} justifyContent={'center'} alignItems={'center'} w='inherit' h={'120px'} bg={'black'} position={'fixed'} top={0} zIndex={65535}>
            {canGoBack ? (

              <Box onClick={handleClick} position="absolute" left="20px" cursor="pointer">
                <AiOutlineArrowLeft color="white" size="24px" />
              </Box>

            )
              : null}

            {canGoBack ? <Text color="white">{title}</Text> : (<AiFillApple size={32} color="white" />)}
          </Box>

          {/* 본문 */}
          {children}

          {/* 메뉴 */}






          {canGoBack ?
            null
            :
            <Box w='inherit' h={'120px'} bg={'gray.900'} position={'fixed'} bottom={0} >
              <HStack h={'inherit'} justifyContent={'space-around'} alignItems={'center'}>
                {GNB.map((item) => (
                  <Box w="full">
                    <Link to={item.href}>
                      <VStack color={location.pathname === item.href ? "blue.200" : "white"} w='full'>
                        <item.icon size={32} />
                        <Text color={location.pathname === item.href ? "blue.200" : "white"}>{item.title}</Text>
                      </VStack>
                    </Link>
                  </Box>
                ))}
              </HStack>
            </Box>
          }


        </VStack>
      </Box>
    </>
  );
}

