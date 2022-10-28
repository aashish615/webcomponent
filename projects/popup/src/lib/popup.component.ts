import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-popup',
  template: `
   <div class="wrapper">
    <div class="container" [style.height]="height" [style.width]="width" >
    <p>{{message}}</p>
    </div>
    <div class="wrapper__btn">
      <button (click)="onClick.emit(true)">
        close
      </button>
    </div>
  </div>
  `,
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  @Input() showPopup = false;
  @Input() message = 'popup web component works';
  @Input() height = '300px';
  @Input() width = '500px';
  @Output() onClick: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
