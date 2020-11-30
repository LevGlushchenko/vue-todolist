import { mount } from '@vue/test-utils';
import Vuetify from 'vuetify';
import TodoListItem from '@/components/TodoListItem.vue';

const vuetify = new Vuetify();
const wrapper = mount(TodoListItem, {
  vuetify,
  propsData: {
    id: 'fc03c84b-872c-4432-946c-f448ccc06a2f',
    date: 'Sun Nov 29 2020 21:43:45 GMT+0200 (Eastern European Standard Time)',
    title: 'asd',
    isComplete: false,
  },
});

describe('TodoListItem.vue', () => {
  it('Is Vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it('Render', () => {
    expect(wrapper.find('[data-test="todo-item"]')).toBeTruthy();
  });

  it('Props', () => {
    expect(wrapper.props('title')).toBe('asd');
  });
});
