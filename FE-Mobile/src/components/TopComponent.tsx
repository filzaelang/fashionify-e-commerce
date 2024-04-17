import React from 'react'
import { Box, Input, Text, InputField, InputSlot, InputIcon, SearchIcon, VStack, Badge, Button, ButtonText, BadgeText } from "@gluestack-ui/themed"

// icons
import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';


const TopComponent = () => {

    return (
        <>
            <Box padding={"$5"} paddingTop={"$12"} paddingBottom={"$7"} bg='#fff9f3' gap={"$3"}>
                <Box display='flex' flexDirection='row' alignItems='center' justifyContent='space-between'>
                    <Text color='#eb6d20' fontWeight='$bold'>E-Commerce</Text>
                    <Box display='flex' flexDirection='row' alignItems='center' gap={'$3'}>
                        <Feather name="user" size={24} color="black" />
                        <Box>
                            <VStack>
                                <Badge h={22} w={22} bg="#eb6d20" borderRadius="$full" mb={-14} mr={-10} zIndex={1} variant="solid" alignSelf="flex-end"  >
                                    <BadgeText color="$white">2</BadgeText>
                                </Badge>
                                <SimpleLineIcons name="handbag" size={24} color="black" />
                            </VStack>
                        </Box>
                    </Box>
                </Box>
                <Box display='flex' flexDirection='row' alignItems='center' justifyContent='space-between'>
                    <Feather name="menu" size={24} color="black" />
                    <Box width={"80%"}>
                        <Input variant="rounded" size="md" isDisabled={false} isInvalid={false} isReadOnly={false} >
                            <InputField
                                placeholder='Search anything'
                            />
                            <InputSlot pl="$3" pr={"$3"}>
                                <InputIcon as={SearchIcon} />
                            </InputSlot>
                        </Input>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default TopComponent