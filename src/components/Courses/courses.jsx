import React, { useState } from 'react';
import { Button, Container, HStack, Heading, Image, Input, Stack, Text, VStack } from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import thumbnail from '../../assets/images/logo.jpg';

const Course = ({ views, title, image, id, addToPlaylistHandler, creator, description, lectureCount }) => {
    return (
        <VStack className='course' alignItems={['center', 'flex-start']}>
            <Image src={image} boxSize={'60'} objectFit={'contain'} />
            <Heading textAlign={['center', 'left']} maxW={'200px'} size={'sm'} fontFamily={'sans-serif'} noOfLines={'3'} children={title} />
            <Text noOfLines={2} children={description} />
            <HStack>
                <Text fontWeight={'bold'} textTransform={'uppercase'} children={'Creator'} />
                <Text fontFamily={'body'} textTransform={'uppercase'} children={creator} />
            </HStack>
            <Heading textAlign={'center'} size={'xs'} textTransform={'uppercase'} children={`Lectures - ${lectureCount}`}/>
            <Heading size={'xs'} textTransform={'uppercase'} children={`Views - ${views}`}/>
            <Stack direction={['column', 'row']} alignItems={'center'}>
                <Link to={`/course/${id}`}>
                   <Button colorScheme='yellow'>Watch Now</Button>
                </Link>
                <Button variant={'ghost'} colorScheme='yellow' onClick={() => addToPlaylistHandler(id)}>
                   Add to playlist
                </Button>
            </Stack>
        </VStack>
    );
}

const Courses = () => {
    const [keyword, setKeyword] = useState('');
    const [category, setCategory] = useState('');
    const categories = [
        "Web Development",
        "Mobile App Development",
        "Machine Learning",
        "Data Engineering",
        "Data Science",
        "Blockchain",
    ];
    return (
        <Container minH={'95vh'} maxW={'container.lg'} paddingY={'8'}>
            <Heading children="All Courses" m={'8'} />
            <Input value={keyword} onChange={e => setKeyword(e.target.value)} placeholder="Search a course..." type='text' focusBorderColor='yellow.500' />
            <HStack overflowX={'auto'} paddingY={'8'} css={{
                '&::-webkit-scrollbar': {
                    display: 'none',
                },
            }}>
                {
                    categories.map((item, index) => (
                        <Button key={index} onClick={() => setCategory(item)} minW={'60'}>
                            <Text children={item} />
                        </Button>
                    ))
                }
            </HStack>
            <Stack direction={['column', 'row']} flexWrap={'wrap'} justifyContent={['flex-start', 'space-evenly']} alignItems={['center', 'flex-start']}>
                <Course views="2" title="Flutter" image={thumbnail} id="1" addToPlaylistHandler="" creator="Sahil" description="sample desc" lectureCount="5" />
                <Course views="5" title="Data Analytics" image={thumbnail} id="1" addToPlaylistHandler="" creator="Ankit" description="sample desc" lectureCount="10" />
                <Course views="2" title="Flutter" image={thumbnail} id="1" addToPlaylistHandler="" creator="Sahil" description="sample desc" lectureCount="5" />
                <Course views="2" title="Flutter" image={thumbnail} id="1" addToPlaylistHandler="" creator="Sahil" description="sample desc" lectureCount="5" />
            </Stack>
        </Container>
    )
}

export default Courses