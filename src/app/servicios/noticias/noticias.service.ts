import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { INoticias } from 'src/app/interfaces/noticias.interface';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  private coleccionEventos: AngularFirestoreCollection<INoticias>;


  constructor(private db: AngularFirestore) { 
    this.coleccionEventos = this.db.collection<INoticias>('Noticias');
  }

  crearNoticias(noticia: INoticias): void {
    this.coleccionEventos.add({ ...noticia });
  }

  obtenerNoticias(): Observable<INoticias[]> {
    return this.coleccionEventos.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as INoticias;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  eliminarNoticia(titulo: string): Promise<void> {
    return this.coleccionEventos.doc(titulo).delete();
  }
}
