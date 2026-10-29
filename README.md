# NestJS Products — GET All

Project latihan REST API NestJS sampai endpoint `GET /products`.

## Menjalankan

Pastikan Node.js LTS dan npm sudah terpasang. Ekstrak ZIP, lalu dari folder project:

```bash
npm install
npm run start:dev
```

Buka `http://localhost:3000/products` di browser atau test dengan:

```bash
curl http://localhost:3000/products
```

Contoh respons JSON:

```json
[
  { "id": 1, "name": "Laptop", "price": 12500000 },
  { "id": 2, "name": "Keyboard", "price": 350000 },
  { "id": 3, "name": "Mouse", "price": 150000 }
]
```

## Struktur

```text
src/
├── main.ts
├── app.module.ts
└── products/
    ├── products.module.ts
    ├── products.controller.ts
    ├── products.service.ts
    └── product.interface.ts
```

## Alur request

1. `main.ts` menjalankan aplikasi.
2. `AppModule` mendaftarkan `ProductsModule`.
3. `ProductsController` menangani `GET /products`.
4. Controller memanggil `ProductsService.findAll()`.
5. Service mengembalikan array sebagai JSON.

`@Controller('products')` menentukan prefix URL dan `@Get()` menentukan method GET. Nama fungsi `findAll()` tidak otomatis menjadi bagian URL.

Data masih berupa array di memori, belum memakai database. Data kembali ke nilai awal saat server dimulai ulang.
