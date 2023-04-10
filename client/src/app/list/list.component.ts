import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, Subscription } from 'rxjs';
import { Item } from '../app.component';
import { ApiService } from '../app.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnDestroy{
  public $search = new FormControl();
  public result: Item[] = []
  private list: Item[] = [];
  private subscription = new Subscription();
  constructor(private apiService: ApiService) {
    this.subscription.add(this.$search.valueChanges.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(z=> z.toLowerCase())
    ).subscribe(str=> {
      this.result = this.list.filter(item => item.title.toLowerCase().includes(str))
    }))
  }

  ngOnInit(){
    this.apiService.getList().subscribe((z) => {
      this.list = z;
      this.result = [...this.list]
      console.log(z)
    });
  }

  public ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }
}
