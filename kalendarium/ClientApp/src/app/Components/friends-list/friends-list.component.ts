import { LoginService } from './../../Services/login.service';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

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
  dataSource = null;
  userList;


constructor(private userService: LoginService){
  this.userService.GetAllUsers( res =>{
    this.dataSource = new MatTableDataSource(res) ;
  })
}

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
