import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

/** Nested Component */
import { UserComponent } from 'app/app.component';
import { UserService } fromt 'app/app.service';

@Component({
  selector: 'my-app',
  directives: [UserComponent],
  styles: [`
  h1 {
    color:#545454;
    background:#02A8F4;
    padding:15px;
    box-shadow:2px 2px 2px 0 rgba(0, 0, 0, 0.3);
  }
  `]
  template: `
  <div>
  <h1>Hello from the {{componentName}}.</h1>
  <my-friends></my-friends>
  </div>
  `
})
export class AppComponent {
  componentName : string = 'AppComponent';
}
bootstrap(AppComponent)

