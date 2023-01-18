import { Box, Image, Spacer, HStack } from "@chakra-ui/react";

export default function MidFirst(){
    return <HStack w="100%" m="auto" justify="center" p="80px 80px 20px 80px" bg="rgb(235, 249, 255)">
        <Box >
        <Image src="https://imagescdn.abof.com/img/app/shopmedia/production/1/13-62-10521.jpg?w=501.27000000000004&auto=format" />
        </Box>
        <Spacer />
        <Box ><Image src="https://imagescdn.abof.com/img/app/shopmedia/production/1/13-62-10522.jpg?w=1002.5400000000001&auto=format"   /></Box>
    </HStack>

    
}