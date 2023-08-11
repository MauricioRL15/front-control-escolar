import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alumno } from '../models/Alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  URL_API = 'http://127.0.0.1:8000/';
  students:Alumno []=[];
  selectedStudent: Alumno ={
    matricula: "",
    nombre: "",
    apellidos: "",
    cuatrimestre: 0,
    promedio: 0
  }
  constructor(private http:HttpClient) { }
  getAllStudents(){
    return this.http.get<Alumno[]>(this.URL_API+'getAll');
  }
  
}
