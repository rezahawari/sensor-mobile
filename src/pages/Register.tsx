import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Icon,
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
    <CContainer overflowY={"auto"}>
      <CContainer
        h={"50%"}
        overflow={"hidden"}
        color={lightDarkColor}
        p={5}
        position={"relative"}
        opacity={0}
      ></CContainer>

      <CContainer
        h={"50%"}
        overflowY={"auto"}
        p={6}
        pb={8}
        zIndex={2}
        // borderRadius={"20px 20px 0 0"}
        // bg={lightDarkColor}
      >
        <Text fontSize={24} fontWeight={600}>
          Register
        </Text>
        <Text mb={6} opacity={0.4}>
          Register untuk dahulu untuk menggunakan app
        </Text>

        <CContainer overflowY={"auto"}>
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
            flexShrink={0}
            size={"lg"}
            className="clicky"
            colorScheme="dl"
          >
            Register
          </Button>

          <HStack justify={"space-between"} pt={8} mt={"auto"}>
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
    </CContainer>
  );
}
