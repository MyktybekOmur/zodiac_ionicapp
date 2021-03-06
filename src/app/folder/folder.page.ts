import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public ay_i:string;
  public ay:number=0;
  public burc:string="Bilgi girilmedi!";
  public max_gun:number=0;
  public burc_r:string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
  aylar(ay){
    this.ay=ay;
    switch(this.ay){
      case 0:{this.ay_i="Girilmedi"; break;}
      case 1:{this.ay_i="Ocak";this.max_gun=31;break;}
      case 2:{this.ay_i="Şubat";this.max_gun=30;break;}
      case 3:{this.ay_i="Mart";this.max_gun=31;break;}
      case 4:{this.ay_i="Nısan";this.max_gun=30;break;}
      case 5:{this.ay_i="Mayıs";this.max_gun=31;break;}
      case 6:{this.ay_i="Hazıran";this.max_gun=30;break;}
      case 7:{this.ay_i="Temuz";this.max_gun=31;break;}
      case 8:{this.ay_i="Austos";this.max_gun=31;break;}
      case 9:{this.ay_i="Eylül";this.max_gun=30;break;}
      case 10:{this.ay_i="Ekim";this.max_gun=31;break;}
      case 11:{this.ay_i="Kasım";this.max_gun=30;break;}
      case 12:{this.ay_i="Aralık";this.max_gun=31;break;}
    }
    
  }
  burclar(ay,gun){

      if((ay==1 && gun<=22) ||(ay==12 && gun>=23)){
        this.burc="Oğlak Burcu";
        this.burc_r="https://www.hediyesepeti.com/blog/wp-content/uploads/2018/08/oglak-burcu-tarihi-ve-ozellikleri.jpg";
      }else if((ay==1 && gun>=22) ||(ay==2 && gun<19)){
        this.burc="Kova Burcu";
        this.burc_r="https://www.hediyesepeti.com/blog/wp-content/uploads/2018/08/kova-burcu-tarihi-ve-ozellikleri.jpg";
      }else if((ay==2 && gun>=19) || (ay==3 && gun<20)  ){
        this.burc="Balık Burcu";
        this.burc_r="https://www.hediyesepeti.com/blog/wp-content/uploads/2018/08/kova-burcu-tarihi-ve-ozellikleri.jpg";
      }
      else if((ay==3 && gun>=20) || (ay==4 && gun<20)  ){
        this.burc="Koç Burcu";
        this.burc_r="https://www.hediyesepeti.com/blog/wp-content/uploads/2018/08/koc-burcu-tarihleri-ve-ozellikleri.jpg";
      }
      else if((ay==4 && gun>=20) || (ay==5 && gun<22)  ){
        this.burc="Boğa Burcu";
        this.burc_r="https://www.hediyesepeti.com/blog/wp-content/uploads/2018/08/boga-burcu-tarihleri-ve-ozellikleri.jpg";
      }else if((ay==5 && gun>=20) || (ay==6 && gun<22)  ){
        this.burc="İkizler Burcu";
        this.burc_r="https://www.hediyesepeti.com/blog/wp-content/uploads/2018/08/ikizler-burcu-tarihleri-ve-ozellikleri.jpg";
      }
      else if((ay==6 && gun>=20) || (ay==7 && gun<23)  ){
        this.burc="Yengeç Burcu";
        this.burc_r="https://www.hediyesepeti.com/blog/wp-content/uploads/2018/08/yengec-burcu-tarihleri-ve-ozellikleri.jpg";
      }
      else if((ay==7 && gun>=23) || (ay==8 && gun<23)  ){
        this.burc="Aslan Burc";
        this.burc_r="https://www.hediyesepeti.com/blog/wp-content/uploads/2018/08/yengec-burcu-tarihleri-ve-ozellikleri.jpg";
      }
      else if((ay==8 && gun>=23) || (ay==9 && gun<23)  ){
        this.burc="Başak Burcu";
        this.burc_r="https://www.hediyesepeti.com/blog/wp-content/uploads/2018/08/basak-burcu-tarihleri-ve-ozellikleri.jpg";
      }
      else if((ay==9 && gun>=23) || (ay==10 && gun<23)  ){
        this.burc="Terazi Burcu";
        this.burc_r="https://www.hediyesepeti.com/blog/wp-content/uploads/2018/08/terazi-burcu-tarihleri-ve-ozellikleri.jpg";
      }
      else if((ay==10 && gun>=23) || (ay==11 && gun<23)  ){
        this.burc="Akrep Burcu";
        this.burc_r="https://www.hediyesepeti.com/blog/burc-tarihleri-ve-ozellikleri/";
      }
      else if((ay==11 && gun>=23) || (ay==12 && gun<23)  ){
        this.burc="Yay Burcu";
        this.burc_r="https://www.hediyesepeti.com/blog/wp-content/uploads/2018/08/yengec-burcu-tarihleri-ve-ozellikleri.jpg";
      }
      else if(ay==12 && gun<23  ){
        this.burc="Aslan Burc";
        this.burc_r="https://www.hediyesepeti.com/blog/wp-content/uploads/2018/08/yengec-burcu-tarihleri-ve-ozellikleri.jpg";
      }
  }

}
