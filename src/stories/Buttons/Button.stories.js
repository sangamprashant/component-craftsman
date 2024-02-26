import { Button } from "../../components";

export default {
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const Both = {
  args: {
    icon: "df",
    label: "Label",
  },
};

export const Icon = {
  args: {
    icon: "df",
  },
};

export const Lable = {
  args: {
    label: "Label",
  },
};
