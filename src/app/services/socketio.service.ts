import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {

  private isActive : boolean = false;

  constructor(
    private socket : Socket
  ) {
    this.initIO()
   }

   initIO(){
     this.socket.on('connect', client =>{
      console.log('el cliente esta conectado')
      this.isActive = true

      this.socket.on('disconnect', ()=>{
        console.log('el cliente esta desconectado')
        this.isActive = false
      })
     })
   }

   //emmiter
   emmit( evento : string, payload?: any, callback?: any ){
     return this.socket.emit( evento, payload, callback )
   }

   //listener
   listenn(evento : string){
      return this.socket.fromEvent( evento )
   }
}
