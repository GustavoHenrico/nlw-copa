import { Center, Icon, Text } from "native-base";
import { Fontisto } from "@expo/vector-icons";

import Logo from "../assets/logo.svg";
import { Button } from "../components/Button";
import { useAuth } from "../hooks/useAuth";

export function SignIn() {
  const { user, signIn } = useAuth();

  return (
    <Center flex={1} bgColor="gray.900" p={7}>
      <Logo width={212} height={40} />

      <Button
        mt={12}
        type="SECONDARY"
        title="Entrar com o Google"
        onPress={signIn}
        leftIcon={
          <Icon as={Fontisto} name="google" color="white" fontSize="md" />
        }
      />

      <Text color="white" textAlign="center" mt={4}>
        Não utilizamos nenhuma informação além {"\n"} do seu e-mail para criação
        da sua conta.
      </Text>
    </Center>
  );
}
