import { Box, Stack, Text, Avatar, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { MdDateRange } from 'react-icons/md';
import { BiRightArrowAlt } from 'react-icons/bi';

const Card = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = date => {
    setSelectedDate(date);
  };
  return (
    <Box
      padding={'15px'}
      backgroundColor={'rgba(35 65 95)'}
      borderRadius={'15px'}
      width={'32%'}
      border={'1px solid gray'}
    >
      <Stack
        direction={'row'}
        align={'center'}
        justifyContent={'space-between'}
      >
        <Stack alignItems={'center'} direction={'row'}>
          <Avatar src="https://bit.ly/broken-link" alt="img" />
          <Text color={'white'} fontWeight={'600'}>
            New Analytics Dashboard
          </Text>
        </Stack>
        <Box
          borderRadius={'10px'}
          color={'white'}
          padding={'2px 10px'}
          border={'1px solid rgb(0 223 171)'}
        >
          74%
        </Box>
      </Stack>
      <Box mt="10px" width="100%" color="black">
        <Box
          width="70%"
          bgGradient="linear(to-r, teal.200, blue.500)"
          borderRadius="5px"
          padding={'5px'}
        ></Box>
      </Box>
      <Text mt={'20px'} color={'white'}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
        ab?
      </Text>
      <Input type="date" id="date" display={'none'} />
      <Stack
        direction={'row'}
        padding={'10px'}
        alignItems={'center'}
        background={'transparent'}
        opacity={'0.6'}
        justifyContent={'space-between'}
        borderRadius={'20px'}
        backgroundColor={'#192841'}
        width={'100%'}
      >
        <Stack alignItems={'center'} direction={'row'}>
          <label htmlFor="date">
            <MdDateRange cursor={'pointer'} color="white" fontSize={'20px'} />
          </label>
          <Text color={'white'}>21/45/6</Text>
        </Stack>
        <Box>
          <Text color={'white'}>
            <Text color={'rgb(0 223 171)'} as={'span'}>
              20
            </Text>{' '}
            Tasks
          </Text>
        </Box>
      </Stack>
      <Box display={'flex'} justifyContent={'right'}>
        <Stack
          width={'70%'}
          textAlign={'right'}
          margin={'auto'}
          mt={'30px'}
          justifyContent={'space-between'}
          marginRight={'auto'}
          direction={'row'}
          alignItems={'center'}
        >
          <Box
            color={'rgb(0 223 171)'}
            width={'35px'}
            height={'35px'}
            fontSize={'15px'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            borderRadius={'50%'}
            border={'1px solid gray'}
          >
            +2
          </Box>
          <BiRightArrowAlt fontSize={'27px'} cursor={'pointer'} color="white" />
        </Stack>
      </Box>
    </Box>
  );
};

export default Card;
