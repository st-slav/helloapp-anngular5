import {Component} from '@angular/core';

@Component({
    selector: 'child-fourth-comp',
    template: `<hr>
              <p>{{counter}}<p>
              <hr>`,
    styles: [`hr {color: red;}`]
})
export class ChildFourthComponent {
    counter: number = 0;

    increment() {
        this.counter++;
    }

    decrement() {
        this.counter--;
    }
}
