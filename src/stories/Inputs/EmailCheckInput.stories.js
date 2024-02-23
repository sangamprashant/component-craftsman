import { EmailCheckInput } from "../../components";

export default {
  component: EmailCheckInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Placeholder ={
  args:{
    placeholder:"Enter the email"
  }
}

export const ValueEntered = {
  args: {
    value: 'sample@gmail.com',
  }
};


