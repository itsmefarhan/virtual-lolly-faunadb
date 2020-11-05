import React from "react"

import { Story, Meta } from "@storybook/react/types-6-0"

import Banner from "../components/banner"

export default {
  title: "Components/Banner",
  component: Banner,
} as Meta

const Template: Story = args => <Banner {...args} />

export const Primary = Template.bind({})
