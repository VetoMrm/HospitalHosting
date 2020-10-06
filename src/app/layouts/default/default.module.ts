import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DefaultComponent } from "./default.component";
import {
  MatSidenavModule,
  MatDividerModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatGridListModule,
  MatListModule,
  MatTableModule,
  MatInputModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatSort,
  MatIconModule,
  MatCardModule,
  MatProgressBarModule, MatStepperModule
} from "@angular/material";
import { SharedModule } from "src/app/shared/shared.module";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { DashboardComponent } from "src/app/modules/dashboard/dashboard.component";
import { AdminModule } from "src/app/modules/admin/admin.module";
import { DoctorshomeComponent } from "src/app/modules/admin/doctors/doctorshome/doctorshome.component";
import { PatienthomeComponent } from 'src/app/modules/admin/patient/patienthome/patienthome.component';
import { AppointmenthomeComponent } from 'src/app/modules/admin/appointment/appointmenthome/appointmenthome.component';
import { SchedulehomeComponent } from 'src/app/modules/admin/master/schedule/schedulehome/schedulehome.component';
@NgModule({
  declarations: [DefaultComponent, DashboardComponent, DoctorshomeComponent,PatienthomeComponent,AppointmenthomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    AdminModule,
    MatSidenavModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatListModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatDividerModule,
    
  ],
})
export class DefaultModule { }
