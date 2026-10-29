import { Injectable, NotFoundException } from "@nestjs/common";
import { Buku } from "./buku.interface";

@Injectable()
export class BukuService {
  private readonly daftarBuku: Buku[] = [
    {
      id: 1,
      judul: "Milea: Suara dari Dilan",
      penulis: "Pidi Baiq",
      penerbit: "Pastel Books",
      tahunTerbit: 2016,
      genre: "Romansa",
    },
    {
      id: 2,
      judul: "Bumi Manusia",
      penulis: "Pramoedya Ananta Toer",
      penerbit: "Hasta Mitra",
      tahunTerbit: 1980,
      genre: "Fiksi Sejarah",
    },
    {
      id: 3,
      judul: "Negeri 5 Menara",
      penulis: "Ahmad Fuadi",
      penerbit: "Gramedia Pustaka Utama",
      tahunTerbit: 2009,
      genre: "Novel",
    },
  ];

  findAll(): Buku[] {
    return this.daftarBuku;
  }

  findOne(id: number): Buku {
    const buku = this.daftarBuku.find((item) => item.id === id);

    if (!buku) {
      throw new NotFoundException("Buku tidak ditemukan");
    }

    return buku;
  }

  create(data: Omit<Buku, "id">): Buku {
    const nextId = this.daftarBuku.length
      ? Math.max(...this.daftarBuku.map((buku) => buku.id)) + 1
      : 1;

    const bukuBaru: Buku = {
      id: nextId,
      ...data,
    };

    this.daftarBuku.push(bukuBaru);
    return bukuBaru;
  }

  update(id: number, data: Omit<Buku, "id">): Buku {
    const buku = this.findOne(id);

    buku.judul = data.judul;
    buku.penulis = data.penulis;
    buku.penerbit = data.penerbit;
    buku.tahunTerbit = data.tahunTerbit;
    buku.genre = data.genre;

    return buku;
  }

  patch(id: number, data: Partial<Omit<Buku, "id">>): Buku {
    const buku = this.findOne(id);

    Object.assign(buku, data);
    return buku;
  }

  remove(id: number): Buku {
    const index = this.daftarBuku.findIndex((buku) => buku.id === id);

    if (index === -1) {
      throw new NotFoundException("Buku tidak ditemukan");
    }

    const [bukuDihapus] = this.daftarBuku.splice(index, 1);
    return bukuDihapus;
  }
}
