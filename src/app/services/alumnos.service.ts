import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alumno } from '../models/Alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  URL_API = 'http://127.0.0.1:8000/';
  students:Alumno []=[];
  constructor(private http:HttpClient) { }
  getAllStudents(){
    return this.http.get<Alumno[]>(this.URL_API+'getAll');
  }
  
}
