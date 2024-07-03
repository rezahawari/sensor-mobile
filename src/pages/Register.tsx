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
import { RiArrowLeftSLine } from "@remixicon/react";
import { useFormik } from "formik";
import * as yup from "yup";
import PasswordInput from "../components/dependent/PasswordInput";
import RequiredForm from "../components/form/RequiredForm";
import CContainer from "../components/independent/wrapper/CContainer";
import { useLightDarkColor } from "../constant/colors";
import { iconSize } from "../constant/sizes";

interface Props {
  containerRef: any;
}

export default function Register({ containerRef }: Props) {
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
        color={lightDarkColor}
        p={5}
        position={"relative"}
        overflow={"hidden"}
      >
        {/* <Image
          src="/logoWhite.svg"
          w={"100%"}
          position={"absolute"}
          opacity={0.05}
          left={0}
          top={"70px"}
          transform={"scaleX(-1)"}
        />
        <Image
          src="/logoWhite.svg"
          w={"100%"}
          position={"absolute"}
          opacity={0.05}
          left={"-100px"}
          top={"60px"}
          transform={"scaleX(-1)"}
        /> */}
        <Image
          src="/logoWhite.svg"
          w={"140px"}
          position={"absolute"}
          opacity={0.05}
          left={"50%"}
          top={"70px"}
          transform={"translateX(-50%)"}
        />
        <CContainer flex={0} my={"auto"} pb={16} align={"center"}>
          <Image
            src="/logoWhiteBg.png"
            w={"40px"}
            borderRadius={"full"}
            mb={4}
          />
          <Text fontSize={24} fontWeight={600}>
            Register
          </Text>
          <Text>Isi semua form untuk register</Text>
        </CContainer>
      </CContainer>

      <CContainer
        p={6}
        pb={8}
        flex={0}
        borderRadius={"0 20px 0 0"}
        bg={lightDarkColor}
      >
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
          Register
        </Button>

        <HStack justify={"space-between"} mt={16}>
          <Button
            size={"sm"}
            colorScheme="ap"
            variant={"ghost"}
            className="clicky"
            leftIcon={<Icon as={RiArrowLeftSLine} fontSize={iconSize} />}
            pl={2}
            onClick={() => {
              if (containerRef.current) {
                containerRef.current.scrollBy({
                  left: -400,
                  behavior: "smooth",
                });
              }
            }}
          >
            Login
          </Button>
        </HStack>
      </CContainer>
    </CContainer>
  );
}
