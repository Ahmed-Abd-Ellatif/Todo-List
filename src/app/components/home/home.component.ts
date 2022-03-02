import { TasksService } from './../../services/tasks.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private tasksSer:TasksService ,
    private title:Title
     ) {
    this.title.setTitle('Todo List')
  }
  tasks = this.tasksSer.tasks
  ngOnInit(): void {
  }
  deleteTask(i:any){
    this.tasksSer.deleteTask(i);
  }

}
