import Sidebar from "./Sidebar";

export default {
  title: "Components/Sidebar",
  component: Sidebar,
  argTypes: {
    title: {
      control: {
        type: "text",
      },
      defaultValue: "My Sidebar",
    },
    items: {
      control: {
        type: "object",
      },
      defaultValue: [
        { id: 1, label: "Item 1", link: "#" },
        { id: 2, label: "Item 2", link: "#" },
        { id: 3, label: "Item 3", link: "#" },
        { id: 4, label: "Item 5", link: "#" },
        { id: 5, label: "Item 6", link: "#" },
        { id: 6, label: "Item 7", link: "#" },
        { id: 7, label: "Item 8", link: "#" },
        { id: 8, label: "Item 9", link: "#" },
        { id: 9, label: "Item 10", link: "#" },
        { id: 10, label: "Item 4", link: "#" },

      ],
    },
  },
};

const Template = (args) => ({
  components: { Sidebar },
  setup() {
    return { args };
  },
  template: '<Sidebar v-bind="args" />',
});

export const Default = Template.bind({});
