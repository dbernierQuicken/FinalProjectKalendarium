import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})

export class FooterComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(FocResourcesComponent );
  }
}
@Component({
  selector: 'app-foc-resources',
  templateUrl: '../foc-resources/foc-resources.component.html',
  styleUrls: ['../foc-resources/foc-resources.component.css']
})


export class FocResourcesComponent{
  constructor(){};
}

