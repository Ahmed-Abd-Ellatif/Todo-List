import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
taskId:any;
task:any;
  constructor(private activatedRoute:ActivatedRoute,
    private tasksSer:TasksService,
    private router:Router,
    private title:Title
    ) {
      this.title.setTitle("Task")
    }

  ngOnInit(): void {
    this.taskId=this.activatedRoute.snapshot.paramMap.get('id')
    setTimeout(()=>{
      this.task=this.tasksSer.tasks[this.taskId]
    },1000)
  }

  saveTask(){
this.tasksSer.editTask(this.taskId,this.task);
this.router.navigate(['/']);
  }
  deleteTask(){
    this.tasksSer.deleteTask(this.taskId)
    this.router.navigate(['/']);
  }

}
