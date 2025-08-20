import { computed, inject, Injectable, signal } from '@angular/core';
import { User, UserResponse, UsersResponse } from '../interfaces/reqresponse';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs';
interface State {
  users: User[];
  loading: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  baseUrl = 'https://reqres.in/api';
  #state = signal<State>({
    loading: true,
    users: [],
  });

  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);

  private http = inject(HttpClient);
  constructor() {
    this.http
      .get<UsersResponse>(`${this.baseUrl}/users`)
      .pipe(delay(1500))
      .subscribe((res) => {
        this.#state.set({
          loading: false,
          users: res.data,
        });
      });
  }
  getUserbyId(id: string) {
    return this.http.get<UserResponse>(`${this.baseUrl}/users/${id}`).pipe(
      delay(1500),
      map((resp) => resp.data)
    );
  }
}
