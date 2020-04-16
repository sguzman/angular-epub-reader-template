import { Component } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'ReadMe';
  tabs: string[] = ['Home']
  selected = new FormControl(0);

  public addTab() {
    this.tabs.push('New');
    this.selected.setValue(this.tabs.length - 1);
  }

  public removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
}
