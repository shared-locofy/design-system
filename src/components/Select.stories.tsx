import React from 'react';
import { action } from '@storybook/addon-actions';
import { styled } from '@storybook/theming';

import { Select } from './Select';

const onChange = action('change');

export default {
  title: 'forms/Select',
  component: Select,
};

export const Template = (args) => <Select {...args} />;
Template.args = {
  value: 'value1',
  options: [
    { label: 'Default', value: 'value1' },
    { label: 'Dog', value: 'value2' },
    { label: 'Mouse', value: 'value3' },
  ],
};
Template.storyName = 'Default';
