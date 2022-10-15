import React from 'react';
import { action } from '@storybook/addon-actions';
import { styled } from '@storybook/theming';

import { Input as UnstyledInput, PureInput as UnstyledPureInput } from './Input';
import { Link } from './Link';

const onChange = action('change');

export default {
  title: 'forms/Input',
  component: UnstyledInput,
  argTypes: {
    appearance: { control: { type: 'select' }, options: ['default', 'tertiary', 'pill'] },
    orientation: { control: { type: 'select' }, options: ['horizontal', 'vertical'] },
    label: { control: { type: 'text' } },
    placeholder: { control: { type: 'text' } },
  },
};

export const Template = (args) => <Input onChange={onChange} {...args} />;
Template.args = {
  id: 'Basic',
  label: 'Email',
  placeholder: 'Enter your email',
  appearance: 'default',
  orientation: 'vertical',
  hideLabel: false,
};
Template.storyName = 'Vertical';

export const Horizontal = Template.bind({});
Horizontal.args = {
  id: 'Basic',
  label: 'Email',
  placeholder: 'Enter your email',
  appearance: 'default',
  orientation: 'horizontal',
  hideLabel: false,
};

export const Pill = Template.bind({});
Pill.args = {
  id: 'Basic',
  label: 'Email',
  placeholder: 'Enter your email',
  appearance: 'pill',
  orientation: 'vertical',
  hideLabel: false,
};

const Input = styled(UnstyledInput)`
  padding-top: 1em;
`;
