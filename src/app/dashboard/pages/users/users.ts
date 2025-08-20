import { Component, inject } from '@angular/core';
import { UsersService } from '../../../services/usersservice';
import { Title } from "../../../shared/title/title";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [Title, RouterLink],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export default class Users {
  public usersService = inject(UsersService);
}
