import { useForm } from 'react-hook-form'
import axios from 'axios';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from '@chakra-ui/react'



export default function Postform() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  
  const onSubmit = (data) => {
    const userData = sessionStorage.getItem("token");
    console.log(userData);
    const allData = { ...data, userData: userData }; 
    axios

      .post("http://localhost:4000/schemes/Data", allData)

      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error("Error:", error); 
      });
  };

  return (
    <div style={{display:"flex",justifyContent:"center",textAlign:"center"}}>
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl minW={"sm"} isInvalid={errors.name}>
        <FormLabel htmlFor='name'>scheme name</FormLabel>
        <Input
          id='name'
          placeholder='enter scheme name'
          {...register('name', {
            required: 'name is required',
            minLength: { value: 4, message: 'Minimum length should be 4' },
          })}
        />
          <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      
      </FormControl>
      <FormControl maxW={"sm"} isInvalid={errors.name}>
        <FormLabel htmlFor='state'>State</FormLabel>
        <Input
          id='name'
          placeholder='enter state'
          {...register('state', {
            required: 'state is required',
          })}
        />
          <FormErrorMessage>
          {errors.state && errors.state.message}
        </FormErrorMessage>
      
      </FormControl>
      <FormControl maxW={"sm"} isInvalid={errors.name}>
        <FormLabel htmlFor='type'>type</FormLabel>
        <Input
          id='type'
          placeholder='enter type'
          {...register('type', {
            required: 'type is required',
          })}
        />
          <FormErrorMessage>
          {errors.type && errors.type.message}
        </FormErrorMessage>

        </FormControl>
      <FormControl maxW={"sm"} isInvalid={errors.name}>
        <FormLabel htmlFor='description'>description</FormLabel>
        <Input
          id='description'
          placeholder='enter description'
          {...register('description', {
            required: 'description is required',
          })}
        />
          <FormErrorMessage>
          {errors.description && errors.description.message}
        </FormErrorMessage>
      
      </FormControl>

      <FormControl maxW={"sm"} isInvalid={errors.name}>
        <FormLabel htmlFor='img'>Place image</FormLabel>
        <Input
          placeholder='enter place image'
          {...register('img', {
            required: 'image is required'
          })}
        />
          <FormErrorMessage>
          {errors.img && errors.img.message}
        </FormErrorMessage>
      
      </FormControl>

      <FormControl maxW={"sm"} isInvalid={errors.name}>
        <FormLabel htmlFor='schemeName'> schemeName</FormLabel>
        <Input
          placeholder='enter schemeName'
          {...register('schemeName', {
            required: 'schemeName is required'
          })}
        />
          <FormErrorMessage>
          {errors.schemeName && errors.schemeName.message}
        </FormErrorMessage>
      
      </FormControl>

      <FormControl maxW={"sm"} isInvalid={errors.name}>
        <FormLabel htmlFor='link'>website link</FormLabel>
        <Input
          placeholder='enter website link  '
          {...register('link', {
            required: 'website link is required'
          })}
        />
          <FormErrorMessage>
          {errors.link && errors.link.message}
        </FormErrorMessage>
      
      </FormControl>

      <Button mt={4} colorScheme='blue' isLoading={isSubmitting} type='submit'>
        Submit
      </Button>
    </form>
    </div>

  )
}