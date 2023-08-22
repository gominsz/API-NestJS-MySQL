import { Injectable } from '@nestjs/common';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { PrismaService } from '../prisma/prisma/prisma.service';
import { InvalidRelationError } from '../errors/invalid-relation-error';


@Injectable()
export class VideosService {
  constructor(private prismaService: PrismaService & { file: Express.Multer.File }) {}

 async create(createVideoDto: CreateVideoDto) {
    const categoriesExistes = 
    (await this.prismaService.category.count({
      where: {
        id: createVideoDto.category_id,
      }
    })) !=0; 

    if (!categoriesExistes){
      throw new InvalidRelationError('Category Not Found');
    }

    return this.prismaService.video.create({
      data: { 
        title: createVideoDto.title, 
        description: createVideoDto.description,
        category_id: createVideoDto.category_id,
        file_path: createVideoDto.file.path,
      }
    })

  }

  findAll() {
    return this.prismaService.video.findMany();
  }

  findOne(id: number) {
    return this.prismaService.video.findUniqueOrThrow({
      where: {
        id,
      }
    });
  }

  update(id: number, UpdateVideoDto: UpdateVideoDto) {
    return this.prismaService.video.update({
      where: { id },
      data: UpdateVideoDto,
    });
  }

  remove(id: number) {
    return this.prismaService.video.delete({
      where: { id }
    });
  }
}
