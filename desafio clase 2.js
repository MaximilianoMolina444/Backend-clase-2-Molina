class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = [libros];
    this.mascotas = [mascotas];
  }
  getFullName() {
    return this.nombre;
  }
  addMascota(mascota) {
    this.mascotas.push(mascota);
  }
  countMascotas() {
    return console.log("Mascotas " + this.mascotas.length);
  }
  addBook(titulo, autor) {
    this.libros.push({ libro: titulo, escritor: autor });
  }
  getBookNames() {
    this.libros.forEach((item) => {
      console.log(item.libro + " Escrito por: " + item.escritor);
    });
  }
}

const Usuario1 = new Usuario(
  "ramiro",
  "ramirez",
  { libro: "Narnia", escritor: "asdsaddsadas" },
  "perro"
);
console.log(Usuario1);
Usuario1.addBook("Señor de los Anillos", "Tolkien");
Usuario1.addMascota("gato");
Usuario1.countMascotas();
Usuario1.getBookNames();
