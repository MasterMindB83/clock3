import { getLocaleDateTimeFormat } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.scss']
})
export class DigitalClockComponent implements OnInit {
  @Input('oncolor') onColor = "yellow";
  @Input('offcolor') offColor = "#cccc00";
  @Input('backcolor') backColor = "#cccccc";
  @Input("height") height=200;
  hour_0:number=0;
  hour_1:number=0;
  minute_0:number=0;
  minute_1:number=0;
  second_0:number=0;
  second_1:number=0;
  constructor() { }

  ngOnInit(): void {
   
    let clock = document.getElementById("digital_clock") as HTMLDivElement;
    clock.style.width = (this.height*4.8)+"px";

    setInterval(()=>{
      let time = new Date();
      let hours=time.getHours().toString();
      
      if(hours.length>1)
      {
        this.hour_0 =parseInt(hours.substring(0,1));
        this.hour_1 =parseInt(hours.substring(1,2));
      }
      else{
        this.hour_0 =0;
        this.hour_1 =parseInt(hours);

      }


      let minutes=time.getMinutes().toString();

      if(minutes.length>1)
      {
        this.minute_0 =parseInt(minutes.substring(0,1));
        this.minute_1 =parseInt(minutes.substring(1,2));
      }
      else{
        this.minute_0 =0;
        this.minute_1 =parseInt(minutes);

      }


      let seconds=time.getSeconds().toString();

      if(seconds.length>1)
      {
        this.second_0 =parseInt(seconds.substring(0,1));
        this.second_1 =parseInt(seconds.substring(1,2));
      }
      else{
        this.second_0 =0;
        this.second_1 =parseInt(seconds);

      }
    },1000);
  }

}
