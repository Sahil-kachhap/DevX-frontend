import { Box, Button, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import intro from '../../assets/videos/intro.mp4'

const CoursePage = () => {
    const lectureTitle = "Lecture Title";
    const [lectureNumber, setLectureNumber] = useState(0);
    const lectures = [
        {
            _id: 'sahilkachhap',
            title: 'Intro to Flutter Development',
            description: 'Dive into the world of cross platform application development',
            video: {
                url: 'www.google.com',
            }
        },
        {
            _id: 'sahikachhap',
            title: 'Intro to Blockchain Development',
            description: 'Dive into the world of cross platform application development',
            video: {
                url: 'www.google.com',
            }
        },
        {
            _id: 'sailkachhap',
            title: 'Intro to Web Development',
            description: 'Dive into the world of cross platform application development',
            video: {
                url: 'www.google.com',
            }
        }
    ];
    return (
        <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
            <Box>
                <video src={intro} width={'100%'} autoPlay controls controlsList='nodownload nofullscreen noremoteplayback' disablePictureInPicture disableRemotePlayback></video>
                <Heading m={'4'} children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`} />
                <Heading m={'4'} children="Description" />
                <Text m={'4'} children="Description Content will be displayed here" />
            </Box>
            <VStack>
                {
                    lectures.map((item, index) => (
                        <Button onClick={() => setLectureNumber(index)} key={item._id} style={{
                            width: '100%',
                            padding: '1rem',
                            textAlign: 'center',
                            margin: 0,
                            borderBottom: '1px solid rgba(0,0,0,0.2)'
                        }}>
                            <Text noOfLines={'1'}>#{index + 1} {item.title}</Text>
                        </Button>
                    ))
                }
            </VStack>
        </Grid>
    )
}

export default CoursePage