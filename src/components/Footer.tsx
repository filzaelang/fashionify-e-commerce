import { Box, Card, CardHeader, Flex, Text } from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Footer() {
    return (
    <>
        <Card align='center' backgroundColor="#f5f6f8">
        <CardHeader>
            <Text fontSize="sm" >Commerce, is powered by 100% renewable electricity.</Text>
        </CardHeader>
        </Card>
        <Box padding="5px">
        <Flex justifyContent="center" alignItems="center" gap="30px" padding="20px">
            <Flex flexDir="column" gap="10px" marginRight="50px">
            <Text color="#eb6d20" fontWeight="bold" fontSize="larger">Fashionify</Text>
            <Text fontSize="sm">Bintaro, South Tangerang, Indonesia</Text>
            <Flex gap="5px">
                <FaFacebook />
                <FaSquareXTwitter />
                <FaLinkedin />
                <IoLogoWhatsapp />
            </Flex>
            </Flex>
            <Flex flexDir="column" gap="5px">
            <Text fontSize="large" fontWeight="semibold">Shop</Text>
            <Text fontSize="small">Gift card</Text>
            <Text fontSize="small">Site map</Text>
            <Text fontSize="small">Polka blog</Text>
            <Text fontSize="small">Login</Text>
            <Text fontSize="small">Sign in</Text>
            </Flex>
            <Flex flexDir="column" gap="5px" marginTop="-24px">
            <Text fontSize="large" fontWeight="semibold">Sell</Text>
            <Text fontSize="small">Sell on polka</Text>
            <Text fontSize="small">Teams</Text>
            <Text fontSize="small">Forums</Text>
            <Text fontSize="small">Affiliates</Text>
            </Flex>
            <Flex flexDir="column" gap="5px">
            <Text fontSize="large" fontWeight="semibold">About</Text>
            <Text fontSize="small">Polka, Inc.</Text>
            <Text fontSize="small">Policies</Text>
            <Text fontSize="small">Investors</Text>
            <Text fontSize="small">Careers</Text>
            <Text fontSize="small">Press</Text>
            </Flex>
            <Flex flexDir="column" gap="5px" marginTop="-50px">
            <Text fontSize="large" fontWeight="semibold">Help</Text>
            <Text fontSize="small">Help Center</Text>
            <Text fontSize="small">Trust and safety</Text>
            <Text fontSize="small">Privacy settings</Text>
            </Flex>
        </Flex>
        <Flex justifyContent="center" alignItems="center" gap="5px" marginTop="20px">
            <Text fontSize="small" marginRight="255px">© 2024 Commerce, Inc.</Text>
        <Flex justifyContent="center" alignItems="center" gap="40px" marginLeft="-80px">
            <Text fontSize="small">Privacy policy</Text>
            <Text fontSize="small">Terms of use</Text>
            <Text fontSize="small">Cookies</Text>
        </Flex>
        </Flex>
        </Box>
    </>
    )
}