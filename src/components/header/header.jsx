import { Box, Flex, HStack, Link, VStack } from "@chakra-ui/react";
import Banner from "../body/homeBanner/homeBanner";
import PathRoute from "../Routes/Routes";
import SearchBar from "./SearchBar";

export default function Header(){
    return <>
    <Box w="65%" m="auto" fontSize="xs">
    <VStack align="flex-end">
    <Flex justify="flex-end" mr="10px" fontWeight={700}>
    <Link href="/login">Login /</Link>
    <Link href= "/register">Register</Link>
    <Link href= "/contact" marginLeft="10px">Contact</Link>
    </Flex>
    </VStack>
    <SearchBar />
    <Flex cursor="pointer" p="10px 0">
        <Box fontSize="sm" fontWeight={700} m="0 20px">MEN</Box>
        <Box fontSize="sm" fontWeight={700} m="0 20px">WOMEN</Box>
        <Box fontSize="sm" fontWeight={700} m="0 20px">BOYS</Box>
        <Box fontSize="sm" fontWeight={700} m="0 20px">GIRLS</Box>
    </Flex>
    </Box>
    <Banner />
    <PathRoute />
    </>
}