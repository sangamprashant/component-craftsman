import { BasicButton } from "../components";


export default {
  component: BasicButton,

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: { control: 'color' },
  },
};

export const FirstStory = {
  args: {
    //👇 The args you need here will depend on your component
    label: 'Hi Prashant',
  },
};

export const Warning = {
  args: {
    primary: true,
    label: 'Delete now',
    backgroundColor: 'red',
  }
};
