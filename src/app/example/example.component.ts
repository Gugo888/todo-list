import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  template: '<p>example works! {{prop}}</p>',
  styles: ['p {color: red}']
})
export class ExampleComponent {

  prop = 1;

  constructor() {
    console.log('Constructor')
  }

  ngOnInit(): void {
    console.log('ngOnInit')
  }


  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }

}

