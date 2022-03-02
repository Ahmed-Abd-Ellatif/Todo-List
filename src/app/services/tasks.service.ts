import { NgToastService } from 'ng-angular-popup';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
tasks:Array<Task>=[
];
  constructor(private toast:NgToastService) {
    let saveTasks = localStorage.getItem("tasks");
    if(saveTasks){

      this.tasks=JSON.parse(saveTasks)
    }else{
      this.tasks=[]
    }
  }
  deleteTask(i:any){
    this.tasks.splice(i,1);
    this.saveAll();
    this.toast.error({detail:'Deleted',summary:'Task Deleted',duration:2000})
  }
  saveTask(title:any,description:any){
    this.tasks.push({
      title,
      description
    })
    this.saveAll();
    this.toast.success({detail:'Success',summary:'Task Added',duration:2000})
  }
  editTask(i:any, data:any){
    this.tasks[i]=data;
    this.saveAll();
    this.toast.success({detail:'Success',summary:'Task Edited',duration:2000})
  }
  saveAll(){
    localStorage.setItem('tasks',JSON.stringify(this.tasks))
  }

}
