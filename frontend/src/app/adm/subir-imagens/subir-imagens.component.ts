import { SiblingsService } from 'src/app/dummies/siblingcomponents/siblings.service';
import { SubirImagensService } from 'src/app/services/subir-imagens.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subir-imagens',
  templateUrl: './subir-imagens.component.html',
  styleUrls: ['./subir-imagens.component.css']
})

export class SubirImagensComponent implements OnInit{

  imagenes: any[]=[];
  imagenUrl: any;
  files: File[] = [];

  constructor(private subirService:SubirImagensService, private siblingsService:SiblingsService){}

  ngOnInit(): void {

    this.sendInfoToCompB()
    }

  sendInfoToCompB(){
      this.siblingsService.communicateMessage(this.imagenUrl)
    }


    cargarImagen(event:any){
    let archivos = event.target.files
    let reader= new FileReader();
    let nombre="Spaco_educar"

    reader.readAsDataURL(archivos[0]);
    reader.onloadend = ()=>{
      console.log(reader.result);
      this.imagenes.push(reader.result);
      this.subirService.subirImagen(nombre+"_"+Date.now(), reader.result).then(urlImagen=>{
        console.log(urlImagen);
        this.imagenUrl = urlImagen;
        this.sendInfoToCompB();
      })
    }

  }
}
