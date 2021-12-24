import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { EmployeeModel } from '../models/Employee.model';

@Component({
  selector: 'app-employee-todo',
  templateUrl: './employee-todo.component.html',
  styleUrls: ['./employee-todo.component.css']
})
export class EmployeeTodoComponent implements OnInit {
  Employees:EmployeeModel[]=[];
  faTrash=faTrash;
  faEdit=faEdit;
  txtFilter=""
  formdata:FormGroup
  btnText="submit"

  constructor() {
    if(localStorage.getItem("employees")==null)
    {
      let data=   {"id":1,"name":"shubham","dept":"IT","gender":"MALE"}
    this.Employees.push(data)
    localStorage.setItem("employees",JSON.stringify (this.Employees))
  }
  else{
    let data:any;
    data=localStorage.getItem("employees")
    this.Employees=JSON.parse(data)
  }
    this.formdata=new FormGroup({
      "id":new FormControl(''),
      "name":new FormControl('',[Validators.required,Validators.minLength(3)]),
      "dept":new FormControl('',Validators.required),
      "gender":new FormControl('',Validators.required),

    })
   }

  ngOnInit(): void {
  }

  submit(){
    let emp={...this.formdata.value}
    if(emp.id=='')
    {
    emp["id"]=this.Employees.length+1
    this.Employees.push(emp)
    localStorage.setItem("employees",JSON.stringify (this.Employees))
    }
    else{
      this.Employees.splice(emp.id-1,1,emp)
      localStorage.setItem("employees",JSON.stringify (this.Employees))
      this.btnText="submit"
    }
    this.formdata.reset()
  }

  DeleteEmployee(id:number){
    event?.preventDefault()
    this.Employees.splice(id-1,1)
    localStorage.setItem("employees",JSON.stringify (this.Employees))
  }
  EditEmployee(emp:any){
    event?.preventDefault()
    this.formdata.setValue({...emp})
    this.btnText="update"
  }

}
