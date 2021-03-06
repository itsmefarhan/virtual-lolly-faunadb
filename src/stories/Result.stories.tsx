import React from "react"

import { Story, Meta } from "@storybook/react/types-6-0"

import Result, { ResultProps } from "../components/result"

export default {
  title: "Components/Result",
  component: Result,
} as Meta

const Template: Story<ResultProps> = args => <Result {...args} />

export const Primary = Template.bind({})
Primary.args = {
  link: "link_to_lolly",
  from: "abc",
  to: "xyz",
  message: "Gift",
}
