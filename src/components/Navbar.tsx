import { Box, Button, Flex, Input, InputGroup, InputLeftElement, InputRightElement, Select, Text } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuMessagesSquare } from "react-icons/lu";

export default function Navbar () {
    return (
        <>
        <Box backgroundColor="#fff9f3" padding="10px">
            <Flex justifyContent="center" alignItems="center" gap="15px">
                <Text color="#eb6d20" fontWeight="bold" fontSize="larger">Fashionify</Text>
                <InputGroup width="500px">
                    <InputLeftElement
                    width="150px"
                        children={
                            <Select
                                placeholder="All categories"
                                fontSize="small"
                                backgroundColor="#f5f6f8"
                                borderRadius="100px"
                            />
                        }
                    />
                    <Input
                        placeholder="Search anything"
                        fontSize="small"
                        textAlign="center"
                        backgroundColor="#ffffff"
                        borderRadius="100px"
                    />
                    <InputRightElement
                        pointerEvents="none"
                        children={<CiSearch />}
                        marginRight="10px"
                    />
                </InputGroup>
                <Button backgroundColor="#eb6d20" borderRadius="100px" variant='solid' color="white" fontSize="small" _focus={{color:"black"}}>
                    Help
                </Button>
                <Flex justifyContent="center" alignItems="center" gap="5px" cursor="pointer">
                    <FiUser fontSize="20px" />
                    <Text fontSize="small">Account</Text>
                </Flex>
                <Flex justifyContent="center" alignItems="center" gap="5px" cursor="pointer">
                    <IoNotificationsOutline fontSize="20px" />
                    <Text fontSize="small">Notification</Text>
                </Flex>
                <Flex justifyContent="center" alignItems="center" gap="5px" cursor="pointer">
                    <LuMessagesSquare fontSize="20px" />
                    <Text fontSize="small">Message</Text>
                </Flex>
            </Flex>
        </Box>
        </>
    )
}