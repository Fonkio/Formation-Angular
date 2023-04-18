import { Component } from '@angular/core';
import { CartService } from 'src/app/modules/product/services/cart.service';
import { AuthService, Credentials } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(readonly cartService: CartService, readonly authService: AuthService) { }

  private credentialBidon: Credentials = {email: '', pwd: ''};

  loginClicked() {
    this.authService.login(this.credentialBidon);
  }

  logoutClicked() {
    this.authService.logout();
  }
}
