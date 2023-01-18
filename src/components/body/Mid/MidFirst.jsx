import { Box, Image, Spacer, HStack, VStack,Text, Button, Flex, Divider} from "@chakra-ui/react";

export default function MidFirst(){
    return <>
        <VStack w="100%" m="auto" justify="center" p="80px 80px 20px 80px" bg="rgb(235, 249, 255)">
        <HStack >
        <Box >
        <Image src="https://imagescdn.abof.com/img/app/shopmedia/production/1/13-62-10521.jpg?w=501.27000000000004&auto=format" />
        </Box>
        <Spacer />
        <Box ><Image src="https://imagescdn.abof.com/img/app/shopmedia/production/1/13-62-10522.jpg?w=1002.5400000000001&auto=format"   /></Box>
    </HStack>
    </VStack>

    {/* <HStack bg="url('https://imagescdn.abof.com/img/app/brands/Allensolly/home/BestBuy/AS_D_BestBuyBg.png')" w="99%" m="auto" bgRepeat="no-repeat" bgSize="cover"> */}
    {/* <HStack p="40px" textAlign="left" m="auto"> */}
        <Flex m="auto"align="center" bg="url('https://imagescdn.abof.com/img/app/brands/Allensolly/home/BestBuy/AS_D_BestBuyBg.png')" w="99%" bgRepeat="no-repeat" bgSize="cover" p="60px 0" textAlign="left">
        <Spacer />
        <Box w="15%" mr="90px">
            <Text fontSize="4xl" fontWeight="600"  >BEST BUY STORE</Text>
            <Button bg='black' variant='solid' color="white" mt="20px">VIEW ALL</Button>
        </Box>
            {/* <Flex w="90%"> */}
            <Spacer />
            <Box><Image src="https://imagescdn.abof.com/img/app/shopmedia/production/1/13-62-9972.jpg?w=190&auto=format" /></Box>
            <Spacer />
            <Box><Image src="https://imagescdn.abof.com/img/app/shopmedia/production/1/13-62-9974.jpg?w=190&auto=format" /></Box>
            <Spacer />
            <Box><Image src="https://imagescdn.abof.com/img/app/shopmedia/production/1/13-62-9976.jpg?w=190&auto=format" /></Box>
            <Spacer />
            <Box><Image src="https://imagescdn.abof.com/img/app/shopmedia/production/1/13-62-9978.jpg?w=190&auto=format" /></Box>
            <Spacer />
            {/* </Flex> */}
        </Flex>
    {/* </HStack> */}
    {/* </HStack> */}
    </>

    
}