
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
// import { NgbDateParserFormatter, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import { NgbDateCustomParserFormatterService } from './ngb-date-custom-parser-formatter.service';
import { ReserveComponent } from './reserve/reserve.component';
import { RulesComponent } from './rules/rules.component';
import { SetTimerComponent } from './set-timer/set-timer.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { Step4Component } from './step4/step4.component';
import { UploaderComponent } from './uploader/uploader.component';
import {
  RecaptchaModule,
  RECAPTCHA_LANGUAGE,
  RECAPTCHA_SETTINGS,
  RecaptchaSettings,
} from 'ng-recaptcha';
// import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { HttpClientModule } from '@angular/common/http';
import { TimeService } from './time.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import {MatIconModule} from '@angular/material/icon';
import { SecondStepComponent } from './second-step/second-step.component';
// import { NgModule, LOCALE_ID } from '@angular/core';

import { registerLocaleData } from '@angular/common';

import localeFr from '@angular/common/locales/fr';
import localeAr from '@angular/common/locales/ar-EG';



registerLocaleData(localeAr);


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'uploader', component: UploaderComponent },
  { path: 'login', component: LoginComponent },
  { path: 'reserve/:id', component: ReserveComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'rules/:id', component: RulesComponent },
  { path: 'step1', component: Step1Component },
  { path: 'step1/:id', component: Step1Component },
  { path: 'step2', component: Step2Component },
  { path: 'second-step', component: SecondStepComponent },
  { path: 'step2/:id', component: Step2Component },
  { path: 'step3', component: Step3Component },
  { path: 'step3/:id', component: Step3Component },
  { path: 'step4', component: Step4Component },
  { path: 'set-timer', component: SetTimerComponent },
  { path: 'step4/:id', component: Step4Component },
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
    UploaderComponent,
    SetTimerComponent,
    SecondStepComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    // NgbModule,
    RecaptchaModule.forRoot(),
    // RecaptchaFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    NgxMaterialTimepickerModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatIconModule,
  ],
  providers: [
    // {
    //   provide: NgbDateParserFormatter,
    //   useFactory: () => new NgbDateCustomParserFormatterService('DD/MM/YYYY'),
    // },
    // {
    //   provide: RECAPTCHA_SETTINGS,
    //   useValue: {
    //     siteKey: '6Ldc0McZAAAAAA06Hqi14Apb5RhDxPFrMPNWnqym',
    //   } as RecaptchaSettings,
    // },
    // {provide: LOCALE_ID, useValue: 'fr-FR' },
    {provide: LOCALE_ID, useValue: 'ar-EG' },
    {
      provide: RECAPTCHA_LANGUAGE,
      useValue: 'ar',
    },
    TimeService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
