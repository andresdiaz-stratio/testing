import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  public myControl: FormControl = new FormControl()

  public config: any = {
    iconButtonRight: "icon-arrow4_down",
    iconDropdownButton: "icon-view"
  }
}
