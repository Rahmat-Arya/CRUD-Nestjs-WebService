import { Module } from "@nestjs/common";
import { BukuController } from "./buku.controller";
import { BukuService } from "./buku.service";

@Module({
  controllers: [BukuController],
  providers: [BukuService],
})
export class BukuModule {}
