import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-complite',
  templateUrl: './search-complite.component.html',
  styleUrls: ['./search-complite.component.css']
})
export class SearchCompliteComponent implements OnInit {

  public wait: number = 10;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const worker = () => {
      if (this.wait > 0) {
        this.wait--;
        setTimeout(worker, 1000);
      } else {
        this.router.navigateByUrl("/gift");
      }
    }

    worker();
  }

}
