import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Icon,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import CContainer from "../components/independent/wrapper/CContainer";
import { useLightDarkColor } from "../constant/colors";
import RequiredForm from "../components/form/RequiredForm";
import { useFormik } from "formik";
import * as yup from "yup";
import PasswordInput from "../components/dependent/PasswordInput";
import { RiArrowRightSLine } from "@remixicon/react";
import { iconSize } from "../constant/sizes";

interface Props {
  containerRef: any;
}

export default function Login({ containerRef }: Props) {
  const formik = useFormik({
    validateOnChange: false,
    initialValues: { username: undefined, password: undefined },
    validationSchema: yup.object().shape({
      username: yup.string().required("Harus diisi"),
      password: yup.string().required("Harus diisi"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
    },
  });

  // SX
  const lightDarkColor = useLightDarkColor();

  return (
    <CContainer>
      <CContainer
        bg={"p.500"}
        color={lightDarkColor}
        p={5}
        position={"relative"}
        overflow={"hidden"}
      >
        <Image
          src="/logoWhite.svg"
          w={"100%"}
          position={"absolute"}
          opacity={0.05}
          right={0}
          top={"70px"}
        />
        <Image
          src="/logoWhite.svg"
          w={"100%"}
          position={"absolute"}
          opacity={0.05}
          right={"-100px"}
          top={"60px"}
        />
        <CContainer flex={0} my={"auto"} pb={16} align={"center"}>
          <Image
            src="/logoWhiteBg.png"
            w={"40px"}
            borderRadius={"full"}
            mb={4}
          />
          <Text fontSize={24} fontWeight={600}>
            Welcome
          </Text>
          <Text>Login untuk melanjutkan</Text>
        </CContainer>
      </CContainer>

      <CContainer p={5} pb={8} flex={0}>
        <form>
          <FormControl mb={4} isInvalid={!!formik.errors.username}>
            <FormLabel>
              Username
              <RequiredForm />
            </FormLabel>
            <Input
              name="username"
              placeholder="sulenq_wazawsky"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
            <FormErrorMessage>
              {formik.errors.username as string}
            </FormErrorMessage>
          </FormControl>

          <FormControl mb={6} isInvalid={!!formik.errors.username}>
            <FormLabel>
              Password
              <RequiredForm />
            </FormLabel>

            <PasswordInput
              name="password"
              placeholder="********"
              onChangeSetter={(inputValue) => {
                formik.setFieldValue("password", inputValue);
              }}
              inputValue={formik.values.password}
            />
            <FormErrorMessage>
              {formik.errors.username as string}
            </FormErrorMessage>
          </FormControl>
        </form>

        <Button size={"lg"} className="btn-ap clicky" colorScheme="ap">
          Login
        </Button>

        <HStack justify={"space-between"} mt={16}>
          <Button
            size={"sm"}
            colorScheme="ap"
            variant={"ghost"}
            className="clicky"
          >
            Forgot Password
          </Button>
          <Button
            size={"sm"}
            colorScheme="ap"
            variant={"ghost"}
            className="clicky"
            rightIcon={<Icon as={RiArrowRightSLine} fontSize={iconSize} />}
            pr={2}
            onClick={() => {
              if (containerRef.current) {
                containerRef.current.scrollBy({
                  left: 400,
                  behavior: "smooth",
                });
              }
            }}
          >
            Register
          </Button>
        </HStack>
      </CContainer>
    </CContainer>
  );
}
