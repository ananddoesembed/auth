import { useState } from 'react';
import reactLogo from './assets/react.svg';
import {
  Input,
  FormControl,
  FormLabel,
  Box,
  Container,
  Button,
  HStack,
} from '@chakra-ui/react';
import { FaGoogle, FaTwitter } from 'react-icons/fa';
function App() {
  const [count, setCount] = useState(0);

  return (
    <Container centerContent h='100vh' justifyContent={'center'}>
      <Box w='100%' p={4} borderWidth='1px' borderRadius='lg'>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input placeholder='First name' />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input placeholder='Password' />
        </FormControl>
        <HStack marginTop={3}>
          <Button colorScheme='red' leftIcon={<FaGoogle />}>
            Google
          </Button>
          <Button colorScheme='twitter' leftIcon={<FaTwitter />}>
            Twitter
          </Button>
          <Button marginTop={2} colorScheme='blue'>
            Sign in
          </Button>
        </HStack>
      </Box>
    </Container>
  );
}

export default App;
