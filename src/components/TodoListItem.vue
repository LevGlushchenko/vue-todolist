<template>
  <v-list-item two-line>
    <v-list-item-action>
      <v-checkbox v-model="todo.isComplete"></v-checkbox>
    </v-list-item-action>

    <v-list-item-content>
      <div v-show="!isEdit">
        <v-list-item-title :class="{ 'text-decoration-line-through': todo.isComplete }">
          {{ todo.title }}
        </v-list-item-title>
        <v-list-item-subtitle :class="{ 'text-decoration-line-through': todo.isComplete }">
          {{ todoDate }}
        </v-list-item-subtitle>
      </div>

      <v-text-field
        ref="editField"
        v-show="isEdit"
        v-model="todo.title"
        :rules="todoRules"
        placeholder="Edit todo"
        required
        @change="editTodo($event)"
      ></v-text-field>
    </v-list-item-content>

    <v-list-item-action>
      <v-btn v-if="!todo.isComplete" icon :color="isEdit ? 'green' : 'gray'" @click="toggleEditForm">
        <v-icon dark>
          {{ isEdit ? 'mdi-check' : 'mdi-pencil-outline' }}
        </v-icon>
      </v-btn>

      <v-btn v-if="todo.isComplete" icon color="red" @click="deleteTodo">
        <v-icon dark> mdi-trash-can-outline </v-icon>
      </v-btn>
    </v-list-item-action>
  </v-list-item>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { format } from 'date-fns';
import { Todo } from '@/types';

@Component
export default class ListItem extends Vue {
  $refs!: {
    editField: HTMLFormElement;
  };

  @Prop({ type: Object, default: {} }) readonly todo!: Todo;

  private isEdit: boolean = false;
  private todoRules: Array<any> = [(v: any) => !!v || 'Required field'];

  public get todoDate(): string {
    return format(new Date(this.todo?.date), 'd.M.yyyy, HH:mm:ss');
  }

  private toggleEditForm(): void {
    if (this.todo.title) {
      this.isEdit = !this.isEdit;
    }
  }

  private editTodo(newVal: string): void {
    if (this.todo.title) {
      this.todo.title = newVal;
      this.todo.date = new Date().toISOString();
      this.isEdit = false;
    }
  }

  private deleteTodo(): void {
    this.$emit('delete-todo', this.todo.id);
  }
}
</script>

<style></style>
