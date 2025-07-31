interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  precio: number;
}

export const productos: Producto[] = [
  {
    id: 1,
    nombre: "iPhone 16",
    descripcion: "El último iPhone con chip A18 Pro, cámara de 48 MP, pantalla ProMotion de 120Hz y batería de larga duración.",
    imagen: "telefono-1",
    precio: 1099
  },
  {
    id: 2,
    nombre: "iPhone 15",
    descripcion: "Cuenta con chip A16 Bionic, cámara mejorada con modo noche, USB-C y diseño resistente al agua.",
    imagen: "telefono-2",
    precio: 899
  },
  {
    id: 3,
    nombre: "iPhone 14",
    descripcion: "Equipado con chip A15 Bionic, cámaras duales con Photonic Engine y detección de choques.",
    imagen: "telefono-3",
    precio: 699
  },
  {
    id: 4,
    nombre: "iPhone 13",
    descripcion: "Procesador A15 Bionic, cámara mejorada con modo cinemático y excelente duración de batería.",
    imagen: "telefono-4",
    precio: 599
  },
  {
    id: 5,
    nombre: "iPhone 12",
    descripcion: "Pantalla OLED, conectividad 5G y chip A14 Bionic. Diseño plano con Ceramic Shield.",
    imagen: "telefono-5",
    precio: 499
  },
  {
    id: 6,
    nombre: "iPhone 11",
    descripcion: "Gran rendimiento con chip A13 Bionic, cámara dual ultra gran angular y batería confiable.",
    imagen: "telefono-6",
    precio: 399
  }
];
