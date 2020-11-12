import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <div>
    <h3>
      Unable to load App configuration, please contact your administrator.
    </h3>
  </div>`,
  styles: ['div {display:flex; justify-content:center; color:grey}'],
})
export class ConfigFailoverComponent {}
