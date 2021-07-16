// import { FocResourcesComponent } from './../foc-resources/foc-resources.component';
import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {
  constructor(private _bottomSheet: MatBottomSheet) { }

  openBottomSheet(): void {
    alert(FocResourcesComponent);
    this._bottomSheet.open(FocResourcesComponent);
  }
}
@Component({
  selector: 'app-foc-resources',
  templateUrl: '../foc-resources/foc-resources.component.html',
  // styleUrls: ['../foc-resources/foc-resources.component.css']
})

export class FocResourcesComponent {
  constructor(private _bottomSheetRef: MatBottomSheetRef<FocResourcesComponent>) { }
  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
