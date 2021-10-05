import { Component, OnInit } from '@angular/core';
import { todo } from 'src/app/todo-interface';
import { TODOS } from 'src/app/TODOS';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
