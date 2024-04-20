import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Divider, Flex, Heading, Image, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";

export default function TabSeller () {
    return (
    <>
        <Tabs padding="5px">
        <TabList>
            <Tab width="50%" _selected={{ borderBottomColor: "#eb6d20", color:"#eb6d20"}} fontWeight="semibold">Shop</Tab>
            <Tab width="50%" _selected={{ borderBottomColor: "#eb6d20", color:"#eb6d20"}} fontWeight="semibold">Products</Tab>
            <Tab width="50%" _selected={{ borderBottomColor: "#eb6d20", color:"#eb6d20"}} fontWeight="semibold">Categories</Tab>
        </TabList>

        <TabPanels>
            <TabPanel>
            <Box backgroundColor="#f5f6f8">
            <Image src="https://i.pinimg.com/564x/74/e9/a9/74e9a97d9743fb14d9fc2664b0b0e0de.jpg" margin="auto" width="450px" padding="10px"/>
            </Box>
            <Text color="#eb6d20" fontSize="x-large" fontWeight="semibold" textAlign="center" padding="10px">/ NEW ARRIVALS /</Text>
            <Flex flexWrap="wrap" justifyContent="center" gap="5px">
            <Card maxW='sm' width="350px" boxShadow="md">
            <CardBody>
                <Image
                src='https://i.pinimg.com/564x/15/35/37/1535379e07b4b8a1dbf04a288763a71d.jpg'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                <Heading size='md' fontWeight="semibold" textAlign="justify">Front Pocket Solid Corduroy Shirt M Silk blue</Heading>
                <Text fontSize="small" fontWeight="thin" textAlign="justify">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus quibusdam ducimus, eaque possimus labore eligendi earum unde atque, facilis aut modi.
                </Text>
                <Text color='#eb6d20' fontSize='2xl'>
                    $450
                </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                <Button variant='solid' backgroundColor="#eb6d20" color="white" _focus={{color:"black"}} _hover={{color:"black"}}>
                    Buy now
                </Button>
                <Button variant='ghost' colorScheme='orange'>
                    Add to cart
                </Button>
                </ButtonGroup>
            </CardFooter>
            </Card>
            <Card maxW='sm' width="350px">
            <CardBody>
                <Image
                src='https://i.pinimg.com/564x/2a/9d/00/2a9d0056444682b5b70522963008d43e.jpg'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                <Heading size='md' fontWeight="semibold" textAlign="justify">Men's Long Sleeved Denim Shirt Casual Cotton Shirt Jacket Blue-M</Heading>
                <Text fontSize="small" fontWeight="thin" textAlign="justify">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus quibusdam ducimus, eaque possimus labore eligendi earum unde atque, facilis aut modi.
                </Text>
                <Text color='#eb6d20' fontSize='2xl'>
                    $450
                </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                <Button variant='solid' backgroundColor="#eb6d20" color="white" _focus={{color:"black"}} _hover={{color:"black"}}>
                    Buy now
                </Button>
                <Button variant='ghost' colorScheme='orange'>
                    Add to cart
                </Button>
                </ButtonGroup>
            </CardFooter>
            </Card>
            <Card maxW='sm' width="350px">
            <CardBody>
                <Image
                src='https://i.pinimg.com/564x/11/50/4f/11504fedd10f0f3dd161442f923a29b6.jpg'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                <Heading size='md' fontWeight="semibold" textAlign="justify">Fashion Autumn Cotton Oxford Shirt Men Long Sleeve</Heading>
                <Text fontSize="small" fontWeight="thin" textAlign="justify">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus quibusdam ducimus, eaque possimus labore eligendi earum unde atque, facilis aut modi.
                </Text>
                <Text color='#eb6d20' fontSize='2xl'>
                    $450
                </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                <Button variant='solid' backgroundColor="#eb6d20" color="white" _focus={{color:"black"}} _hover={{color:"black"}}>
                    Buy now
                </Button>
                <Button variant='ghost' colorScheme='orange'>
                    Add to cart
                </Button>
                </ButtonGroup>
            </CardFooter>
            </Card>
            <Card maxW='sm' width="350px">
            <CardBody>
                <Image
                src='https://i.pinimg.com/564x/48/2f/c1/482fc16d465e165489d47e0a2ca98a15.jpg'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                <Heading size='md' fontWeight="semibold" textAlign="justify">Autumn Winter Men Fleece Warm Shirt Male</Heading>
                <Text fontSize="small" fontWeight="thin" textAlign="justify">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus quibusdam ducimus, eaque possimus labore eligendi earum unde atque, facilis aut modi.
                </Text>
                <Text color='#eb6d20' fontSize='2xl'>
                    $450
                </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                <Button variant='solid' backgroundColor="#eb6d20" color="white" _focus={{color:"black"}} _hover={{color:"black"}}>
                    Buy now
                </Button>
                <Button variant='ghost' colorScheme='orange'>
                    Add to cart
                </Button>
                </ButtonGroup>
            </CardFooter>
            </Card>
            <Card maxW='sm' width="350px">
            <CardBody>
                <Image
                src='https://i.pinimg.com/564x/67/c3/66/67c366334d8cdbc66342ce702fa227f4.jpg'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                <Heading size='md' fontWeight="semibold" textAlign="justify">Casual Long-Sleeved Lapel Corduroy Shirt</Heading>
                <Text fontSize="small" fontWeight="thin" textAlign="justify">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus quibusdam ducimus, eaque possimus labore eligendi earum unde atque, facilis aut modi.
                </Text>
                <Text color='#eb6d20' fontSize='2xl'>
                    $450
                </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                <Button variant='solid' backgroundColor="#eb6d20" color="white" _focus={{color:"black"}} _hover={{color:"black"}}>
                    Buy now
                </Button>
                <Button variant='ghost' colorScheme='orange'>
                    Add to cart
                </Button>
                </ButtonGroup>
            </CardFooter>
            </Card>
            <Card maxW='sm' width="350px">
            <CardBody>
                <Image
                src='https://i.pinimg.com/564x/f1/4c/4e/f14c4e608bba40c9a41b66296bd0e858.jpg'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                <Heading size='md' fontWeight="semibold" textAlign="justify">Japan-inspired Spring And Autumn Fashion Brand Men's</Heading>
                <Text fontSize="small" fontWeight="thin" textAlign="justify">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus quibusdam ducimus, eaque possimus labore eligendi earum unde atque, facilis aut modi.
                </Text>
                <Text color='#eb6d20' fontSize='2xl'>
                    $450
                </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                <Button variant='solid' backgroundColor="#eb6d20" color="white" _focus={{color:"black"}} _hover={{color:"black"}}>
                    Buy now
                </Button>
                <Button variant='ghost' colorScheme='orange'>
                    Add to cart
                </Button>
                </ButtonGroup>
            </CardFooter>
            </Card>
            </Flex>
            <Card align='center' marginTop="20px" backgroundColor="#fcf8f7">
            <CardHeader>
            <Text color="#eb6d20" fontSize="x-large" fontWeight="semibold">/ SHOP NOTICE /</Text>
            </CardHeader>
            <CardBody>
                <Text textAlign="justify" fontWeight="thin">Welcome to my shop! Please follow us, the shop daily new products. You can chat with us if you have any questions. Happy shopping!</Text>
            </CardBody>
            </Card>
            </TabPanel>
            <TabPanel>
            <Flex flexWrap="wrap" justifyContent="center" gap="5px">
            <Card maxW='sm' width="350px" boxShadow="md">
            <CardBody>
                <Image
                src='https://i.pinimg.com/564x/15/35/37/1535379e07b4b8a1dbf04a288763a71d.jpg'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                <Heading size='md' fontWeight="semibold" textAlign="justify">Front Pocket Solid Corduroy Shirt M Silk blue</Heading>
                <Text fontSize="small" fontWeight="thin" textAlign="justify">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus quibusdam ducimus, eaque possimus labore eligendi earum unde atque, facilis aut modi.
                </Text>
                <Text color='#eb6d20' fontSize='2xl'>
                    $450
                </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                <Button variant='solid' backgroundColor="#eb6d20" color="white" _focus={{color:"black"}} _hover={{color:"black"}}>
                    Buy now
                </Button>
                <Button variant='ghost' colorScheme='orange'>
                    Add to cart
                </Button>
                </ButtonGroup>
            </CardFooter>
            </Card>
            <Card maxW='sm' width="350px">
            <CardBody>
                <Image
                src='https://i.pinimg.com/564x/2a/9d/00/2a9d0056444682b5b70522963008d43e.jpg'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                <Heading size='md' fontWeight="semibold" textAlign="justify">Men's Long Sleeved Denim Shirt Casual Cotton Shirt Jacket Blue-M</Heading>
                <Text fontSize="small" fontWeight="thin" textAlign="justify">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus quibusdam ducimus, eaque possimus labore eligendi earum unde atque, facilis aut modi.
                </Text>
                <Text color='#eb6d20' fontSize='2xl'>
                    $450
                </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                <Button variant='solid' backgroundColor="#eb6d20" color="white" _focus={{color:"black"}} _hover={{color:"black"}}>
                    Buy now
                </Button>
                <Button variant='ghost' colorScheme='orange'>
                    Add to cart
                </Button>
                </ButtonGroup>
            </CardFooter>
            </Card>
            <Card maxW='sm' width="350px">
            <CardBody>
                <Image
                src='https://i.pinimg.com/564x/11/50/4f/11504fedd10f0f3dd161442f923a29b6.jpg'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                <Heading size='md' fontWeight="semibold" textAlign="justify">Fashion Autumn Cotton Oxford Shirt Men Long Sleeve</Heading>
                <Text fontSize="small" fontWeight="thin" textAlign="justify">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus quibusdam ducimus, eaque possimus labore eligendi earum unde atque, facilis aut modi.
                </Text>
                <Text color='#eb6d20' fontSize='2xl'>
                    $450
                </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                <Button variant='solid' backgroundColor="#eb6d20" color="white" _focus={{color:"black"}} _hover={{color:"black"}}>
                    Buy now
                </Button>
                <Button variant='ghost' colorScheme='orange'>
                    Add to cart
                </Button>
                </ButtonGroup>
            </CardFooter>
            </Card>
            <Card maxW='sm' width="350px">
            <CardBody>
                <Image
                src='https://i.pinimg.com/564x/48/2f/c1/482fc16d465e165489d47e0a2ca98a15.jpg'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                <Heading size='md' fontWeight="semibold" textAlign="justify">Autumn Winter Men Fleece Warm Shirt Male</Heading>
                <Text fontSize="small" fontWeight="thin" textAlign="justify">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus quibusdam ducimus, eaque possimus labore eligendi earum unde atque, facilis aut modi.
                </Text>
                <Text color='#eb6d20' fontSize='2xl'>
                    $450
                </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                <Button variant='solid' backgroundColor="#eb6d20" color="white" _focus={{color:"black"}} _hover={{color:"black"}}>
                    Buy now
                </Button>
                <Button variant='ghost' colorScheme='orange'>
                    Add to cart
                </Button>
                </ButtonGroup>
            </CardFooter>
            </Card>
            <Card maxW='sm' width="350px">
            <CardBody>
                <Image
                src='https://i.pinimg.com/564x/67/c3/66/67c366334d8cdbc66342ce702fa227f4.jpg'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                <Heading size='md' fontWeight="semibold" textAlign="justify">Casual Long-Sleeved Lapel Corduroy Shirt</Heading>
                <Text fontSize="small" fontWeight="thin" textAlign="justify">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus quibusdam ducimus, eaque possimus labore eligendi earum unde atque, facilis aut modi.
                </Text>
                <Text color='#eb6d20' fontSize='2xl'>
                    $450
                </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                <Button variant='solid' backgroundColor="#eb6d20" color="white" _focus={{color:"black"}} _hover={{color:"black"}}>
                    Buy now
                </Button>
                <Button variant='ghost' colorScheme='orange'>
                    Add to cart
                </Button>
                </ButtonGroup>
            </CardFooter>
            </Card>
            <Card maxW='sm' width="350px">
            <CardBody>
                <Image
                src='https://i.pinimg.com/564x/f1/4c/4e/f14c4e608bba40c9a41b66296bd0e858.jpg'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                <Heading size='md' fontWeight="semibold" textAlign="justify">Japan-inspired Spring And Autumn Fashion Brand Men's</Heading>
                <Text fontSize="small" fontWeight="thin" textAlign="justify">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus quibusdam ducimus, eaque possimus labore eligendi earum unde atque, facilis aut modi.
                </Text>
                <Text color='#eb6d20' fontSize='2xl'>
                    $450
                </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                <Button variant='solid' backgroundColor="#eb6d20" color="white" _focus={{color:"black"}} _hover={{color:"black"}}>
                    Buy now
                </Button>
                <Button variant='ghost' colorScheme='orange'>
                    Add to cart
                </Button>
                </ButtonGroup>
            </CardFooter>
            </Card>
            </Flex>
            </TabPanel>
            <TabPanel>
            <Text color="#eb6d20" fontSize="x-large" fontWeight="semibold" textAlign="center" padding="10px">/ MEN'S SHIRTS /</Text>
            <Flex flexWrap="wrap" justifyContent="center" gap="5px">
            <Card maxW='sm' width="350px" boxShadow="md">
            <CardBody>
                <Image
                src='https://i.pinimg.com/564x/15/35/37/1535379e07b4b8a1dbf04a288763a71d.jpg'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                <Heading size='md' fontWeight="semibold" textAlign="justify">Front Pocket Solid Corduroy Shirt M Silk blue</Heading>
                <Text fontSize="small" fontWeight="thin" textAlign="justify">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus quibusdam ducimus, eaque possimus labore eligendi earum unde atque, facilis aut modi.
                </Text>
                <Text color='#eb6d20' fontSize='2xl'>
                    $450
                </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                <Button variant='solid' backgroundColor="#eb6d20" color="white" _focus={{color:"black"}} _hover={{color:"black"}}>
                    Buy now
                </Button>
                <Button variant='ghost' colorScheme='orange'>
                    Add to cart
                </Button>
                </ButtonGroup>
            </CardFooter>
            </Card>
            <Card maxW='sm' width="350px">
            <CardBody>
                <Image
                src='https://i.pinimg.com/564x/2a/9d/00/2a9d0056444682b5b70522963008d43e.jpg'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                <Heading size='md' fontWeight="semibold" textAlign="justify">Men's Long Sleeved Denim Shirt Casual Cotton Shirt Jacket Blue-M</Heading>
                <Text fontSize="small" fontWeight="thin" textAlign="justify">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus quibusdam ducimus, eaque possimus labore eligendi earum unde atque, facilis aut modi.
                </Text>
                <Text color='#eb6d20' fontSize='2xl'>
                    $450
                </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                <Button variant='solid' backgroundColor="#eb6d20" color="white" _focus={{color:"black"}} _hover={{color:"black"}}>
                    Buy now
                </Button>
                <Button variant='ghost' colorScheme='orange'>
                    Add to cart
                </Button>
                </ButtonGroup>
            </CardFooter>
            </Card>
            <Card maxW='sm' width="350px">
            <CardBody>
                <Image
                src='https://i.pinimg.com/564x/11/50/4f/11504fedd10f0f3dd161442f923a29b6.jpg'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                <Heading size='md' fontWeight="semibold" textAlign="justify">Fashion Autumn Cotton Oxford Shirt Men Long Sleeve</Heading>
                <Text fontSize="small" fontWeight="thin" textAlign="justify">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus quibusdam ducimus, eaque possimus labore eligendi earum unde atque, facilis aut modi.
                </Text>
                <Text color='#eb6d20' fontSize='2xl'>
                    $450
                </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                <Button variant='solid' backgroundColor="#eb6d20" color="white" _focus={{color:"black"}} _hover={{color:"black"}}>
                    Buy now
                </Button>
                <Button variant='ghost' colorScheme='orange'>
                    Add to cart
                </Button>
                </ButtonGroup>
            </CardFooter>
            </Card>
            <Card maxW='sm' width="350px">
            <CardBody>
                <Image
                src='https://i.pinimg.com/564x/48/2f/c1/482fc16d465e165489d47e0a2ca98a15.jpg'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                <Heading size='md' fontWeight="semibold" textAlign="justify">Autumn Winter Men Fleece Warm Shirt Male</Heading>
                <Text fontSize="small" fontWeight="thin" textAlign="justify">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus quibusdam ducimus, eaque possimus labore eligendi earum unde atque, facilis aut modi.
                </Text>
                <Text color='#eb6d20' fontSize='2xl'>
                    $450
                </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                <Button variant='solid' backgroundColor="#eb6d20" color="white" _focus={{color:"black"}} _hover={{color:"black"}}>
                    Buy now
                </Button>
                <Button variant='ghost' colorScheme='orange'>
                    Add to cart
                </Button>
                </ButtonGroup>
            </CardFooter>
            </Card>
            <Card maxW='sm' width="350px">
            <CardBody>
                <Image
                src='https://i.pinimg.com/564x/67/c3/66/67c366334d8cdbc66342ce702fa227f4.jpg'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                <Heading size='md' fontWeight="semibold" textAlign="justify">Casual Long-Sleeved Lapel Corduroy Shirt</Heading>
                <Text fontSize="small" fontWeight="thin" textAlign="justify">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus quibusdam ducimus, eaque possimus labore eligendi earum unde atque, facilis aut modi.
                </Text>
                <Text color='#eb6d20' fontSize='2xl'>
                    $450
                </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                <Button variant='solid' backgroundColor="#eb6d20" color="white" _focus={{color:"black"}} _hover={{color:"black"}}>
                    Buy now
                </Button>
                <Button variant='ghost' colorScheme='orange'>
                    Add to cart
                </Button>
                </ButtonGroup>
            </CardFooter>
            </Card>
            <Card maxW='sm' width="350px">
            <CardBody>
                <Image
                src='https://i.pinimg.com/564x/f1/4c/4e/f14c4e608bba40c9a41b66296bd0e858.jpg'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                <Heading size='md' fontWeight="semibold" textAlign="justify">Japan-inspired Spring And Autumn Fashion Brand Men's</Heading>
                <Text fontSize="small" fontWeight="thin" textAlign="justify">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus quibusdam ducimus, eaque possimus labore eligendi earum unde atque, facilis aut modi.
                </Text>
                <Text color='#eb6d20' fontSize='2xl'>
                    $450
                </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                <Button variant='solid' backgroundColor="#eb6d20" color="white" _focus={{color:"black"}} _hover={{color:"black"}}>
                    Buy now
                </Button>
                <Button variant='ghost' colorScheme='orange'>
                    Add to cart
                </Button>
                </ButtonGroup>
            </CardFooter>
            </Card>
            </Flex>
            </TabPanel>
        </TabPanels>
        </Tabs>
    </>
    )
}