import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersAuthService {
  userIndex: number;
  public users = [
    {
      name : 'هشام عبد الرؤف عبده سليم',
      noPrintedBelowImgInID: 'HF7192557',
      phoneNo: '01020382605',
      mail: 'Hesham_-10@outlook.com',
      address: 'مجاروة 23 قطعة 225 العاشر من رمضان',
      socialStuts: 'اعزب',
      partnerName: 'none',
      partnerId: 'none',
      natID : '28903011303515',
      pw : 'SSBRMTDZ'
    },
    {
      name : 'عزوز احمد عبد الحليم عيد خليل',
      noPrintedBelowImgInID: 'GW3477078',
      phoneNo: '010000709795',
      mail: 'Azzouz10--_@hotmail.com',
      address: 'شقة 7 قطعة 508و510و512 مجاورة 12 العاشر من رمضان',
      socialStuts: 'متزوج',
      partnerName: 'صبرين محمد سالم حجازى مصطفى',
      partnerId: '26305301301107',
      natID : '25912261301095',
      pw : 'XYQ3DY4R'
    },
    {
      name : 'صبرين محمد سالم حجازى مصطفى',
      noPrintedBelowImgInID: 'GL5300580',
      phoneNo: '01111651116',
      mail: 'Sabreen10--_@hotmail.com',
      address: 'شقة 3 عمارة 15 مجمع عبد المقصود امام البنك العربى االفريقيى الدولى االرنية العاشر من رمضان',
      socialStuts: 'متزوجة',
      partnerName: 'عزوز احمد عبد الحليم عيد خليل',
      partnerId: '25912261301095',
      natID : '26305301301107',
      pw : 'Z8AL6PSD'
    },
  {
    name : 'امیره حسن محمود حسن ابراھیم',
    noPrintedBelowImgInID: 'HW8629178',
    phoneNo: '01020382605',
    mail: 'Amira__-10@outlook.com',
    address: 'شقة 3 عمارة 15 مجمع عبد المقصود امام البنك العربى الافریقیى￼￼￼￼ الدولى الارنیة العاشر من رمضان',
    socialStuts: 'متزوجة',
    partnerName: 'تامر عزوز احمد عبد الحلیم',
    partnerId: '28206041300437',
    natID : '28702141303201',
    pw : 'ZX62HLUR'
  }, {
    name : 'احمد السید عبد الفتاح عبد الرسول',
    noPrintedBelowImgInID: 'FY5420116',
    phoneNo: '01000709795',
    mail: 'AHMED_-_10@outlook.com',
    address: 'شقة 4 قطعة 508و510و512 مجاورة 12 العاشر من رمضان',
    socialStuts: 'اعزب',
    partnerName: '',
    partnerId: '',
    natID : '28605288800671',
    pw : '553Q6X66'
  }, {
    name : 'علیاء محسن محمد تھامى',
    noPrintedBelowImgInID: 'HI3541729',
    phoneNo: '01010326638',
    mail: 'Aliaa_-10@outlook.com',
    address: 'شقة 4 عمارة 15 مجمع عبد المقصود امام البنك العربى الافریقیى￼￼￼￼ الدولى الارنیة العاشر من رمضان',
    socialStuts: 'انسة',
    partnerName: '',
    partnerId: '',
    natID : '29612081700383',
    pw : 'NHPSZVCB'
  }, {
    name : 'سھیر محمد ابراھیم مرسى',
    noPrintedBelowImgInID: 'HZ3053717',
    phoneNo: '01010326632',
    mail: 'sohair_10@outlook.com',
    address: 'شقة 3 عمارة 15 مجمع عبد المقصود امام السنترال الارنیة العاشر￼￼￼￼ من رمضان',
    socialStuts: 'متزوج',
    partnerName: 'حسام الدین مصطفى السید الشافعى',
    partnerId: '25911210100854',
    natID : '26512061300944',
    pw : 'TKCETTEL'
  }, {
    name : 'سامیھ محمد ابراھیم حتحوت',
    noPrintedBelowImgInID: 'GR2837078',
    phoneNo: '01010326634',
    mail: 'samya_10@outlook.com',
    address: 'شقة 3 عمارة 15 مجمع عبد المقصود امام البنك العربى الافریقیى￼￼￼￼ الدولى الارنیة العاشر من رمضان',
    socialStuts: 'متزوج',
    partnerName: 'السید عبد الفتاح عبد الرسول محمد',
    partnerId: '24705101302151',
    natID : '25702181301421',
    pw : 'BQSLCVFT'
  }, {
    name : 'خالد السید عبد الفتاح عبد الرسول',
    noPrintedBelowImgInID: 'HD2893815',
    phoneNo: '01111651116',
    mail: 'Khaled___10@outlook.com',
    address: 'قطعة 512,510,508 مجاورة 12 العاشر من رمضان',
    socialStuts: 'اعزب',
    partnerName: '',
    partnerId: '',
    natID : '28812168800711',
    pw : 'S8DCK8KE'
  }, {
    name : 'تامر عزوز احمد عبد الحلیم',
    noPrintedBelowImgInID: 'HW8321331',
    phoneNo: '01020382605',
    mail: 'Tamer_-10@outlook.com',
    address: 'شقة 5 قطعة 508و510و512 مجاورة 12 العاشر من رمضان',
    socialStuts: 'متزوج',
    partnerName: 'امیره حسن محمود حسن ابراھیم',
    partnerId: '28702141303201',
    natID : '28206041300437',
    pw : 'VXEKB2VM'
  }, {
    name : 'باسل السید عبد الفتاح عبد الرسول',
    noPrintedBelowImgInID: 'HC6902954',
    phoneNo: '01005256440',
    mail: 'Basel__10@outlook.com',
    address: 'شقة 1 قطعة 508 مجاروة 12 العاشر من رمضان',
    socialStuts: 'اعزب',
    partnerName: '',
    partnerId: '',
    natID : '29408250101978',
    pw : '44QMWWKK'
  }, {
    name : 'السید عبد الفتاح عبد الرسول محمد',
    noPrintedBelowImgInID: 'GP5748959',
    phoneNo: '01066405924',
    mail: 'Elsayed_10@outlook.com',
    address: 'شقة 3 عمارة 15 مجمع عبد المقصود امام البنك العربى الافریقیى￼￼￼￼ الدولى الارنیة العاشر من رمضان',
    socialStuts: 'متزوج',
    partnerName: 'سامیھ محمد ابراھیم حتحوت',
    partnerId: '25702181301421',
    natID : '24705101302151',
    pw : 'JFP2ZVSX'
  }];

  idsList;
  pwList;

  constructor() {
    this.idsList = [
      this.users[0].natID, this.users[1].natID, this.users[2].natID,
      this.users[3].natID, this.users[4].natID, this.users[5].natID,
      this.users[6].natID, this.users[7].natID, this.users[8].natID
    ];
    this.pwList = [
      this.users[0].pw, this.users[1].pw, this.users[2].pw,
      this.users[3].pw, this.users[4].pw, this.users[5].pw,
      this.users[6].pw, this.users[7].pw, this.users[8].pw
    ];
  }
  saveUser(userIndex: number) {
    this.userIndex = userIndex;
    localStorage.setItem('natID', this.users[userIndex].natID);
    localStorage.setItem('pw', this.users[userIndex].pw);
    localStorage.setItem('partnerId', this.users[userIndex].partnerId);
    localStorage.setItem('socialStuts', this.users[userIndex].socialStuts);
    localStorage.setItem('address', this.users[userIndex].address);
    localStorage.setItem('mail', this.users[userIndex].mail);
    localStorage.setItem('phoneNo', this.users[userIndex].phoneNo);
    localStorage.setItem('noPrintedBelowImgInID', this.users[userIndex].noPrintedBelowImgInID);
    localStorage.setItem('name', this.users[userIndex].name);
    localStorage.setItem('partnerName', this.users[userIndex].partnerName);
  }
}
