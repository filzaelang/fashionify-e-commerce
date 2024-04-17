import React from 'react'
import { Box, Image, ImageBackground, Text, VStack, View } from '@gluestack-ui/themed'

const Category = () => {
    return (
        <>
            <Box>
                <VStack>
                    <View id='Shoes' height={"$40"} width={"100%"} marginTop={20}>
                        <ImageBackground
                            source={require('../../assets/images/background-categories/Shoes.png')}
                            style={{ flex: 1, justifyContent: "flex-end" }}
                            marginStart={30} marginEnd={30}
                            rounded={"$md"}
                        >
                            <Text
                                color="$black"
                                fontSize={25}
                                fontWeight="$bold"
                                mx={10}
                            >
                                Shoes
                            </Text>
                        </ImageBackground>
                    </View>

                    <View id='T-Shirt' height={"$40"} width={"100%"} marginTop={20}>
                        <ImageBackground
                            source={require('../../assets/images/background-categories/T-Shirt.jpg')}
                            style={{ flex: 1, justifyContent: "flex-end" }}
                            marginStart={30} marginEnd={30}
                            rounded={"$md"}
                        >
                            <Text
                                color="$white"
                                fontSize={25}
                                fontWeight="$bold"
                                mx={10}
                            >
                                T-Shirt
                            </Text>
                        </ImageBackground>
                    </View>

                    <View id='Shirt' height={"$40"} width={"100%"} marginTop={20}>
                        <ImageBackground
                            source={require('../../assets/images/background-categories/Shirt.jpg')}
                            style={{ flex: 1, justifyContent: "flex-end" }}
                            marginStart={30} marginEnd={30}
                            rounded={"$md"}
                        >
                            <Text
                                color="$black"
                                fontSize={25}
                                fontWeight="$bold"
                                mx={10}
                            >
                                Shirt
                            </Text>
                        </ImageBackground>
                    </View>

                    <View id='Men' height={"$40"} width={"100%"} marginTop={20}>
                        <ImageBackground
                            source={require('../../assets/images/background-categories/Shoes.png')}
                            style={{ flex: 1, justifyContent: "flex-end" }}
                            marginStart={30} marginEnd={30}
                            rounded={"$md"}
                        >
                            <Text
                                color="$white"
                                fontSize={25}
                                fontWeight="$bold"
                                mx={10}
                            >
                                Shoes
                            </Text>
                        </ImageBackground>
                    </View>

                    <View id='Women' height={"$40"} width={"100%"} marginTop={20}>
                        <ImageBackground
                            source={require('../../assets/images/background-categories/Shoes.png')}
                            style={{ flex: 1, justifyContent: "flex-end" }}
                            marginStart={30} marginEnd={30}
                            rounded={"$md"}
                        >
                            <Text
                                color="$white"
                                fontSize={25}
                                fontWeight="$bold"
                                mx={10}
                            >
                                Shoes
                            </Text>
                        </ImageBackground>
                    </View>

                    <View id='Other' height={"$40"} width={"100%"} marginTop={20}>
                        <ImageBackground
                            source={require('../../assets/images/background-categories/Shoes.png')}
                            style={{ flex: 1, justifyContent: "flex-end" }}
                            marginStart={30} marginEnd={30}
                            rounded={"$md"}
                        >
                            <Text
                                color="$white"
                                fontSize={25}
                                fontWeight="$bold"
                                mx={10}
                            >
                                Shoes
                            </Text>
                        </ImageBackground>
                    </View>
                </VStack>
            </Box >
        </>
    )
}

export default Category