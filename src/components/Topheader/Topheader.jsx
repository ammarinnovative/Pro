import React from 'react';
import { Box, Img, Text, Stack, Avatar } from '@chakra-ui/react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Magicpen from '../../assets/images/magicpen.png';
import Icon1 from '../../assets/images/Icon1.png';
import { Link } from 'react-router-dom';
import Icon2 from '../../assets/images/Icon2.png';
import Icon3 from '../../assets/images/Icon3.png';
import Icon4 from '../../assets/images/Icon4.png';

const Topheader = bool => {
  return (
    <Box>
      <Stack direction={'row'} justifyContent={'space-between'}>
        <Box display={'flex'} gap={'15px'}>
          <Box
            width={'40px'}
            borderRadius={'5px'}
            bg={'#2b3e54'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            padding={'9px'}
            border={'1px solid gray'}
            height={'40px'}
          >
            <Link to={'/'}>
            <AiOutlineArrowLeft color="white" />
            </Link>
          </Box>
          <Box color={'white'}>
            <Text fontSize={'19px'} fontWeight={'600'}>
              New Analatytics Dashboard
            </Text>
            <Text fontSize={'14px'}>
              Hello Ahmed,<Text as={'span'}>You have in total</Text>
              <Text as={'span'} color={'#00b290'}>
                {' '}
                20 tasks{' '}
              </Text>
              under this project
            </Text>
          </Box>
        </Box>
        {/* <Box>
          <Text fontSize={'26px'} fontWeight={700} color="white">
            Projects
          </Text>
          <Text fontSize={'15px'} color={'#cbc7c7'}>
            You hava{' '}
            <Text color={'#00b290'} as={'span'}>
              6 active Projects
            </Text>
          </Text>
        </Box> */}
        <Stack
          borderLeftRadius={'30px'}
          borderRightRadius={'30px'}
          paddingX={'20px'}
          width={'600px'}
          justifyContent={{ lg: 'space-between' }}
          direction={'row'}
          border={'1px solid gray'}
        >
          <Box
            display={'flex'}
            backgroundColor={'rgb(36 56 78)'}
            margin={'6px 0'}
            paddingX={'17px'}
            borderLeftRadius={'30px'}
            borderRightRadius={'30px'}
            border={'1px solid gray'}
            gap={'10px'}
            color={'white'}
            alignItems={'center'}
          >
            <Img width={'20px'} src={Magicpen} alt="img" />
            <Text fontSize={'14px'}>Ask me anything</Text>
          </Box>
          <Stack direction={'row'} alignItems={'center'}>
            <Img src={Icon4} />
            <Img src={Icon1} />
            <Img src={Icon2} />
            <Img src={Icon3} />
            <Avatar src="https://bit.ly/broken-link" size={'md'} />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Topheader;
