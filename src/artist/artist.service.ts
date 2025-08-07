import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';

@Injectable()
export class ArtistService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateArtistDto) {
    return this.prisma.artist.create({ data });
  }

  findAll() {
    return this.prisma.artist.findMany();
  }

  findOne(id: number) {
    return this.prisma.artist.findUnique({ where: { id } });
  }

  update(id: number, data: Partial<CreateArtistDto>) {
    return this.prisma.artist.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.artist.delete({ where: { id } });
  }
}


