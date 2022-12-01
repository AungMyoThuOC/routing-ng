import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { CoursesComponent } from './courses/courses.component';
import { AngComponent } from './coursesss/ang/ang.component';
import { BackeComponent } from './coursesss/backe/backe.component';
import { BotstrpComponent } from './coursesss/botstrp/botstrp.component';
import { CsComponent } from './coursesss/cs/cs.component';
import { FlutComponent } from './coursesss/flut/flut.component';
import { HtmComponent } from './coursesss/htm/htm.component';
import { JssComponent } from './coursesss/jss/jss.component';
import { PytComponent } from './coursesss/pyt/pyt.component';
import { WebBasicComponent } from './coursesss/web-basic/web-basic.component';
import { HomeComponent } from './home/home.component';
import { FimgComponent } from './img/fimg/fimg.component';
import { FoimgComponent } from './img/foimg/foimg.component';
import { SimgComponent } from './img/simg/simg.component';
import { TimgComponent } from './img/timg/timg.component';
import { InstructorComponent } from './instructor/instructor.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'courses',
    component: CoursesComponent
  },
  {
    path: 'instructor',
    component: InstructorComponent
  },
  {
    path: 'contactus',
    component: ContactusComponent
  },
  {
    path: 'ang',
    component: AngComponent
  },
  {
    path: 'backe',
    component: BackeComponent
  },
  {
    path: 'botstrp',
    component: BotstrpComponent
  },
  {
    path: 'cs',
    component: CsComponent
  },
  {
    path: 'flut',
    component: FlutComponent
  },
  {
    path: 'htm',
    component: HtmComponent
  },
  {
    path: 'jss',
    component: JssComponent
  },
  {
    path: 'pyt',
    component: PytComponent
  },
  {
    path: 'webbasic',
    component: WebBasicComponent
  },
  {
    path: 'fimg',
    component: FimgComponent
  },
  {
    path: 'foimg',
    component: FoimgComponent
  },
  {
    path: 'simg',
    component: SimgComponent
  },
  {
    path: 'timg',
    component: TimgComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
