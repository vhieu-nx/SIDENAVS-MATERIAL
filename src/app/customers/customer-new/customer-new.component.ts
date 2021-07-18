import { Component, OnInit } from '@angular/core';
import {FormControl,Validators} from "@angular/forms";

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.scss']
})
export class CustomerNewComponent implements OnInit {
  emailFormControl: FormControl
  matcher: any;
  constructor() { }

  ngOnInit(): void {
    this.emailFormControl = new FormControl('',[
      Validators.required,
      Validators.email
    ])
  }

}
