import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { InstructorComponent } from './instructor/instructor.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { AngComponent } from './coursesss/ang/ang.component';
import { WebBasicComponent } from './coursesss/web-basic/web-basic.component';
import { FlutComponent } from './coursesss/flut/flut.component';
import { BackendComponent } from './coursesss/backend/backend.component';
import { BackeComponent } from './coursesss/backe/backe.component';
import { PytComponent } from './coursesss/pyt/pyt.component';
import { HtmComponent } from './coursesss/htm/htm.component';
import { CsComponent } from './coursesss/cs/cs.component';
import { JssComponent } from './coursesss/jss/jss.component';
import { BotstrpComponent } from './coursesss/botstrp/botstrp.component';
import { FimgComponent } from './img/fimg/fimg.component';
import { SimgComponent } from './img/simg/simg.component';
import { TimgComponent } from './img/timg/timg.component';
import { FoimgComponent } from './img/foimg/foimg.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    InstructorComponent,
    ContactusComponent,
    HomeComponent,
    AngComponent,
    WebBasicComponent,
    FlutComponent,
    BackendComponent,
    BackeComponent,
    PytComponent,
    HtmComponent,
    CsComponent,
    JssComponent,
    BotstrpComponent,
    FimgComponent,
    SimgComponent,
    TimgComponent,
    FoimgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
