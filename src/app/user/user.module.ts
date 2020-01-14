import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [UserComponent],
    imports: [
        CommonModule,
        UserRoutingModule,
        ReactiveFormsModule
    ],
  exports: [UserComponent]
})
export class UserModule { }
