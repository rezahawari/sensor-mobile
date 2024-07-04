import { ButtonProps, useDisclosure } from "@chakra-ui/react";
import { Interface__SelectOption } from "../../../../constant/interfaces";
import SingleSelectDrawer from "../SingleSelectDrawer";

interface Props extends ButtonProps {
  id: string;
  name: string;
  onConfirm: (inputValue: Interface__SelectOption | undefined) => void;
  inputValue: Interface__SelectOption | undefined;
  withSearch?: boolean;
  optionsDisplay?: "list" | "chip";
  isError?: boolean;
  placement?: "top" | "bottom" | "left" | "right";
  placeholder?: string;
  nonNullable?: boolean;
}

export default function SingleSelectProjectDrawer({
  id,
  name,
  onConfirm,
  inputValue,
  withSearch,
  optionsDisplay,
  isError,
  placement = "bottom",
  placeholder,
  nonNullable,
  ...props
}: Props) {
  //TODO get data company

  const options = [
    {
      value: 1,
      label: "Project A",
    },
    {
      value: 2,
      label: "Project B",
    },
    {
      value: 3,
      label: "Project C",
    },
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <SingleSelectDrawer
      id={id}
      name={name}
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      options={options}
      onConfirm={onConfirm}
      inputValue={inputValue}
      withSearch={withSearch}
      optionsDisplay={optionsDisplay}
      isError={isError}
      placement={placement}
      placeholder={placeholder}
      nonNullable={nonNullable}
      {...props}
    />
  );
}
