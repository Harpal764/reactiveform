import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadeerComponent } from './headeer/headeer.component';
import { EmployeeTodoComponent } from './employee-todo/employee-todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FilterEmployeePipe } from './tools/pipes/filter-employee.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeadeerComponent,
    EmployeeTodoComponent,
    FilterEmployeePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
