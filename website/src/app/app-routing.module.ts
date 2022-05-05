import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { B1a1Component } from './b1a1/b1a1.component';
import { B1a2Component } from './b1a2/b1a2.component';
import { B1e1Component } from './b1e1/b1e1.component';
import { B1e2Component } from './b1e2/b1e2.component';
import { BootsidebarComponent } from './bootsidebar/bootsidebar.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { Bp1Component } from './bp1/bp1.component';
import { Bp2Component } from './bp2/bp2.component';
import { Bp3Component } from './bp3/bp3.component';
import { Bp4Component } from './bp4/bp4.component';
import { BresumeComponent } from './bresume/bresume.component';
import { C1a1Component } from './c1a1/c1a1.component';
import { C1e1Component } from './c1e1/c1e1.component';
import { C1e2Component } from './c1e2/c1e2.component';
import { C2a1Component } from './c2a1/c2a1.component';
import { C2e1Component } from './c2e1/c2e1.component';
import { C2e2Component } from './c2e2/c2e2.component';
import { C2e3Component } from './c2e3/c2e3.component';
import { C3a1Component } from './c3a1/c3a1.component';
import { C3e1Component } from './c3e1/c3e1.component';
import { C3e2Component } from './c3e2/c3e2.component';
import { C3e3Component } from './c3e3/c3e3.component';
import { C4a1Component } from './c4a1/c4a1.component';
import { C4a2Component } from './c4a2/c4a2.component';
import { C4e1Component } from './c4e1/c4e1.component';
import { C4e2Component } from './c4e2/c4e2.component';
import { C4e3Component } from './c4e3/c4e3.component';
import { C5e1Component } from './c5e1/c5e1.component';
import { ContactComponent } from './contact/contact.component';
import { CresumeComponent } from './cresume/cresume.component';
import { CssComponent } from './css/css.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { H1a1Component } from './h1a1/h1a1.component';
import { H1e1Component } from './h1e1/h1e1.component';
import { H1e2Component } from './h1e2/h1e2.component';
import { H1e3Component } from './h1e3/h1e3.component';
import { H1e4Component } from './h1e4/h1e4.component';
import { H1e5Component } from './h1e5/h1e5.component';
import { H1e6Component } from './h1e6/h1e6.component';
import { H1e7Component } from './h1e7/h1e7.component';
import { H1e8Component } from './h1e8/h1e8.component';
import { H2a1Component } from './h2a1/h2a1.component';
import { H2e1Component } from './h2e1/h2e1.component';
import { HomeComponent } from './home/home.component';
import { HtmlComponent } from './html/html.component';
import { InterestsComponent } from './interests/interests.component';
import { ProjectComponent } from './project/project.component';
import { SkillsComponent } from './skills/skills.component';


const routes: Routes = [
{path:'', redirectTo:'home', pathMatch:'full'},
{path:'home', component:HomeComponent},
{path:'html', component:HtmlComponent, children:[
  {path:'h1e1', component:H1e1Component},
  {path:'h1e2', component:H1e2Component},
  {path:'h1e3', component:H1e3Component},
  {path:'h1e4', component:H1e4Component},
  {path:'h1e5', component:H1e5Component},
  {path:'h1e6', component:H1e6Component},
  {path:'h1e7', component:H1e7Component},
  {path:'h1e8', component:H1e8Component},
  {path:'h1a1', component:H1a1Component},
  {path:'h2a1', component:H2a1Component},
  {path:'h2e1', component:H2e1Component}

]},
{path:'css', component:CssComponent, children:[
  {path:'c1a1', component:C1a1Component},
  {path:'c1e1', component:C1e1Component},
  {path:'c1e2', component:C1e2Component},
  {path:'c2a1', component:C2a1Component},
  {path:'c2e1', component:C2e1Component},
  {path:'c2e2', component:C2e2Component},
  {path:'c2e3', component:C2e3Component},
  {path:'c3a1', component:C3a1Component},
  {path:'c3e1', component:C3e1Component},
  {path:'c3e2', component:C3e2Component},
  {path:'c3e3', component:C3e3Component},
  {path:'c4a1', component:C4a1Component},
  {path:'c4a2', component:C4a2Component},
  {path:'c4e1', component:C4e1Component},
  {path:'c4e2', component:C4e2Component},
  {path:'c4e3', component:C4e3Component},
  {path:'c5e1', component:C5e1Component},
]},
{path:'cresume', component:CresumeComponent, children:[
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'education', component:EducationComponent},
  {path:'experience', component:ExperienceComponent},
  {path:'interests', component:InterestsComponent},
  {path:'projects', component:ProjectComponent},
  {path:'skills', component:SkillsComponent}
]},
{path:'bootstrap', component:BootstrapComponent, children:[
  {path:'bootsidebar', component:BootsidebarComponent}
]},
  {path:'b1e1', component:B1e1Component},
  {path:'b1e2', component:B1e2Component},
  {path:'b1a1', component:B1a1Component},
  {path:'b1a2', component:B1a2Component},
  {path:'bresume', component:BresumeComponent},
  {path:'bp1', component:Bp1Component},
  {path:'bp2', component:Bp2Component},
  {path:'bp3', component:Bp3Component},
  {path:'bp4', component:Bp4Component}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
