import { Component, OnInit } from '@angular/core';
import { FormControl, Validator, Validators } from "@angular/forms";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  emailField: FormControl;

  constructor() {
    this.emailField = new FormControl('',[
      Validators.required,
      Validators.email

      // Validators.minLength(4), 
      // Validators.maxLength(10)
     
    ]);

      //Para escuchar los cambios
    // this.emailField.valueChanges
    // .subscribe( value =>{
    //   console.log(value);
      
    // });
    
    
  }

  ngOnInit() {}


  sendMail(){
      if(this.emailField.valid){
        console.log(this.emailField.value);
        
      }
  }

}