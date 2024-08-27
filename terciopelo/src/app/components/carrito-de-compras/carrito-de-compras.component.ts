import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrito-de-compras',
  standalone: true,
  imports: [],
  templateUrl: './carrito-de-compras.component.html',
  styleUrl: './carrito-de-compras.component.css'
})
export class CarritoDeComprasComponent {
  dataCarrito:any[]=[]
  cantidadproductos:number= 0;
  totalprecio:number = 0;

  constructor(private router: Router){}

  regresarcompra() {
    this.router.navigate(['body'])
  }


  ngOnInit():void{
    this.actualizarCarrito()
    this.actulizarCantidadYTotal()
  }
  
  actualizarCarrito():void{
    let data:any = localStorage.getItem("carrito")
    this.dataCarrito = data ? JSON.parse(data) : [];
  }
  actulizarCantidadYTotal(): void {
    this.cantidadproductos = this.dataCarrito.reduce((acc, productos) => {
      // Convertir la cantidad a número
      const cantidad = Number(productos.cantidad);
      if (isNaN(cantidad)) {
        return acc; // Ignorar si no es un número válido
      }
      return acc + cantidad;
    }, 0);

    this.totalprecio = this.dataCarrito.reduce((acc, productos) => {
      // Convertir el precio a número después de eliminar posibles comas u otros caracteres no numéricos
      const cantidad = Number(productos.cantidad);
      const precio = parseFloat(productos.precio.replace(/[^0-9.-]+/g,""));
      if (isNaN(cantidad) || isNaN(precio)) {
        return acc; // Ignorar si alguno no es un número válido
      }
      return acc + (cantidad * precio);
    }, 0);
  }

  eliminarProducto(index:number):void{
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¿Deseas eliminar este producto del carrito?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar"
    }).then((result) => {
      if (result.isConfirmed) {
        let data:any =localStorage.getItem("carrito")
        this.dataCarrito = JSON.parse(data)
        for (let i = 0; i < this.dataCarrito.length; i++) {
          const element = this.dataCarrito[i];
          if (element._id === index) {
            this.dataCarrito.splice(i, 1);
            localStorage.setItem('carrito', JSON.stringify(this.dataCarrito));
            this.actulizarCantidadYTotal();
            Swal.fire({
              title: "Producto eliminado",
              text: "El producto fue eliminado del carrito.",
              icon: "success"
            });
          }
  
        }
      }
    });
  }

  eliminarCarrito(){
    Swal.fire({
      title: "Estas seguro?",
      text: "Estas a punto de cancelar tu compra",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "eliminado"
    }).then((result) => {
      if (result.isConfirmed) {
      localStorage.removeItem("carrito")
    let data:any =localStorage.getItem("carrito")
    this.dataCarrito = JSON.parse(data)
        Swal.fire({
          title: "Tu compra fue eliminada",
          text: ("Tú compra fue eliminada"),
          icon: "success"
        });
      }
    });
  }

  pagocarrito(){
    Swal.fire({
      title: "Estas seguro?",
      text: "Estas a punto de realizar la compra ",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "pagar"
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("carrito")
        let data:any =localStorage.getItem("carrito")
        this.dataCarrito = JSON.parse(data)
        Swal.fire({
          title: "Tú compra fue exitosa",
          text: ("Tú compra fue exitosa"),
          icon: "success"
        });
      }
    });
  
  }
}
