import { mount } from '@vue/test-utils';
import Vuetify from 'vuetify';
import TodoForm from '@/components/TodoForm.vue';

const vuetify = new Vuetify();
const wrapper = mount(TodoForm, {
  vuetify,
});

describe('TodoForm.vue', () => {
  it('Is Vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it('Render', () => {
    expect(wrapper.find('[data-test="todo-form"]')).toBeTruthy();
    expect(wrapper.find('[data-test="todo-form-input"]')).toBeTruthy();
  });
});
