import { Component, Input } from '@angular/core';

@Component({
  selector: 'solution-for-stackoverflow',
  templateUrl: 'header.component.html'
})
export class HeaderComponent {
  // -----------------------------------------------------------------------//
  private title = 'Angular 4';
  @Input() angularVersion: string = '';
  @Input() materialVersion: string = '';

  private stackoverflowUrl: string = 'https://stackoverflow.com/users/1791913/faisal';
  private linkedinUrl: string = 'https://www.linkedin.com/in/mohammadfaysal/';
  private fiverrUrl:string = 'https://www.fiverr.com/faisalmuhammad_';
  // -----------------------------------------------------------------------//
}
