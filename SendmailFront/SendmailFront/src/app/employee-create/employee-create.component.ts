import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from "../shared/rest-api.service";
import { Location } from '@angular/common';
@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})

export class EmployeeCreateComponent implements OnInit {
  @Input() employeeDetails = { name: '', email: '',date:'',rating:''}

  constructor(
    public restApi: RestApiService, 
    public router: Router,
    public location: Location
  ) { }

  ngOnInit() { }
  
  refesh():void{
    this.router.navigateByUrl('/employees-list',{skipLocationChange:true}).then(()=>{
      this.router.navigate([decodeURI(this.location.path())])
    })
  }
   
  addEmployee() {
    if(window.confirm('Are you sure, you want to create New Member?')){
    this.restApi.createEmployee(this.employeeDetails).subscribe((data: {}) => {
    })
      this.refesh()
  }
}

}