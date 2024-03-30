import React, { useState } from 'react';
import { Box, Flex, Icon, Link, Text, Stack, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import axios from 'axios';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the backend server endpoint to send the email
      await axios.post('/api/send-email', {
        name: formData.name,
        email: formData.email,
        message: formData.message
      });

      alert('Your message has been sent successfully!');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <Box as="footer" bg="gray.800" color="white" py="6">
      <Flex justifyContent="center" alignItems="center">
        <Text>&copy; 2024 KisanSamridhiBharat. All rights reserved.</Text>
      </Flex>
      <Stack spacing="4" mt="6" textAlign="center">
        <Text>Contact us:</Text>
        <Text>Phone: +91 7702331636</Text>
        <Text>Email: milanatlpu@gmail.com</Text>
        <form onSubmit={handleSubmit}>
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input type="text" name="name" value={formData.name} onChange={handleChange} />
          </FormControl>
          <FormControl id="email" mt="4">
            <FormLabel>Email</FormLabel>
            <Input type="email" name="email" value={formData.email} onChange={handleChange} />
          </FormControl>
          <FormControl id="message" mt="4">
            <FormLabel>Message</FormLabel>
            <Textarea name="message" value={formData.message} onChange={handleChange} />
          </FormControl>
          <Button type="submit" mt="4" colorScheme="blue">Submit</Button>
        </form>
      </Stack>
      <Flex justifyContent="center" alignItems="center" mt="6">
        <Link href="https://www.instagram.com/" target="_blank" mx="2">
          <Icon as={FaInstagram} boxSize="6" />
        </Link>
        <Link href="https://www.linkedin.com/" target="_blank" mx="2">
          <Icon as={FaLinkedin} boxSize="6" />
        </Link>
        <Link href="https://github.com/" target="_blank" mx="2">
          <Icon as={FaGithub} boxSize="6" />
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;
