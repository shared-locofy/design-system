import React from 'react';
import { action } from '@storybook/addon-actions';

import { Checkbox } from './Checkbox';

const onChange = action('change');

export default {
  title: 'forms/Checkbox',
  component: Checkbox,
  argTypes: {
    appearance: { control: { type: 'select' }, options: ['primary', 'secondary', 'tertiary'] },
    label: { control: { type: 'text' } },
  },
};

export const Template = (args) => <Checkbox {...args} onChange={onChange} />;
Template.args = {
  label: 'Agree',
  hideLabel: false,
};
Template.storyName = 'Default';

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  hideLabel: true,
};

export const Checked = Template.bind({});
Checked.args = {
  hideLabel: true,
  checked: true,
};

export const CheckedLabel = Template.bind({});
CheckedLabel.args = {
  hideLabel: false,
  checked: true,
};
