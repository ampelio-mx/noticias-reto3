import { Component } from '@angular/core';
import { NoticiasService } from '../servicios/noticias/noticias.service';
import { INoticias } from '../interfaces/noticias.interface';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  noticias: INoticias[] = [];

  constructor(private noticiasService: NoticiasService) { }

  ngOnInit() {
    this.noticiasService.obtenerNoticias().subscribe(data => {
      this.noticias = data;
    });
  }

  eliminarNoticia(titulo: string) {
    this.noticiasService.eliminarNoticia(titulo).then(() => {
      this.noticias = this.noticias.filter(noticia => noticia.titulo !== titulo);
    });
  }

}
