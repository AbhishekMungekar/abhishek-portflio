import { Component } from '@angular/core';
import{ Router} from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private route:Router){}

scrollEffect(fragment:any){
this.route.navigateByUrl("home#"+fragment)
}

}

