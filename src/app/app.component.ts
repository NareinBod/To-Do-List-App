import { Component } from '@angular/core';import { HeaderComponent } from './header/header.component';
import { AddTaskComponent } from './add-task/add-task.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, AddTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'to-do-list';
}
