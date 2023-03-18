import Avatar from "./Avatar.vue";

export default {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Avatar },
  template: '<avatar :src="src" :alt="alt" />',
});

export const Default = Template.bind({});
Default.args = {
  src: "https://via.placeholder.com/150",
  alt: "Avatar",
};
