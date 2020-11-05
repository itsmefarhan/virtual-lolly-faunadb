import React from "react"

import { Story, Meta } from "@storybook/react/types-6-0"

import { Button, ButtonProps } from "../components/button"

export default {
  title: "Components/Button",
  component: Button,
} as Meta

const Template: Story<ButtonProps> = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: "Click Me",
  onClickFunc: () => console.log("clicked"),
}
