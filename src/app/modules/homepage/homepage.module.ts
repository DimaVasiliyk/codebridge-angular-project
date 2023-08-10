import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from "src/app/core/core.module";

import { CardComponentComponent } from "./card-component/card-component.component";
import { HomePageRoutingModule } from "./homepage-routing.module";
import { HomepageComponent } from "./homepage.component";
import { CustomDatePipe } from "./pipes/data.pipe";
import { MaterialModule } from "src/app/shared/material.module";


@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    HomePageRoutingModule,
    MaterialModule
  ],
  declarations: [
    HomepageComponent,
    CardComponentComponent,
    CustomDatePipe
  ]
})
export class HomepageModule { }
