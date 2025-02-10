import { RouterLink, RouterLinkActive } from '@angular/router';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
isLogin = input<boolean>(true);
}
