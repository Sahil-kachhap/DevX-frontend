import { Avatar, Box, Button, Container, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiSecurePaymentFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import termsAndCondition from '../../assets/docs/termsAndCondition.js'

const Founder = () => (
    <Stack direction={["column", "row"]} spacing={['4', '16']} padding={'8'}>
        <VStack>
            <Avatar src='https://media.licdn.com/dms/image/D5603AQHQlgln_yzVkQ/profile-displayphoto-shrink_800_800/0/1673261232487?e=1689811200&v=beta&t=I9yCbaKuOJBZTU9KL9g-RqpH4LLsYEIBmYD2iGA85Kg' boxSize={['40', '48']} />
            <Text children="Co-Founder" opacity={0.7} />
        </VStack>
        <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
            <Heading children="Sahil Kachhap" size={['md', 'xl']} />
            <Text textAlign={['center', 'left']} children="Hi, I am a Software Developer" />
        </VStack>
    </Stack>
);

const VideoPlayer = () => (
    <Box>
        <video autoPlay controls controlsList='nodownload nofullscreen noremoteplayback' disablePictureInPicture disableRemotePlayback></video>
    </Box>
);

const TAndC = ({termsAndCondition}) => (
   <Box>
       <Heading size={'md'} children="Terms and Conditions" textAlign={['center','left']} my="4"/>
       <Box h={'sm'} p="4" overflowY={'scroll'}>
           <Text fontFamily={'heading'} letterSpacing={'widest'} textAlign={['center','left']}>{termsAndCondition}</Text>
           <Heading my={'4'} size={'xs'} children="Refund applicable only for cancellation within 7 days."/>
       </Box>
   </Box>
);

const About = () => {
    return <Container maxW={'container.lg'} padding="16" boxShadow={'lg'}>
        <Heading children="About Us" textAlign={['center', 'left']} />
        <Founder />
        <Stack m={'8'} alignItems={'center'} direction={['column', 'row']}>
            <Text fontFamily={'cursive'} m="8" textAlign={['center', 'left']} children="We are a video streaming platform with some premium courses available only for premium users." />
            <Link to={'/subscribe'}>
                <Button variant={'ghost'} colorScheme="yellow">
                    Checkout Our Plan
                </Button>
            </Link>
        </Stack>
        <VideoPlayer />
        <TAndC termsAndCondition={termsAndCondition}/>
        <HStack my={'4'} p={'4'}>
            <RiSecurePaymentFill />
            <Heading size={'xs'} fontFamily="sans-serif" textTransform={'uppercase'} children="Payment is secured by Razorpay"/>
        </HStack>
    </Container>
}

export default About