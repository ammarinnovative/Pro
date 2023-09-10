import { Box, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { BiMessageSquareDetail, BiRightArrowAlt } from 'react-icons/bi';
import { BiMessageRoundedCheck } from 'react-icons/bi';

const Workcard = ({ title, num }) => {
  return (
    <>
      <Box
        padding={'15px'}
        backgroundColor={'rgb(65 81 101)'}
        borderRadius={'10px'}
        width={'32%'}
      >
        <Text fontWeight={'600'} ml={'10px'} fontSize={'18px'} color={'white'}>
          {title}({num})
        </Text>
        <Box
          mt={'10px'}
          borderRadius={'30px'}
          padding={'10px'}
          overflow={'auto'}
          height={'40vh'}
        >
          <Box
            //  bgImage="url('your-background-image.jpg')"
            //  bgSize="cover"
            //  bgPosition="center"
            backgroundColor={'#34506c'}
            borderRadius={'10px'}
            mt={'20px'}
            border={'1px solid gray'}
            padding={'20px 10px'}
          >
            <Stack
              direction={'row'}
              alignItems={'center'}
              width={'100%'}
              justifyContent={'space-between'}
            >
              <Stack direction={'row'} alignItems={'center'}>
                <Box
                  width={'20px'}
                  border={'1px solid gray'}
                  backgroundColor={'#34506c'}
                  borderRadius={'50%'}
                  height={'20px'}
                ></Box>
                <Text color={'white'}>Desin the updated system</Text>
              </Stack>
              <Box
                width={'20px'}
                border={'1px solid gray'}
                display={'flex'}
                mt={'-5px'}
                color={'white'}
                justifyContent={'center'}
                alignItems={'center'}
                borderRadius={'50%'}
                height={'20px'}
              >
                ...
              </Box>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack
                mt={'10px'}
                direction={'row'}
                alignItems={'center'}
                padding={'5px'}
                borderRadius={'10px'}
                width={'fit-content'}
                backgroundColor={'rgb(32 57 82)'}
              >
                <AiTwotoneCalendar fontSize={'18px'} color="white" />
                <Text color={'gray'}>Mon,Aug,2023</Text>
              </Stack>
              <Text color="white">3/10</Text>
            </Stack>
            <Box mt="10px" width="60%" color="black">
            <Box
              width="100%"
              bgGradient="linear(to-r, teal.200, blue.500)"
              borderRadius="5px"
              padding={'5px'}
            ></Box>
          </Box>
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
                <Stack gap={'6px'} direction={'row'}>
                  <Stack direction={'row'}>
                    <BiMessageSquareDetail
                      fontSize={'24px'}
                      cursor={'pointer'}
                      color="white"
                    />
                    <Text color={'gray'}>1</Text>
                  </Stack>
                  <Stack direction={'row'}>
                    <BiMessageRoundedCheck
                      fontSize={'24px'}
                      cursor={'pointer'}
                      color="white"
                    />
                    <Text color={'gray'}>5</Text>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </Box>
          <Box
            backgroundColor={'#34506c'}
            borderRadius={'10px'}
            mt={'20px'}
            border={'1px solid gray'}
            padding={'20px 10px'}
          >
            <Stack
              direction={'row'}
              alignItems={'center'}
              width={'100%'}
              justifyContent={'space-between'}
            >
              <Stack direction={'row'} alignItems={'center'}>
                <Box
                  width={'20px'}
                  border={'1px solid gray'}
                  backgroundColor={'#34506c'}
                  borderRadius={'50%'}
                  height={'20px'}
                ></Box>
                <Text color={'white'}>Desin the updated system</Text>
              </Stack>
              <Box
                width={'20px'}
                border={'1px solid gray'}
                display={'flex'}
                mt={'-5px'}
                color={'white'}
                justifyContent={'center'}
                alignItems={'center'}
                borderRadius={'50%'}
                height={'20px'}
              >
                ...
              </Box>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack
                mt={'10px'}
                direction={'row'}
                alignItems={'center'}
                padding={'5px'}
                borderRadius={'10px'}
                width={'fit-content'}
                backgroundColor={'rgb(32 57 82)'}
              >
                <AiTwotoneCalendar fontSize={'18px'} color="white" />
                <Text color={'gray'}>Mon,Aug,2023</Text>
                <Text color="white">3/10</Text>

              </Stack>
            </Stack>
            <Box mt="10px" width="100%" color="black">
            <Box
              width="90%"
              bgGradient="linear(to-r, teal.200, blue.500)"
              borderRadius="5px"
              padding={'5px'}
            ></Box>
          </Box>
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
                <Stack gap={'6px'} direction={'row'}>
                  <Stack direction={'row'}>
                    <BiMessageSquareDetail
                      fontSize={'24px'}
                      cursor={'pointer'}
                      color="white"
                    />
                    <Text color={'gray'}>1</Text>
                  </Stack>
                  <Stack direction={'row'}>
                    <BiMessageRoundedCheck
                      fontSize={'24px'}
                      cursor={'pointer'}
                      color="white"
                    />
                    <Text color={'gray'}>5</Text>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </Box>
          <Box
            backgroundColor={'#34506c'}
            borderRadius={'10px'}
            mt={'20px'}
            border={'1px solid gray'}
            padding={'20px 10px'}
          >
            <Stack
              direction={'row'}
              alignItems={'center'}
              width={'100%'}
              justifyContent={'space-between'}
            >
              <Stack direction={'row'} alignItems={'center'}>
                <Box
                  width={'20px'}
                  border={'1px solid gray'}
                  backgroundColor={'#34506c'}
                  borderRadius={'50%'}
                  height={'20px'}
                ></Box>
                <Text color={'white'}>Desin the updated system</Text>
              </Stack>
              <Box
                width={'20px'}
                border={'1px solid gray'}
                display={'flex'}
                mt={'-5px'}
                color={'white'}
                justifyContent={'center'}
                alignItems={'center'}
                borderRadius={'50%'}
                height={'20px'}
              >
                ...
              </Box>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack
                mt={'10px'}
                direction={'row'}
                alignItems={'center'}
                padding={'5px'}
                borderRadius={'10px'}
                width={'fit-content'}
                backgroundColor={'rgb(32 57 82)'}
              >
                <AiTwotoneCalendar fontSize={'18px'} color="white" />
                <Text color={'gray'}>Mon,Aug,2023</Text>
                <Text color="white">3/10</Text>

              </Stack>
            </Stack>
            <Box mt="10px" width="50%" color="black">
            <Box
              width="100%"
              bgGradient="linear(to-r, teal.200, blue.500)"
              borderRadius="5px"
              padding={'5px'}
            ></Box>
          </Box>
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
                <Stack gap={'6px'} direction={'row'}>
                  <Stack direction={'row'}>
                    <BiMessageSquareDetail
                      fontSize={'24px'}
                      cursor={'pointer'}
                      color="white"
                    />
                    <Text color={'gray'}>1</Text>
                  </Stack>
                  <Stack direction={'row'}>
                    <BiMessageRoundedCheck
                      fontSize={'24px'}
                      cursor={'pointer'}
                      color="white"
                    />
                    <Text color={'gray'}>5</Text>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </Box>
          <Box
            backgroundColor={'#34506c'}
            borderRadius={'10px'}
            mt={'20px'}
            border={'1px solid gray'}
            padding={'20px 10px'}
          >
            <Stack
              direction={'row'}
              alignItems={'center'}
              width={'100%'}
              justifyContent={'space-between'}
            >
              <Stack direction={'row'} alignItems={'center'}>
                <Box
                  width={'20px'}
                  border={'1px solid gray'}
                  backgroundColor={'#34506c'}
                  borderRadius={'50%'}
                  height={'20px'}
                ></Box>
                <Text color={'white'}>Desin the updated system</Text>
              </Stack>
              <Box
                width={'20px'}
                border={'1px solid gray'}
                display={'flex'}
                mt={'-5px'}
                color={'white'}
                justifyContent={'center'}
                alignItems={'center'}
                borderRadius={'50%'}
                height={'20px'}
              >
                ...
              </Box>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack
                mt={'10px'}
                direction={'row'}
                alignItems={'center'}
                padding={'5px'}
                borderRadius={'10px'}
                width={'fit-content'}
                backgroundColor={'rgb(32 57 82)'}
              >
                <AiTwotoneCalendar fontSize={'18px'} color="white" />
                <Text color={'gray'}>Mon,Aug,2023</Text>
                <Text color="white">3/10</Text>
              </Stack>
            </Stack>
            <Box mt="10px" width="100%" color="black">
            <Box
              width="100%"
              bgGradient="linear(to-r, teal.200, blue.500)"
              borderRadius="5px"
              padding={'5px'}
            ></Box>
          </Box>
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
                <Stack gap={'6px'} direction={'row'}>
                  <Stack direction={'row'}>
                    <BiMessageSquareDetail
                      fontSize={'24px'}
                      cursor={'pointer'}
                      color="white"
                    />
                    <Text color={'gray'}>1</Text>
                  </Stack>
                  <Stack direction={'row'}>
                    <BiMessageRoundedCheck
                      fontSize={'24px'}
                      cursor={'pointer'}
                      color="white"
                    />
                    <Text color={'gray'}>5</Text>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Workcard;
