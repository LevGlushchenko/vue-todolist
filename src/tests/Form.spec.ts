import { mount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld component', () => {
  const wrapper = mount(HelloWorld);

  it('has <h1> tag with text', () => {
    expect(wrapper.html()).toContain('<h1>Hello world!</h1>');
  });
});
