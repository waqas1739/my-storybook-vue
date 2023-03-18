import Alert from "./Alert.vue";

export default {
  title: "Components/Alert",
  component: Alert,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["info", "success", "warning", "error"],
      },
      defaultValue: "info",
    },
  },
};

const Template = (args) => ({
  components: { Alert },
  setup() {
    return { args };
  },
  template: '<Alert v-bind="args">This is an alert message.</Alert>',
});

export const Info = Template.bind({});
Info.args = {
  type: "info",
};

export const Success = Template.bind({});
Success.args = {
  type: "success",
};

export const Warning = Template.bind({});
Warning.args = {
  type: "warning",
};

export const Error = Template.bind({});
Error.args = {
  type: "error",
};
