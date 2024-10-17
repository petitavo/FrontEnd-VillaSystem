import { Component, ViewChild } from '@angular/core';
import { MatListItem, MatNavList } from "@angular/material/list";
import { MatIcon } from "@angular/material/icon";
import { RouterLink, RouterOutlet } from "@angular/router";
import { MatSidenav, MatSidenavContainer, MatSidenavModule } from "@angular/material/sidenav";
import { MatIconButton } from "@angular/material/button";
import { MatToolbar } from "@angular/material/toolbar";
import { FooterContentComponent } from "../footer-content/footer-content.component";
import { TranslateService } from '@ngx-translate/core'; // Importamos el servicio de traducción


@Component({
  selector: 'app-sidenav-consumer',
  standalone: true,
  imports: [
    MatListItem,
    MatIcon,
    RouterLink,
    MatNavList,
    MatSidenav,
    MatSidenavContainer,
    MatIconButton,
    MatToolbar,
    RouterOutlet,
    MatSidenavModule,
    FooterContentComponent
  ],
  templateUrl: './sidenav-consumer.component.html',
  styleUrls: ['./sidenav-consumer.component.css']
})
export class SidenavConsumerComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  userName: string = 'Usuario';

  constructor(private translate: TranslateService) { // Inyectamos el servicio de traducción
    // Aquí puedes obtener el nombre del usuario del sistema de autenticación
    // Por ejemplo: this.userName = authService.getUserName();
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }

  closeSidenav() {
    this.sidenav.close();
  }

  logout() {
    console.log("Sesión cerrada");
  }


  // Método para cambiar el idioma
  changeLanguage(lang: string) {
    this.translate.use(lang);
  }

  // Método para verificar si el idioma activo es el mismo que el seleccionado
  isActive(lang: string): boolean {
    return this.translate.currentLang === lang;
  }
}
