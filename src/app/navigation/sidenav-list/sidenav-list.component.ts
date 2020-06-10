import { Component, OnInit } from '@angular/core';
import { SidenavServiceService } from 'src/app/sidenav-service.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {

  constructor(
    private sidenav: SidenavServiceService
  ) { }

  toggleRightSidenav() {
    this.sidenav.toggle();
  }
  ngOnInit(): void {
  }


}
