import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersAuthService {
  userIndex: number;
  public lands = [
    {
      id: 0,
      title: 'قطع أراضي مميزة مرحلة رابعة',
      startDate: '06 سبتمبر 2020 10:00 ص',
      endDate: '10 سبتمبر 2020',
      availaleLands: '1663',
      desc:
        // tslint:disable-next-line:max-line-length
        'تتجه الهيئة الي توفير قطع ارضى اسكان متميز كاملة المرافق فقد تم إعداد (1663) قطعة ارض سكنية بمدن ( 6أكتوبر الجديدة - بدر - العاشر من رمضان - السادات - برج العرب الجديدة - الفيوم الجديدة - بني سويف الجديدة - أسيوط الجديدة - غرب أسيوط سوهاج الجديدة - غرب قنا - طيبه الجديدة - اسوان الجديدة) بمساحات تتراوح من(192م2 الى1200 م2).',
      attension:
        // tslint:disable-next-line:max-line-length
        'تم تعديل سعر المتر لعدد (9) قطعة ارض بمدينة الفيوم الجديده بالحى الاول بالمجاورة الرابعه بمسلسل (2) و عدد (9) قطعة ارض بنفس المدينه و الحى و المجاورة بمسلسل (3) طبقا لافادة الهبئه',
      img: '../../assets/img/land-1.jpeg',
    },
    {
      id: 1,
      title: 'قطع أراضي اكثر تميز مرحلة رابعة',
      startDate: '13 سبتمبر 2020 10:00 ص',
      endDate: '17 سبتمبر 2020',
      availaleLands: '632',
      desc:
        // tslint:disable-next-line:max-line-length
        'قطع ارضى اسكان اكثر تميزا كاملة المرافق فقد تم إعداد (632) قطعة ارض سكنية بمدن (القاهرة الجديدة - العبور - بدر - العاشر من رمضان - 15مايو - دمياط الجديدة - برج العرب الجديدة - سوهاج الجديدة - طيبه - اسوان الجديدة ) بمساحات تتراوح من( 294م2الى 2337 م2).',
      attension: 'يرجى مراجعة بيانات الإستمارة قبل الحفظ على الموقع',
      img: '../../assets/img/land-3.jpeg',
    },
  ];
  public users = [
    {
      name: 'هشام عبد الرؤف عبده سليم',
      noPrintedBelowImgInID: 'HF7192557',
      phoneNo: '01020382605',
      mail: 'Hesham_-10@outlook.com',
      address: 'مجاروة 23 قطعة 225 العاشر من رمضان',
      socialStuts: 'اعزب',
      partnerName: 'none',
      partnerId: 'none',
      natID: '28903011303515',
      pw: 'SSBRMTDZ',
    },
    {
      name: 'ابتسام محمد إبراهيم حتحوت',
      noPrintedBelowImgInID: 'HD2964539',
      phoneNo: '01111651116',
      mail: 'ebtsam_12121@outlook.com',
      address: 'ق18 بلوك 18035 -العبور - القليوبية',
      socialStuts: 'اعزب',
      partnerName: 'none',
      partnerId: 'none',
      natID: '26801061301161',
      pw: '8LG8R6DU',
    },
    {
      name: 'احمد محمد زكى خليل',
      noPrintedBelowImgInID: 'IC5432145',
      phoneNo: '01111651116',
      mail: 'ahmed1211312@outlook.com',
      address: 'السعيدية مركز بلبيس - الشرقية',
      socialStuts: 'متزوج',
      partnerName: 'شروق أحمد شحاته محمد البنا',
      partnerId: '29907061302225',
      natID: '28703101304112',
      pw: '57CT7NUG',
    },
    {
      name: 'اشرف صبحى عبده سليم',
      noPrintedBelowImgInID: 'HP3369610',
      phoneNo: '01010326632',
      mail: 'k.elsiad@outlook.com',
      address: 'محاورة 53 عماره 20 ثان العاشر من رمضان - الشرقية',
      socialStuts: 'متزوج',
      partnerName: 'نهي عطية عبد العزيز عطية',
      partnerId: '28609260101102',
      natID: '27801071301251',
      pw: 'M77XVDPH',
    },
    {
      name: 'الهام سامى محمد إبراهيم حتحوت',
      noPrintedBelowImgInID: 'GC9140970',
      phoneNo: '01010326632',
      mail: 'elham_12121@hotmail.com',
      address: 'الطراديه – مركز الابراهيميه - الشرقية',
      socialStuts: 'اعزب',
      partnerName: 'none',
      partnerId: 'none',
      natID: '29701061301329',
      pw: 'KZDAV82W',
    },
    {
      name: 'باسل السيد عبدالفتاح عبدالرسول',
      noPrintedBelowImgInID: 'IH3138279',
      phoneNo: '01005256440',
      mail: 'Basel__10@outlook.com',
      address:
        'شقة 4 عمارة 15 مجمع عبد المقصود امام البنك العربى الافريقيى الدولى الاردنية العاشر من رمضان',
      socialStuts: 'اعزب',
      partnerName: 'none',
      partnerId: 'none',
      natID: '29408250101978',
      pw: '44QMWWKK',
    },
    {
      name: 'خالد عبد الغفار محمد فرس',
      noPrintedBelowImgInID: 'HC0048856',
      phoneNo: '01111651116',
      mail: 'khaled12132@outlook.com',
      address: 'كفر عشما – مركز الشهداء - المنوفية',
      socialStuts: 'متزوج',
      partnerName: 'جميلة عبد الحافظ فضيل امبارك',
      partnerId: '27906031700923',
      natID: '26806300104056',
      pw: 'XE8UVEZA',
    },
    {
      name: 'رابحه سالم  متولى سالم',
      noPrintedBelowImgInID: 'GE4566942',
      phoneNo: '01010326632',
      mail: 'rabha_1@outlook.com',
      address: 'بير عماره مركز بلبيس - الشرقية',
      socialStuts: 'مطلق',
      partnerName: 'none',
      partnerId: 'none',
      natID: '25806091300469',
      pw: 'PYRUPHFP',
    },
    {
      name: 'رباب إسماعيل بدران سيد اسماعيل',
      noPrintedBelowImgInID: 'HC8259739',
      phoneNo: '01010326636',
      mail: 'rabab_112@outlook.com',
      address:
        '120 شارع 4 حى الاسرة– الشيخ زايد – الإسماعيلية ثالث - الاسماعيلية',
      socialStuts: 'متزوج',
      partnerName: 'هشام محمود محمد احمد القصاص',
      partnerId: '27301130201212',
      natID: '28110131900347',
      pw: 'CR4XWCDG',
    },
    {
      name: 'رضا محمد زكي خليل علي',
      noPrintedBelowImgInID: 'HB5029154',
      phoneNo: '01111651116',
      mail: 'reda_1112@outlook.com',
      address: 'السعيديه مركز بلبيس - الشرقية',
      socialStuts: 'متزوج',
      partnerName: 'مشيره محمد عيسي بيومي',
      partnerId: '28603031302708',
      natID: '27810151303238',
      pw: 'XXPQ8HQP',
    },
    {
      name: 'سميحه توفيق منصور ',
      noPrintedBelowImgInID: 'FL0144519',
      phoneNo: '01111651116',
      mail: 'sameha12121@outlook.com',
      address: 'كفر عشما – مركز الشهداء - المنوفية',
      socialStuts: 'متزوج',
      partnerName: 'عبد الغفار محمد فرس',
      partnerId: '24204221700576',
      natID: '24802011701485',
      pw: 'GMNWXJPA',
    },
    {
      name: 'سهير محمد ابراهيم مرسى',
      noPrintedBelowImgInID: 'HZ3053717',
      phoneNo: '01010326632',
      mail: 'sohair_10@outlook.com',
      address:
        'شقة 3 عمارة 15 مجمع عبد المقصود امام السنترال الارنية العاشر من رمضان',
      socialStuts: 'متزوج',
      partnerName: 'حسام الدين مصطفى السيد الشافعى',
      partnerId: '25911210100854',
      natID: '26512061300944',
      pw: 'TKCETTEL',
    },
    {
      name: 'صابر سالم متولى سالم',
      noPrintedBelowImgInID: 'HC6982945',
      phoneNo: '01111651116',
      mail: 'saber_111222@hotmail.com',
      address: 'شقة 4 قطعة 508 و 510 و 512 مجاورة 12 العاشر من رمضان',
      socialStuts: 'متزوج',
      partnerName: 'سعديه حنفى على حسن شهاب',
      partnerId: '26111041302768',
      natID: '26503151301436',
      pw: 'C66QAVRC',
    },
    {
      name: 'عبدالله إسماعيل بدران سيد اسماعيل',
      noPrintedBelowImgInID: 'GN8509702',
      phoneNo: '01010326632',
      mail: 'abdulla_1112@outlook.com',
      address:
        '48 ب امام نادى المنتزه – الشيخ زايد – الإسماعيلية ثالث - الاسماعيلية',
      socialStuts: 'متزوج',
      partnerName: 'زينب رشاد محمد مرسى أبو حجر',
      partnerId: '29612201301763',
      natID: '28803183100034',
      pw: 'T3N37MU2',
    },
    {
      name: 'عبدرب النبى عبدالله عبدالله على السيد',
      noPrintedBelowImgInID: 'HY5145738',
      phoneNo: '01010326634',
      mail: 'Abdo_-10@outlook.com',
      address:
        'شقة 4 عمارة 15 مجمع عبد المقصود2 امام البنك العربى الافريقى الدولى الاردنية العاشر من رمضان',
      socialStuts: 'متزوج',
      partnerName: 'نجوى محمد محمود اسماعيل',
      partnerId: '28110171301748',
      natID: '27107141301331',
      pw: 'RK5ZR25C',
    },
    {
      name: 'عزيزة السيد محمد ابراهيم',
      noPrintedBelowImgInID: 'HJ5905261',
      phoneNo: '01020382605',
      mail: 'akml12121@outlook.com',
      address: '21 مجاورة3 مربع 7 العاشر من رمضان - الشرقية',
      socialStuts: 'متزوج',
      partnerName: 'اكمل حسن حسين سليم',
      partnerId: '27402131300959',
      natID: '28004291300686',
      pw: '633KC7ZU',
    },
    {
      name: 'علاء محمد إبراهيم مرسى',
      noPrintedBelowImgInID: 'HD2061119',
      phoneNo: '01020382605',
      mail: 'alaa_112233@outlook.com',
      address: '5ش الحديقة – شبرا الخيمة ثان - القليوبية',
      socialStuts: 'متزوج',
      partnerName: 'نورا السيد محمد مصطفى',
      partnerId: '29008111303029',
      natID: '27006201303575',
      pw: 'U5LE7SP2',
    },
    {
      name: 'عمرو صابر سالم متولى',
      noPrintedBelowImgInID: 'IM1045741',
      phoneNo: '01111651116',
      mail: 'amrsaber_1121@outlook.com',
      address: 'بير عماره -مركز بلبيس- الشرقية',
      socialStuts: 'متزوج',
      partnerName: 'نهاد منصور عبدالغفار السيد عرفه',
      partnerId: '29703011314848',
      natID: '28707281301537',
      pw: 'T47RSA6D',
    },
    {
      name: 'محسن محمد تهامي عبدالرحمن',
      noPrintedBelowImgInID: 'HE0185670',
      phoneNo: '01111651116',
      mail: 'mohsen_12121@hotmail.com',
      address: '39 مربع رقم 4 مجاورة 31 – العاشر من رمضان - الشرقية',
      socialStuts: 'متزوج',
      partnerName: 'اولفت عبدالله صديق صالح',
      partnerId: '27012042301086',
      natID: '26404120102933',
      pw: 'MPU3UGYN',
    },
    {
      name: 'محمد إسماعيل بدران سيد اسماعيل',
      noPrintedBelowImgInID: 'FP7610882',
      phoneNo: '01010326634',
      mail: 'mohamed_22112@outlook.com',
      address: '16 التمليك – الشيخ زايد – الإسماعيلية ثالث - الاسماعيلية',
      socialStuts: 'متزوج',
      partnerName: 'رانيا مندوه سليمان حسن على',
      partnerId: '28404151900461',
      natID: '28006120201151',
      pw: '7GVBFPGY',
    },
    {
      name: 'محمد حسام الدين مصطفي السيد الشافعى',
      noPrintedBelowImgInID: 'IM6901329',
      phoneNo: '01111651116',
      mail: 'mohamed212130@outlook.com',
      address: 'قطعة 18 -بلوك 18035 – الحي التاسع – العبور -القليوبية',
      socialStuts: 'متزوج',
      partnerName: 'اسراء جمال السيد احمد علي سيد احمد',
      partnerId: '29312291301003',
      natID: '28805068800491',
      pw: 'VWHJW2GV',
    },
    {
      name: 'محمد حسين حجاب متولى',
      noPrintedBelowImgInID: 'HE0496125',
      phoneNo: '01010326636',
      mail: 'm_hussin_1@outlook.com',
      address: 'بير عماره مركز بلبيس - الشرقية',
      socialStuts: 'متزوج',
      partnerName: 'صالحة عطيه سليمان السيد رفاعي',
      partnerId: '28012101302362',
      natID: '27607061301333',
      pw: '6Q4H6LFF',
    },
    {
      name: 'محمد عبد الغفار محمد حسب الله',
      noPrintedBelowImgInID: 'FY4879078',
      phoneNo: '01111651116',
      mail: 'mohamedabdo12121@outlook.com',
      address: '8أ مجاورة 62 – ثان العاشر من رمضان - الشرقية',
      socialStuts: 'متزوج',
      partnerName: 'هدايا سعيد السيد ابوزهو',
      partnerId: '28204171701481',
      natID: '27103190100338',
      pw: 'YY7EPKYZ',
    },
    {
      name: 'محمد عبدالفتاح عبدالجواد عبدربه',
      noPrintedBelowImgInID: 'IK9224368',
      phoneNo: '01066405924',
      mail: 'mohamedabdo121121@outlook.com',
      address: '46 ش خضر التونى مدينة نصر اول - القاهرة',
      socialStuts: 'متزوج',
      partnerName: 'غاده يسرى السيد محمد ممدوح ',
      partnerId: '28707150102229',
      natID: '28705060101778',
      pw: 'XNBLCBDP',
    },
    {
      name: 'مى حسام الدين مصطفى السيد الشافعى',
      noPrintedBelowImgInID: 'IM6904937',
      phoneNo: '01010326634',
      mail: 'mai_11122@outlook.com',
      address: '36 مجاورة 37 العاشر من رمضان - الشرقية',
      socialStuts: 'مطلق',
      partnerName: 'none',
      partnerId: 'none',
      natID: '28909188800703',
      pw: 'PA5Q7ZYJ',
    },
    {
      name: 'ناصر صابر سالم متولى',
      noPrintedBelowImgInID: 'GX9063085',
      phoneNo: '01111651116',
      mail: 'nasr_1112@outlook.com',
      address: 'بير عماره مركز بلبيس - الشرقية',
      socialStuts: 'متزوج',
      partnerName: 'شرين اشرف فتحى محمد صابر',
      partnerId: '29603201305409',
      natID: '29001201305999',
      pw: 'DAAGRZ8Q',
    },
    {
      name: 'نبوى عبد الموجود سليم عبده',
      noPrintedBelowImgInID: 'HO7921150',
      phoneNo: '01111651116',
      mail: 'Nabawi_10@hotmail.com',
      address: 'ق 151 مجاورة 64 ثان العاشر من رمضان محافظة الشرقية',
      socialStuts: 'متزوج',
      partnerName: 'اميره محمود السيد محمد عبده',
      partnerId: '27504281300806',
      natID: '26407301302135',
      pw: 'QQTYMVTC',
    },
    {
      name: 'نورهان محسن محمد تهامى',
      noPrintedBelowImgInID: 'GS6314385',
      phoneNo: '01111651116',
      mail: 'mohsen_12121@hotmail.com',
      address: '5 جراند مول العاشر من رمضان - الشرقية',
      socialStuts: 'اعزب',
      partnerName: 'none',
      partnerId: 'none',
      natID: '29903101304328',
      pw: '6P6DEQLD',
    },
  ];

  idsList;
  pwList;

  constructor() {
    this.idsList = [
      this.users[0].natID,
      this.users[1].natID,
      this.users[2].natID,
      this.users[3].natID,
      this.users[4].natID,
      this.users[5].natID,
      this.users[6].natID,
      this.users[7].natID,
      this.users[8].natID,
      this.users[9].natID,
      this.users[10].natID,
      this.users[11].natID,
      this.users[12].natID,
      this.users[13].natID,
      this.users[14].natID,
      this.users[15].natID,
      this.users[16].natID,
      this.users[17].natID,
      this.users[18].natID,
      this.users[19].natID,
      this.users[20].natID,
      this.users[21].natID,
      this.users[22].natID,
      this.users[23].natID,
      this.users[24].natID,
      this.users[25].natID,
      this.users[26].natID,
      this.users[27].natID,
    ];
    this.pwList = [
      this.users[0].pw,
      this.users[1].pw,
      this.users[2].pw,
      this.users[3].pw,
      this.users[4].pw,
      this.users[5].pw,
      this.users[6].pw,
      this.users[7].pw,
      this.users[8].pw,
      this.users[9].pw,
      this.users[10].pw,
      this.users[11].pw,
      this.users[12].pw,
      this.users[13].pw,
      this.users[14].pw,
      this.users[15].pw,
      this.users[16].pw,
      this.users[17].pw,
      this.users[18].pw,
      this.users[19].pw,
      this.users[20].pw,
      this.users[21].pw,
      this.users[22].pw,
      this.users[23].pw,
      this.users[24].pw,
      this.users[25].pw,
      this.users[26].pw,
      this.users[27].pw,
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
    localStorage.setItem(
      'noPrintedBelowImgInID',
      this.users[userIndex].noPrintedBelowImgInID
    );
    localStorage.setItem('name', this.users[userIndex].name);
    localStorage.setItem('partnerName', this.users[userIndex].partnerName);
  }
  saveLand(id) {
    localStorage.setItem('title', this.lands[id].title);
    localStorage.setItem('startDate', this.lands[id].startDate);
    localStorage.setItem('endDate', this.lands[id].endDate);
    localStorage.setItem('availaleLands', this.lands[id].availaleLands);
    localStorage.setItem('desc', this.lands[id].desc);
    localStorage.setItem('attension', this.lands[id].attension);
    localStorage.setItem('img', this.lands[id].img);
  }
  getLandTitle(id) {
    return this.lands[id].title;
  }
  clearLands() {
    localStorage.removeItem('title');
    localStorage.removeItem('startDate');
    localStorage.removeItem('endDate');
    localStorage.removeItem('availaleLands');
    localStorage.removeItem('desc');
    localStorage.removeItem('attension');
    localStorage.removeItem('img');
  }
}
