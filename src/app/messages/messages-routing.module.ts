import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerListComponent} from "../customers/customer-list/customer-list.component";
import {MessageNewComponent} from "./message-new/message-new.component";

const routes: Routes = [
  {
    path: '',
    component: CustomerListComponent
  },
  {
    path: 'new',
    component: MessageNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagesRoutingModule { }
