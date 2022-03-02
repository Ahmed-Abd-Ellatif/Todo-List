import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private tasksSer:TasksService , private router:Router ,
    private title:Title,
    ) {
    this.title.setTitle('Add New Task')
   }

  ngOnInit(): void {
  }
  saveTask(title:any,des:any){
    this.tasksSer.saveTask(title.value,des.value);
    this.router.navigate(['/']);
  }

}
