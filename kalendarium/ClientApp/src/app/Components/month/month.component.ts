import { Component, OnInit } from '@angular/core';
import { KalendariumApiService } from '../../Services/kalendarium-api.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})

export class MonthComponent {
  displayedColumns: string[] = ['date', 'monthName', 'dayName', 'holiday', 'payDay','eventsList', 'weekend'];
  dataSource;

  constructor(private calendarService: KalendariumApiService, private route: Router) {
    this.calendarService.GetTheCalendar(calResult => {
      this.dataSource = new MatTableDataSource(calResult);
  })
}

  public AddEvent(id) {
    this.calendarService.currentdate = id;
    this.route.navigateByUrl('/events/addEvent');
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
