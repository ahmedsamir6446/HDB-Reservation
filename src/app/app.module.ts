import { NgbDateCustomParserFormatterService } from './ngb-date-custom-parser-formatter.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RecaptchaModule } from 'ng-recaptcha';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ReserveComponent } from './reserve/reserve.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { Step4Component } from './step4/step4.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RulesComponent } from './rules/rules.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerConfig, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'reserve', component: ReserveComponent},
  { path: 'rules', component: RulesComponent},
  { path: 'step1', component: Step1Component},
  { path: 'step2', component: Step2Component},
  { path: 'step3', component: Step3Component},
  { path: 'step4', component: Step4Component},

];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    ReserveComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    RulesComponent,

  ],
  imports: [
    BrowserModule,
    RecaptchaModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
  ],
  providers: [
    {provide: NgbDateParserFormatter,
      useFactory: () => new NgbDateCustomParserFormatterService('DD/MM/YYYY') }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
