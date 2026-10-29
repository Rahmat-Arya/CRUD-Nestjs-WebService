import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from "@nestjs/common";
import { Buku } from "./buku.interface";
import { BukuService } from "./buku.service";

@Controller("buku")
export class BukuController {
  constructor(private readonly bukuService: BukuService) {}

  @Get()
  findAll(): Buku[] {
    return this.bukuService.findAll();
  }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number): Buku {
    return this.bukuService.findOne(id);
  }

  @Post()
  create(@Body() body: Omit<Buku, "id">): Buku {
    return this.bukuService.create(body);
  }

  @Put(":id")
  update(
    @Param("id", ParseIntPipe) id: number,
    @Body() body: Omit<Buku, "id">,
  ): Buku {
    return this.bukuService.update(id, body);
  }

  @Patch(":id")
  patch(
    @Param("id", ParseIntPipe) id: number,
    @Body() body: Partial<Omit<Buku, "id">>,
  ): Buku {
    return this.bukuService.patch(id, body);
  }

  @Delete(":id")
  remove(@Param("id", ParseIntPipe) id: number): Buku {
    return this.bukuService.remove(id);
  }
}
