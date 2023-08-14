import { Component } from '@angular/core';
import { AlumnosService } from 'src/app/services/alumnos.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent  {
 
  constructor(public alumnosService:AlumnosService){}

  ngOnInit(){
    this.getAllStudents();
  }
  
  getAllStudents(){
    this.alumnosService.getAllStudents().subscribe(
      res => {
        this.alumnosService.students = res;
        console.log(res);
      }
    )
  }
  


  
}
