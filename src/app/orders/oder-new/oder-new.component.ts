import { Component, OnInit } from '@angular/core';
import {FormControl,Validators} from "@angular/forms";

@Component({
  selector: 'app-oder-new',
  templateUrl: './oder-new.component.html',
  styleUrls: ['./oder-new.component.scss']
})
export class OderNewComponent implements OnInit {
  minDate = new Date();
  dateCtrl:FormControl;

  constructor() { }

  ngOnInit() {
    this.dateCtrl = new FormControl('', [ Validators.required ]);
  }

}
