import { Component, OnInit } from '@angular/core';
import { ITodoItem } from 'src/app/interface/interface';
import ItemServiceService from '../Services/item-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Filter } from 'src/enum/enum';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  showItem: ITodoItem[] = [];
  enumFilter = Filter;

  selectedFilter: string = Filter.all;

  showDialog: boolean = false;

  inputForm: FormGroup;

  isEdit: boolean | undefined = false;

  idEdit!: number;

  stringTest: string = '';

  filter(filterValue: string){
    this.selectedFilter = filterValue;
  }

  get filterTodo(){
    if (this.selectedFilter === Filter.active) {
      return this.showItem.filter(item => {
        return !item.type;
      })
    }

    if (this.selectedFilter === Filter.completed) {
      return this.showItem.filter(item => {
        return item.type;
      })
    }
    return this.showItem;
  }

  // Mở dialog
  add(){
    this.showDialog = true;
  }

  close(){
    this.showDialog = false;
    this.isEdit = false;
    this.inputForm.setValue({
      itemName: '',
      itemDate: '',
    })
  }

  edit(id: number){

    this.showDialog = true;

    this.isEdit = true;

    this.idEdit = id;

    this.itemService.callInfo(id).subscribe((data) =>{
      this.inputForm.setValue({
        itemName: data.name,
        itemDate: data.createdAt,
      })
    })
  }

  clickStatus(id: number){
    const item = this.showItem.find(data => data.id === id);
    if (item) {
      item.type = !item.type;
      this.itemService.callInfo(id).subscribe((data) => {
        this.isEdit = !data.type;
        const statusItem = { type:  this.isEdit};
        this.itemService.updateStatus(id, statusItem).subscribe(() => {});
      })
    }
  }

  delete(idDelete: number){
    this.itemService.deleteItem(idDelete).subscribe(() => {
      this.getItem();
    })
  }


  constructor(private itemService: ItemServiceService, private fb: FormBuilder) { 
    this.inputForm = this.fb.group({
      itemName: ['',Validators.required],
      itemDate: ['',Validators.required],
    })
  }

  getItem(){
    this.itemService.getItem().subscribe((data) => {
      this.showItem = data;
    });
  }

  ngOnInit(): void {
    this.getItem();
  }

  addItem(todo: FormGroup){
    const newItem: ITodoItem = {
      name: todo.value.itemName,
      createdAt: todo.value.itemDate,
      type: false,
    };
    
    this.itemService.addItem(newItem).subscribe((data: any) => {
      this.getItem();
      this.showDialog = false;
      this.inputForm.reset();
    });
  }

  editItem(todo: FormGroup){
    const newItem: ITodoItem = {
      name: todo.value.itemName,
      createdAt: todo.value.itemDate,
    };

    this.itemService.update(this.idEdit, newItem).subscribe((data) => {
      this.getItem();
      this.showDialog = false;
      this.inputForm.reset();
      this.isEdit = false;
    });
  }

  submitForm(todo: FormGroup){
    if (this.isEdit) {
      this.editItem(todo);
    }else{
      this.addItem(todo);
    }
  }
  
}
