import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/guards/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {

  public senha = '';
  public senhaInvalida = false;
  public displayModal = false;

  private ob: any;

  constructor(private rota: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  public entrada(senha: string) {
    this.senha = senha;
    // console.log(this.senha);
  }

  public login() {
    let obs = {
      next: (data) => {
        console.log(data);
        if(data == true)
          this.rota.navigate(['alimentos']);
        else
          this.senhaInvalida = true;
      },
      err: (erro) => {
        this.senhaInvalida = true;
      },
      complete: () => {
        this.displayModal = false;
        console.log('complete');
      }
    }

    this.displayModal = true;
    this.ob = this.authService.autenticaUsuario(this.senha).subscribe(obs);
  }

  public ngOnDestroy(): void {
    console.log('Saindo do login');
    this.displayModal = false;
    console.log(this.displayModal);
    this.ob.unsubscribe();
  }

}// Fim do componente.
