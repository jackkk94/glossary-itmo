import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, of, Subscription, switchMap } from 'rxjs';
import { Item } from '../app.component';
import { ApiService } from '../app.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnDestroy{
  public data!: Item;
  private subscription = new Subscription();
  private id: number | undefined;
  constructor(
    activateRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router){
      this.subscription.add(activateRoute.params.pipe(
        map(params=> this.id = params['id']),
        switchMap(()=> this.id? this.apiService.getById(this.id) : of())
      ).
      subscribe(result=>this.data = result))
  }

  
  public back():void{
    this.router.navigate(['/']);
  }

  public ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }
}
