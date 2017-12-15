import {Component, OnInit, trigger, state, style, transition, animate} from '@angular/core';

@Component({
  selector: 'app-alimentos',
  templateUrl: './alimentos.component.html',
  styleUrls: ['./alimentos.component.css'],
  animations: [ trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(-100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class AlimentosComponent implements OnInit {

  public telaTamanho: number = window.innerWidth;
  public menuState:string = 'out';

  constructor() { }

  ngOnInit() {
  }

  // Calcula o tamanho da tela.
  public onResize(event) {
    this.telaTamanho = event.target.innerWidth;
    console.log(this.telaTamanho);
  }

  public toggleMenu() {
    // 1-line if statement that toggles the value:
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

}// Fim do componente.
