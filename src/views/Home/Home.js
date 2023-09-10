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
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Topheader from '../../components/Topheader/Topheader';
import { useRef } from 'react';
import layer from '../../assets/images/layer.png';
import { AiOutlineSearch } from 'react-icons/ai';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import Card from '../../components/Card/Card';
import { useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import { Radio, RadioGroup } from '@chakra-ui/react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BiChevronDown } from 'react-icons/bi';
import { MdSwapVert } from 'react-icons/md';
import Content from '../../components/Content/Content';

export default function Home() {
  const [value, setValue] = useState('1');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

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
            <Stack spacing={'4'} width={'40%'}>
              <InputGroup position={'relative'} borderRadius={'20px'}>
                <Input
                  type="text"
                  color={'white'}
                  borderRadius={'20px'}
                  _placeholder={{ color: 'white' }}
                  backgroundColor={'#415165'}
                  placeholder="Search"
                />
                <InputLeftElement pointerEvents="none">
                  <AiOutlineSearch color="white" fontSize={'22px'} />
                </InputLeftElement>
                <InputRightElement>
                  <AiOutlineCloseCircle
                    cursor={'pointer'}
                    fontSize={'23px'}
                    color="rgb(0 143 131)"
                  />
                </InputRightElement>
              </InputGroup>
            </Stack>
            <Stack alignItems={'center'} direction={'row'}>
              <Menu>
                <MenuButton
                  color="white"
                  backgroundColor="rgb(59 75 97)"
                  as={Button}
                  rightIcon={<MdSwapVert fontsize="20px" />}
                >
                  Sort by
                </MenuButton>
                <MenuList bg=" rgb(8 28 49)" color="white">
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>
                  <MenuItem>Delete</MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
              </Menu>
              <Menu>
                <MenuButton
                  _hover="none"
                  color="white"
                  backgroundColor="rgb(59 75 97)"
                  as={Button}
                  rightIcon={<MdSwapVert fontsize="20px" />}
                >
                  Sort by
                </MenuButton>
                <MenuList bg=" rgb(8 28 49)" color="white">
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>
                  <MenuItem>Delete</MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
                <Button onClick={onOpen}>Open Drawer</Button>
              </Menu>
            </Stack>
          </Stack>
          <Box display={'flex'} overflow={'hidden'} marginTop={'40px'}>
            {Array.from({ length: 10 }, (_, index) => {
              return <Img src={layer} alt="img" />;
            })}
          </Box>
          <Box
            display={'flex'}
            gap={'20px'}
            justifyContent={'space-between'}
            flexWrap={'wrap'}
            mt={'30px'}
          >
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Box>
        </Box>
      </Box>
      <Drawer
        isOpen={isOpen}
        bg="black"
        placement="right" // or 'left', 'top', 'bottom'
        onClose={onClose}
        style={{ background: 'black' }} // Add custom CSS for background color
        finalFocusRef={btnRef} // Set focus to this element when the Drawer closes
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton /> {/* Button to close the Drawer */}
          <DrawerHeader>Add New Tasks</DrawerHeader>
          <DrawerBody>dsds</DrawerBody>
          <DrawerFooter>
            {/* Buttons or actions related to the content */}
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Sidebar>
  );
}
