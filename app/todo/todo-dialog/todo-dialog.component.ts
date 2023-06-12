import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html',
  styleUrls: ['./todo-dialog.component.scss']
})
export class TodoDialogComponent implements OnInit {

  @Input() showDialog!: boolean
  @Output() onClose = new EventEmitter();

  @Input() inputForm!: FormGroup;
  @Output() onSubmit = new EventEmitter <FormGroup>();

  @Input() isEdit!: boolean | undefined;

  closeDialog(){
    this.onClose.emit();
  }
  
  handledSubmit(todo: FormGroup){
    this.onSubmit.emit(todo);
  }
 
  constructor() { }

  ngOnInit(): void {
  }

  

}
