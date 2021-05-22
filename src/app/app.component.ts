import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
  
})
export class AppComponent {
  title = 'WebSite';

  constructor(private router: Router) { }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });

        AOS.init({
          offset:130,
          duration:2500,
          once:true,
          
        });

    }
    
}


  