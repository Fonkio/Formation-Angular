import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Hero } from '../../models/heroes';
import { HeroService } from '../../models/hero.service';

@Component({
  selector: 'app-hero-edit',
  templateUrl: './hero-edit.component.html',
  styleUrls: ['./hero-edit.component.scss']
})
export class HeroEditComponent implements OnInit {

  hero!: Hero;

  heroForm = new UntypedFormGroup({
    id: new FormControl(this.hero.id),
    name: new FormControl(this.hero.name, {nonNullable: true, validators: [Validators.required]})
  });

  constructor(private heroService: HeroService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const heroIdFromRoute = Number(routeParams.get('heroId'));
    let result = this.heroService.findById(heroIdFromRoute);
    this.hero = result;
  }


  submit(): void {
    this.productSubmit.emit(this.productForm.value);
  }
}
