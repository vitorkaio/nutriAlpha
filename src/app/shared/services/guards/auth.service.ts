import { Observable } from "rxjs/Rx";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {

  private senha: string = "vih";
  private autenticado: boolean = false;

  constructor() {}

  /**
   * Autentica o usuário no sistema.
   *
   * @param {string} pass
   * @returns {Observable<boolean>}
   * @memberof AuthService
   */
  public autenticaUsuario(pass: string): Observable<boolean> {

      return Observable.create( observe => {

        let obs = { next: (data) => {
          //console.log(data);

          if (pass == this.senha)
            this.autenticado = true;
          else
            this.autenticado = false;

          observe.next(this.autenticado);
        },
        err: (erro) => {
          console.log('Erro ao verificar login no servidor!');
          this.autenticado = false;
          observe.err(false);
        },
        complete: () => {
          //console.log('Complete');
          observe.complete(this.autenticado);
        }
      }

      this.loginServidor(pass).subscribe(obs);

    });
  }

  /**
   * Retorna a situação do usuário, se está ou não autenticado.
   *
   * @returns true se estiver autenticado, false caso contrário.
   * @memberof AuthService
   */
  public getAutenticado() {
    return this.autenticado;
  }

  /**
   * Verifica se a senha existe no servidor, caso sim o usuário será autenticado, caso contrário não.
   * Emula uma requisição em um servidor.
   *
   * @param {string} senha
   * @returns {Observable<any>}
   * @memberof AuthService
   */
  public loginServidor(senha: string): Observable<any> {
    return Observable.timer(5000);
  }

} // Fim do serviço.
