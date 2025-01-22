import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';


export interface Task {
  id: number,
  task_name: string,
  is_completed: boolean,
}


@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  todo_list: Task [] = [];
  task: string = '';

  addTask():void {
    if(this.task.trim() !== " ") {
      const newTodoItem: Task =  {
        id : Date.now(),
        task_name : this.task,
        is_completed: false,
      }

      this.todo_list.push(newTodoItem);
      this.task = '';
    }
  }

  toggleCompleted(index: number) {
    this.todo_list[index].is_completed = !this.todo_list[index].is_completed;
  }

  delete(id: number) {
    this.todo_list = this.todo_list.filter((task)=> task.id !== id);
  }


}
