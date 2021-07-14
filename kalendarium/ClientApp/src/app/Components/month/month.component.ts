import { Component, OnInit } from '@angular/core';
import { KalendariumApiService } from '../../Services/kalendarium-api.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})

export class MonthComponent {
  displayedColumns: string[] = ['date', 'monthName', 'dayName', 'eventsList', 'holiday', 'payDay', 'weekend'];
  calendar = null;
  dataSource = null;

  constructor(private calendarService: KalendariumApiService) {
    this.calendar = calendarService;

    this.showall();
  }
  ngOnInit() {
  }

  showall() {
    this.calendar.GetTheCalendar(calResult => {
      this.dataSource = new MatTableDataSource(calResult);
      console.log(calResult);
      console.log(this.dataSource);
    });
  }

  AddEvent() {
    alert("TEST CLICK")
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    /*    console.log(this.dataSource);
        console.log(this.dataSource.filter);*/
  }
}
