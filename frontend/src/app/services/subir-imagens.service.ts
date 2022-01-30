import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class SubirImagensService {
  storageRef = firebase.app().storage().ref();

  constructor() { }

  async subirImagen(nombre:string,imgBase64:any){
    try{
      let respuesta = await this.storageRef.child("users/"+nombre).putString(imgBase64, 'data_url');
      console.log(respuesta);
      return await respuesta.ref.getDownloadURL();
    }catch(err){
      console.log(err);
      return null;
    }
  }
}
