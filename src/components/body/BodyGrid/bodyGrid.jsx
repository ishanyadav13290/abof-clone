import { Box, Center, Text, Grid, GridItem, Image } from "@chakra-ui/react";
import { GridImgs } from "../../../data/db";

export default function BodyGrid(){
    return <Box p="50px">
        <Center><Text fontSize="2xl" fontWeight={700}>Top Categories</Text></Center>
        <Grid templateColumns='repeat(5, 1fr)' gap={6} m="auto" mt="10" width="90%">
        {GridImgs.map((elem,i)=>{
            return <GridItem key={i} m="auto"><Image src={elem} width="95%" /></GridItem>
        })}
</Grid>
    </Box>
}