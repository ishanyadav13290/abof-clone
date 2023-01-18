import {Box, Flex, Image, Input, Spacer, Text } from "@chakra-ui/react";
import {FaCartPlus, FaSearch} from 'react-icons/fa'

export default function SearchBar(){
    return <Box p={0}>
        <Flex align="center">
            <Image src="https://imagescdn.abof.com/img/app/brands/abof/abof_logo_1.png" alt="Logo" w="130px"></Image>
            <Spacer />
            <FaSearch size="20px"  />
            <Input w="100px" h="20px" border="none" placeholder="SEARCH" m="0 10px"/>
            <FaCartPlus size="30px" cursor="pointer" />
            <Text m="0 10px" fontWeight={700}>CART</Text>
        </Flex>
    </Box>
}