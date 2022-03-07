import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-complite',
  templateUrl: './search-complite.component.html',
  styleUrls: ['./search-complite.component.css']
})
export class SearchCompliteComponent implements OnInit, OnDestroy {

  public wait: number = 10;
  private timeoutRef: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const worker = () => {
      if (this.wait > 0) {
        this.wait--;
        this.timeoutRef = setTimeout(worker, 1000);
      } else {
        this.router.navigateByUrl("/gift");
      }
    }

    worker();
  }

  ngOnDestroy() { 
    clearTimeout(this.timeoutRef);
  }

}
