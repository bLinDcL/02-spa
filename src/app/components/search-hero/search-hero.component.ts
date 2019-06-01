import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-search-hero',
  templateUrl: './search-hero.component.html',
  styles: []
})
export class SearchHeroComponent implements OnInit {

  heroArr: Heroe[];
  texto: string;

  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.texto = params.texto;
      this.heroArr = this.heroesService.buscarHeroes(params.texto);
    });
  }

}
