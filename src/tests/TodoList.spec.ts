import { mount } from '@vue/test-utils';
import Vuetify from 'vuetify';
import TodoList from '@/components/TodoList.vue';
import TodoListItem from '@/components/TodoListItem.vue';

const vuetify = new Vuetify();
const wrapper = mount(TodoList, {
  vuetify,
});

describe('TodoList.vue', () => {
  it('Is Vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it('Has TodoListItem component', () => {
    expect(wrapper.findComponent(TodoListItem).exists()).toBeTruthy();
  });

  it('Render', () => {
    expect(wrapper.find('[data-test="todo-list"]')).toBeTruthy();
  });

  it('Has subheading', () => {
    expect(wrapper.find('.subheading').text()).toBe('You have 0 Todos, add some');
  });
});
