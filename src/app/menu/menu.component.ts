import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishDetailComponent } from '../dish-detail/dish-detail.component';
import { DishService } from '../services/dish.service';

import { DISHES } from '../shared/dishes';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  dishes: Dish[];

  selectedDish: Dish;

  constructor(private dishService: DishService) { }
  
  ngOnInit() {
    //this.dishService.getDishes()
    //.then(dishes => this.dishes = dishes);
    this.dishService.getDishes().subscribe(dishes => this.dishes = dishes);

  }


  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }


}
