import { Component } from '@angular/core';

@Component({
  selector: 'app-template-syntax',
  templateUrl: './template-syntax.component.html',
  styleUrls: ['./template-syntax.component.scss']
})
export class TemplateSyntaxComponent {
  readonly title = 'my-app';
  now = new Date();
  btnDisabled = false;
  worlds = ["Test1", "Test2", "Test3"]

  clickedToggleBtn() {
    this.btnDisabled = !this.btnDisabled;
  }
}
