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
  dataSource;

  constructor(private calendarService: KalendariumApiService) {
    this.calendarService.GetTheCalendar(calResult => {
      this.dataSource = new MatTableDataSource(calResult);
  })
}

  public AddEvent() {
    alert("TEST CLICK")
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
