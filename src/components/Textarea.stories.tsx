import React from 'react';
import { action } from '@storybook/addon-actions';

import { Textarea } from './Textarea';

const onChange = action('change');

export default {
  title: 'forms/Textarea',
  component: Textarea,
};

export const Default = (args) => <Textarea {...args} />;
Default.args = {
  id: 'Basic',
  label: 'label',
  value: 'value',
  orientation: 'horizontal',
  hideLabel: false,
};
