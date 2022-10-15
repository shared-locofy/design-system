import React from 'react';
import { styled } from '@storybook/theming';
import { action } from '@storybook/addon-actions';

import { Button } from './Button';
import { Icon } from './Icon';
import { StoryLinkWrapper } from './StoryLinkWrapper';

export default {
  title: 'forms/Button',
  component: Button,
  argTypes: {
    appearance: {
      control: { type: 'select' },
      options: [
        'primary',
        'secondary',
        'tertiary',
        'outline',
        'primaryOutline',
        'secondaryOutline',
      ],
    },
    children: { control: { type: 'text' } },
  },
};

export const Basic = (args) => <Button {...args} />;
Basic.args = { children: 'Submit' };

export const Primary = (args) => <Button {...args} />;
Primary.args = {
  children: 'Submit',
  appearance: 'primary',
};

export const Secondary = (args) => <Button {...args} />;
Secondary.args = {
  children: 'Submit',
  appearance: 'secondary',
};

export const Tertiary = (args) => <Button {...args} />;
Tertiary.args = {
  children: 'Submit',
  appearance: 'tertiary',
};

export const Outline = (args) => <Button {...args} />;
Outline.args = {
  children: 'Submit',
  appearance: 'outline',
};

export const PrimaryOutline = (args) => <Button {...args} />;
PrimaryOutline.args = {
  children: 'Submit',
  appearance: 'primaryOutline',
};

export const SecondaryOutline = (args) => <Button {...args} />;
SecondaryOutline.args = {
  children: 'Submit',
  appearance: 'secondaryOutline',
};
