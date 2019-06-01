import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-tarjeta',
  templateUrl: './hero-tarjeta.component.html',
  styles: []
})
export class HeroTarjetaComponent implements OnInit {

  @Input() hero: any = {};
  @Input() index: number;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroe(id: number) {
    // console.log(this.index);
    this.router.navigate( ['hero', this.index ] );
    // this.heroeSeleccionado.emit(this.index);
    console.log(this.heroeSeleccionado);
  }

}
