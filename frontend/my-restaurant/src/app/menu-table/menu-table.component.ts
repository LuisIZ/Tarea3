import { Component, OnInit } from '@angular/core';
import { MenuService } from '../_services/menu.service';

@Component({
  selector: 'app-menu-table',
  templateUrl: './menu-table.component.html',
  styleUrls: ['./menu-table.component.scss']
})
export class MenuTableComponent implements OnInit {

  dishes = [
    {
        "nombre_plato": "Lomo saltado",
        "precio_plato": 30,
        "created_date": "2021-10-01T05:00:00.000Z",
        "modified_date": "2021-10-11T05:00:00.000Z"
    },
    {
        "nombre_plato": "Tallarin saltado",
        "precio_plato": 25,
        "created_date": "2021-10-01T05:00:00.000Z",
        "modified_date": "2021-10-09T05:00:00.000Z"
    },
    {
        "nombre_plato": "Arroz chaufa",
        "precio_plato": 25,
        "created_date": "2021-10-01T05:00:00.000Z",
        "modified_date": "2021-10-10T05:00:00.000Z"
    },
    {
        "nombre_plato": "Ceviche",
        "precio_plato": 22,
        "created_date": "2021-10-03T05:00:00.000Z",
        "modified_date": "2021-10-08T05:00:00.000Z"
    }
]

  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit(): void {
    this.menuService.getDishes().subscribe(
      (data) => {this.dishes = data;}
    )
  }

}
