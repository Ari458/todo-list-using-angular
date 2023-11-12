import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit,OnDestroy {

  constructor() { }

  ngOnInit(): void {
    console.log("hi")
   }
   ngOnDestroy(): void {
     console.log("bye")
   }
 

}
