import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  items: MenuItem[];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Anasayfa', icon: 'pi pi-fw pi-home',routerLink: ['']},
      {label: 'Yeni ürün ekleme-FormValidation', icon: 'pi pi-fw pi-pencil', routerLink: ['/product'] },
      {label: 'Yeni ürün Ekle -Reactive', icon: 'pi pi-fw pi-pencil' ,routerLink: ['/product-add-2'] },
      {label: 'Yeni kategori Ekle -Reactive', icon: 'pi pi-fw pi-pencil',routerLink: ['/category-react'] },
  
      {label: 'Settings', icon: 'pi pi-fw pi-cog'}
  ];
  }

}
