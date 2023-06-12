import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodoItem } from 'src/app/interface/interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() showItem!: ITodoItem[];
  @Output() clickShowDialog = new EventEmitter <number>();
  @Output() deleteItem = new EventEmitter <number>();
  @Output() clickStatus = new EventEmitter <number>();

  
  constructor() { }

  ngOnInit(): void {
  }

  handleEdit(id: number){
    this.clickShowDialog.emit(id);
  }

  handleDelete(id: number){
    this.deleteItem.emit(id);
  }

  handleStatus(id: number){
    this.clickStatus.emit(id);
  }

}
