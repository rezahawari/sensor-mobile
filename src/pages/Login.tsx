import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Icon,
  Text,
} from "@chakra-ui/react";
import { RiArrowRightSLine } from "@remixicon/react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import StringInput from "../components/dependent/input/StringInput";
import PasswordInput from "../components/dependent/PasswordInput";
import RequiredForm from "../components/form/RequiredForm";
import CContainer from "../components/independent/wrapper/CContainer";
import { useLightDarkColor } from "../constant/colors";
import { iconSize } from "../constant/sizes";

interface Props {
  containerRef: any;
}

export default function Login({ containerRef }: Props) {
  const navigate = useNavigate();

  const formik = useFormik({
    validateOnChange: false,
    initialValues: { username: undefined, password: undefined },
    validationSchema: yup.object().shape({
      username: yup.string().required("Harus diisi"),
      password: yup.string().required("Harus diisi"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);

      navigate("/home");
    },
  });

  // SX
  const lightDarkColor = useLightDarkColor();

  return (
    <CContainer overflowY={"auto"}>
      <CContainer
        h={"50%"}
        overflow={"hidden"}
        color={lightDarkColor}
        p={5}
        position={"relative"}
        opacity={0}
      ></CContainer>

      <CContainer h={"50%"} overflowY={"auto"} zIndex={2} pt={6}>
        <Box px={6}>
          <Text fontSize={24} fontWeight={600}>
            Welcome
          </Text>
          <Text mb={6} opacity={0.4}>
            Login untuk melanjutkan
          </Text>
        </Box>

        <CContainer px={6} pb={8} overflowY={"auto"}>
          <form id="loginForm" onSubmit={formik.handleSubmit}>
            <FormControl mb={4} isInvalid={!!formik.errors.username}>
              <FormLabel>
                Username
                <RequiredForm />
              </FormLabel>
              <StringInput
                name="username"
                placeholder="sulenq_wazawsky"
                onChange={formik.handleChange}
                value={formik.values.username || ""}
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
                inputValue={formik.values.password || ""}
              />
              <FormErrorMessage>
                {formik.errors.username as string}
              </FormErrorMessage>
            </FormControl>
          </form>

          <Button
            type="submit"
            form="loginForm"
            flexShrink={0}
            size={"lg"}
            className="clicky"
            colorScheme="dl"
          >
            Login
          </Button>

          <HStack justify={"space-between"} pt={8} mt={"auto"}>
            <Button
              type="submit"
              form="loginForm"
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
    </CContainer>
  );
}
