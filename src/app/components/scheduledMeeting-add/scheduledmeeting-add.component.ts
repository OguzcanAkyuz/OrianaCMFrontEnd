import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ScheduledMeeting } from 'app/models/scheduledMeeting';
import { ScheduledmeetingService } from 'app/services/scheduledmeeting.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'scheduledMeeting-add',
  templateUrl: './ScheduledMeeting-add.component.html',
  styleUrls: ['./scheduledMeeting-add.component.scss']
})
export class ScheduledmeetingAddComponent implements OnInit {
  scheduledMeeting:ScheduledMeeting[]=[];
  scheduledMeetingAddForm:FormGroup;
  reactiveForm:ReactiveFormsModule;
  currentScheduledMeeting:ScheduledMeeting;
  constructor(private scheduledMeetingService:ScheduledmeetingService,private formBuilder:FormBuilder,private toastrService:ToastrService) { }

  ngOnInit(): void {
this.createScheduledMeetingAddForm();
  }
  createScheduledMeetingAddForm(){
    this.scheduledMeetingAddForm=this.formBuilder.group({
     id:[""],
      customerInformation:["",Validators.required],
      participants:["",Validators.required],
      meetingSubject:["",Validators.required],
      meetingResult:["",Validators.required],
      meetingTitle:["",Validators.required],
      meetingDate:["",Validators.required],
      companyName:["",Validators.required],
      companyAdress:["",Validators.required],
      companyBusinessArea:["",Validators.required],
      companyWebAdress:["",Validators.required],
      executiveName:["",Validators.required],
      executivePhoneNumber:["",Validators.required],
      executiveEmail:["",Validators.required],
  })
}
scheduledMeetingAdd(){
  if(this.scheduledMeetingAddForm.valid){
    let scheduledMeetingModel=Object.assign({},this.scheduledMeetingAddForm.value)
    this.scheduledMeetingService.scheduledMeetingAdd(scheduledMeetingModel).subscribe(response=>{
      this.toastrService.success(response.message,"Added Succes")
    },responseError=>{
      if(responseError.error.Error.lenght>0){
        for (let i = 0; i <responseError.error.Errors.length; i++)
        this.toastrService.error(responseError.error.Error[i].ErrorMessage,"Added Unsuccesful ")
        console.log("succes")
      }
    })
}else{
    this.toastrService.error("Added Unsuccesful ")
    console.log("hata")
  }
}
}
