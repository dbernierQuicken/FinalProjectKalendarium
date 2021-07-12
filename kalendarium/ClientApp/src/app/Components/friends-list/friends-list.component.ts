import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface MockData {
  coworker: string;
  department: string;
  location: string;
  hideEvent: boolean;
}

const ELEMENT_DATA: MockData[] = [
  { coworker: "David Bernier", department: "Engineering", location: "Remote -- NYC", hideEvent: false },
  { coworker: "John", department: "Engineering", location: "Remote -- Det", hideEvent: false },
  { coworker: "Mary", department: "dep1", location: "Remote -- LA", hideEvent: false },
  { coworker: "Tim", department: "dep2", location: "DET", hideEvent: false },
  { coworker: "Eric", department: "dep3", location: "SF", hideEvent: false },

];

/**
 * @title Table with filtering
 */
@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent {
  displayedColumns: string[] = ['coworker', 'department', 'location', 'hideEvent'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public EventClick(result: string) {
    alert(`Click works for ${result}:

    Eventually will show event Details`)
  }

  public CoworkerClick(result: string) {
    alert(`Click works for ${result}:

    Eventually will show coworker details`)
  }
}

/*@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})*/
