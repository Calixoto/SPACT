import { Flex, Button, Stack } from '@chakra-ui/react'
import { Input } from '../../components/Form/Input'

export default function SignIn() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.700"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">
          <Input color="white" name="email" type="email" label="E-mail" />
          <Input color="white" name="password" type="password" label="Senha" />
        </Stack>

        <Button type="submit" mt="6" colorScheme="blue" size="lg">Entrar</Button>
      </Flex>
    </Flex>
  )
}
