import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SideMenu } from '../shared/side-menu/side-menu';

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule, SideMenu],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export default class Dashboard {

}
