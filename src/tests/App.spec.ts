import { mount } from '@vue/test-utils';
import Vuetify from 'vuetify';
import App from '@/App.vue';
import TodoForm from '@/components/TodoForm.vue';
import TodoList from '@/components/TodoList.vue';

const vuetify = new Vuetify();
const wrapper = mount(App, {
  vuetify,
});

describe('App.vue', () => {
  it('Is Vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it('Render', () => {
    expect(wrapper.find('#app')).toBeTruthy();
  });

  it('Has TodoForm component', () => {
    expect(wrapper.findComponent(TodoForm).exists()).toBeTruthy();
  });

  it('Has TodoList component', () => {
    expect(wrapper.findComponent(TodoList).exists()).toBeTruthy();
  });

  it('Has title', () => {
    const title = 'Todo List';
    expect(wrapper.find('h1').text()).toBe(title);
  });

  it('Has todos array', () => {
    expect(wrapper.vm.$data.todos).toBeTruthy();
  });
});
