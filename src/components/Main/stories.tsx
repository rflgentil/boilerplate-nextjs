import { Story, Meta } from '@storybook/react/types-6-0';

import Main from '.';

export default {
    title: 'Main',
    component: Main,
    argTypes: {
        title: { control: 'text' }
    }
} as Meta;

export const basic: Story = (args) => <Main {...args} />;
