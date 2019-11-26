import { Component } from '@angular/core';
import { Employee } from './shared/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-httpclient-app';
}
// Employee(name) {
//   this._publicationService.searchPublicationUser(this.token).subscribe(
//       response => {
//           this.refresh();
//       },
//       error => {
//           console.log(<any>error);
//       }
//   );
// }