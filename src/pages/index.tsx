import { Input } from "@/components/Form/input";
import { Button, Flex, Stack } from "@chakra-ui/react";

export default function SignIn() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
      bg="gray.900"
      color="gray.50"
    >
      <Flex
        as="form"
        w="100%"
        maxW="360"
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">
          <Input name="email" type="email" label="E-mail" />
          <Input name="password" type="password" label="Password" />
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
