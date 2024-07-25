import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoticiasService } from '../servicios/noticias/noticias.service';
import { INoticias } from '../interfaces/noticias.interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  datosForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private noticiasService: NoticiasService) {
    this.datosForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      fecha: ['', Validators.required],
      descripcion: ['', Validators.required],
    }
    )

  }

  agregarNoticia() {
    this.noticiasService.crearNoticias(this.datosForm.value)
  }

}
