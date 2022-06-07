import { Component, Input, OnInit } from '@angular/core';
interface digitalNum{
  [key: number]: string [];
}
@Component({
  selector: 'app-digit',
  templateUrl: './digit.component.html',
  styleUrls: ['./digit.component.scss']
})
export class DigitComponent implements OnInit {
  
  @Input('oncolor') onColor = "blue";
  @Input('offcolor') offColor = "black";
  @Input('backcolor') backColor = "black";
  digitColor = ["red","red","red","red","red","red","red"];
  map:digitalNum;
  @Input("num") num=0;
  @Input("height") height=300;
  constructor() {
    this.map={
      0:["","","","","",""]
    }
   }
  @Input('digit-id') digitId:string="digit_0";

  ngOnInit(): void {
    setTimeout(() => {
      let digiClock=document.getElementById(this.digitId) as HTMLDivElement;

      digiClock.style.height = this.height+"px";
      digiClock.style.width = (this.height*2/3)+"px";
  }, 10);


    this.map[0]=[this.onColor,
                this.onColor,
                this.onColor,
                this.offColor,
                this.onColor,
                this.onColor,
                this.onColor];
    this.map[1]=[this.offColor,
                this.offColor,
                this.onColor,
                this.offColor,
                this.offColor,
                this.onColor,
                this.offColor];
    this.map[2]=[this.onColor,
                this.offColor,
                this.onColor,
                this.onColor,
                this.onColor,
                this.offColor,
                this.onColor];
                
    this.map[3]=[
      this.onColor,
      this.offColor,
      this.onColor,
      this.onColor,
      this.offColor,
      this.onColor,
      this.onColor];
      
 this.map[4]=[
      this.offColor,
      this.onColor,
      this.onColor,
      this.onColor,
      this.offColor,
      this.onColor,
      this.offColor];
      
this.map[5]=[
      this.onColor,
      this.onColor,
      this.offColor,
      this.onColor,
      this.offColor,
      this.onColor,
      this.onColor];
  this.map[6]=[this.onColor,
              this.onColor,
              this.offColor,
              this.onColor,
              this.onColor,
              this.onColor,
              this.onColor];
  this.map[7]=[this.onColor,
              this.onColor,
              this.onColor,
              this.offColor,
              this.offColor,
              this.onColor,
              this.offColor];
  this.map[8]=[this.onColor,
              this.onColor,
              this.onColor,
              this.onColor,
              this.onColor,
              this.onColor,
              this.onColor];
this.map[9]=[this.onColor,
            this.onColor,
            this.onColor,
            this.onColor,
            this.offColor,
            this.onColor,
            this.onColor];
            
    setInterval(()=>{
      this.digitColor=this.map[this.num];
    },1000);
  }

}
