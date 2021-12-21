import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfoComponent } from './info/info.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  courierProvider = [
    'EKart',
    'ECom',
    'Delhivery',
    'XpressBees',
    'Bluedart',
    'DTDC',
    'Gati',
    'ShadowFax',
  ];

  constructor(public dialog: MatDialog) {}

  openDialog() {
    console.log('open info');
    const dialogRef = this.dialog.open(InfoComponent);
  }
}
