import { mount } from '@vue/test-utils';
import Vuetify from 'vuetify';
import TodoListItem from '@/components/TodoList.vue';

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

  it('Has props data', () => {
    expect(wrapper.find('.v-list-item__title').text()).toBe('asd');
  });
});
