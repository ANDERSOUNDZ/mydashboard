import { Component, computed, Inject, inject, signal } from '@angular/core';
import { Title } from '../../../shared/title/title';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../interfaces/reqresponse';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { UsersService } from '../../../services/usersservice';

@Component({
  selector: 'app-user',
  imports: [Title],
  template: `
    <app-title [title]="titleLabel()" />
    <div class="text-white">
      @if (user()) {
      <section>
        <img [srcset]="user()?.avatar" [alt]="user()?.first_name" />
        <div>
          <h3>{{ user()?.first_name }} {{ user()?.last_name }}</h3>
          <p>{{ user()?.email }}</p>
        </div>
      </section>
      }@else {
      <p>Cargando datos</p>
      }
    </div>
  `,
})
export default class UserC {
  titleLabel = computed(
    ()=>{
      if(this.user()){
       return `Información del Usuario ${this.user()?.first_name} ${this.user()?.last_name}`; 
      }
      return 'información del usuario no disponible'
    }
  );
  private route = inject(ActivatedRoute);
  private userService = inject(UsersService);
  //public user = signal<User | undefined>(undefined);
  public user = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.userService.getUserbyId(id))
    )
  );
}
