import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Fruit } from '../fruit';
import { FruitService } from '../fruit.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  constructor(private fruitService: FruitService, private router: Router) {}

  formdata: Fruit = {
    id:0,
    name:'',
    quantity:0,
    price:0
  }

  Create()
  {
    this.fruitService.create(this.formdata).subscribe({
      next:(data) =>{
        this.router.navigate(["/fruit/home"])
      },
      error: (er) => {
        console.log(er);
      }
    })
  }

}
