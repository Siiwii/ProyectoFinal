import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-errorfield',
  templateUrl: './errorfield.component.html',
  styleUrls: ['./errorfield.component.scss']
})
export class ErrorfieldComponent{

  @Input() errorMsg: string;
  @Input() displayError: boolean;
  
}
