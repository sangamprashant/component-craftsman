import { Divider } from "../../components";

export default {
  component: Divider,
  parameters: {
    // layout: "centered",
  },
  tags: ["autodocs"],
};


export const Left ={
  args:{
    tag:"Enter the email",
    position:"left"
  }
}
export const Right ={
  args:{
    tag:"Enter the email",
    position:"right"
  }
}
export const Center ={
  args:{
    tag:"Enter the email",
    position:"center"
  }
}