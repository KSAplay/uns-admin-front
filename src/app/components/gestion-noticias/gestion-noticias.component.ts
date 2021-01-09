import { Component, OnInit } from '@angular/core';
import { Noticia } from '../../models/Noticia';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-gestion-noticias',
  templateUrl: './gestion-noticias.component.html',
  styleUrls: ['./gestion-noticias.component.scss']
})
export class GestionNoticiasComponent implements OnInit {
  
  noticias: Noticia[];

  constructor(private noticiasService: NoticiasService) {
    this.noticias = [];
  }

  ngOnInit(): void {
    this.noticiasService.getNoticias().then(res =>{ 
      this.noticias = res;
      console.log(res)
    });
  }

}
