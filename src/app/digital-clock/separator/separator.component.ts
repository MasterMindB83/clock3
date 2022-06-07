import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-separator',
  templateUrl: './separator.component.html',
  styleUrls: ['./separator.component.scss']
})
export class SeparatorComponent implements OnInit {

  @Input("oncolor") onColor="red";
  @Input('separator-id') separatorId="separator_0";
  @Input('height') height=300;
  constructor() { }

  ngOnInit(): void {
    
    setTimeout(() => {
      let digiClock=document.getElementById(this.separatorId) as HTMLDivElement;

      digiClock.style.height = this.height+"px";
      digiClock.style.width = (this.height/3)+"px";
  }, 10);
  }

}
