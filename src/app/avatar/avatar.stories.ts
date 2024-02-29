import { Meta, Story } from '@storybook/angular';
import { AvatarComponent } from './avatar.component';

export default {
  title: 'Components/Avatar',
  component: AvatarComponent
} as Meta;

const avatarUrl =
'https://res.cloudinary.com/dvujyxh7e/image/upload/c_scale,w_128/v1593253478/trung-vo_bioxmc.png';
'https://cdn.pixabay.com/photo/2014/07/21/11/51/rose-398576_960_720.png';

const Template: Story<AvatarComponent> = (args: AvatarComponent) => ({
  component: AvatarComponent,
  props: args
});

export const Rounded: Story<AvatarComponent> = Template.bind({});
Rounded.args = {
  avatarUrl,
  size: 64,
  //rotate: false,
  //skew: false
};

export const Square: Story<AvatarComponent> = Template.bind({});
Square.args = {
  avatarUrl,
  size: 64,
  rounded: false,
  //rotate: false,
  //skew: false
};
/*export const Rectangle: Story<AvatarComponent> = Template.bind({});
Rectangle.args = {
  avatarUrl,
  height: 100,
  width: 200,
  size: 100,
  rounded: false,
  rotate: false,
  skew: false
};
export const Oval: Story<AvatarComponent> = Template.bind({});
Oval.args = {
  avatarUrl,
  height: 200,
  width: 130,
  size: 500,
  rotate: false,
  skew: false
  //rounded: false
};
export const Rhombus: Story<AvatarComponent> = Template.bind({});
Rhombus.args = {
  avatarUrl,
  height: 150,
  width: 150,
  rounded: false,
  rotate: true,
  skew: false
  
};
export const Traingle: Story<AvatarComponent> = Template.bind({});
  Traingle.args = {
    avatarUrl,
    size: 80,
    rounded: false,
    rotate: false,
    skew: false
  };
  export const Parallelogram: Story<AvatarComponent> = Template.bind({});
  Parallelogram.args = {
    avatarUrl,
    height: 100,
    width: 200,
    size: 100,
    rounded: false,
    rotate: true,
    skew: true
  };*/

