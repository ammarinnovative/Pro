import {
  Box,
  Button,
  Img,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
} from '@chakra-ui/react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Topheader from '../../components/Topheader/Topheader';
import layer from '../../assets/images/layer.png';
import { AiOutlineSearch } from 'react-icons/ai';
import Card from '../../components/Card/Card';
import { Avatar } from '@chakra-ui/react';
import { AiOutlineDown } from 'react-icons/ai';
import { BsFillCalendarFill } from 'react-icons/bs';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { MdBuild, MdCall, MdSwapVert } from 'react-icons/md';
import Content from '../../components/Content/Content';
import Workcard from "../../components/Workcard/WorkCard";


export default function Project() {
  return (
    <Sidebar>
      <Box height={'96.3vh'} padding={'10px'}>
        <Topheader />
        <Box
          padding={'30px 20px'}
          marginTop={'3rem'}
          borderRadius={'12px'}
          height={'80vh'}
          overflow={'auto'}
          backgroundColor={'rgb(43 62 84)'}
        >
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Stack direction={'row'} gap={'5px'} alignItems={'center'}>
              <Avatar src="https://bit.ly/broken-link" />
              <Box>
                <Text color={'white'}>
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </Text>
                <Text color={'white'}>
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </Text>
              </Box>
            </Stack>
            <Stack
              direction={'row'}
              borderRadius={'6px'}
              padding={'5px'}
              width={'20%'}
              justifyContent={'space-between'}
              alignItems={'center'}
              backgroundColor={'rgb(35 65 95)'}
            >
              <Stack
                direction={'row'}
                gap={'5px'}
                padding={'5px'}
                alignItems={'center'}
              >
                <BsFillCalendarFill color="white" fontSize={'17px'} />
                <Box color={'white'}>
                  <Text fontSize={'15px'}>Aug 14,2023</Text>
                  <Text fontSize={'15px'}>in 2 days</Text>
                </Box>
              </Stack>

              <Text color={'#00b290'}>
                20{' '}
                <Text color={'#c8c4c4'} as={'span'}>
                  Tasks
                </Text>
              </Text>
            </Stack>
          </Stack>
          <Stack
            direction={'row'}
            mt={'25px'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Box
              width={'40px'}
              color={'rgb(0 223 171)'}
              border={'1px solid gray'}
              height={'40px'}
              justifyContent={'center'}
              alignItems={'center'}
              display={'flex'}
              borderRadius={'50%'}
            >
              +2
            </Box>
            <Box
              color={'white'}
              padding={'4px 10px'}
              borderRadius={'10px'}
              border={'1px solid rgb(0 223 171)'}
            >
              74%
            </Box>
          </Stack>
          <Box display={'flex'} overflow={'hidden'} marginTop={'40px'}>
            {Array.from({ length: 10 }, (_, index) => {
              return <Img src={layer} alt="img" />;
            })}
          </Box>
          <Stack width={"100%"} direction={'row'} mt={'20px'} justifyContent={'space-between'}>
            <Text color={'white'}>Keep up to good work!</Text>
            <Stack alignItems={'center'} direction={'row'}>
              <Button _hover={"none"}  border={"1px solid gray"} color={"white"} backgroundColor={"rgb(58 76 96)"}> 
                Filter by <AiOutlineDown fontSize={'20px'} />
              </Button>
              <Button _hover={"none"} border={"1px solid gray"} color={"white"}  backgroundColor={"rgb(58 76 96)"}>
                Sort by <MdSwapVert fontSize={'25px'} />
              </Button>
            </Stack>
          </Stack>
          <Stack direction={"row"}  mt={"30px"}>
          <Workcard title={"Pending"} num={"2"}  />
          <Workcard title={"IN Progress"} num={"4"} />
          <Workcard title={"Done"} num={"4"} />
          </Stack>
        </Box>
      </Box>
    </Sidebar>
  );
}
