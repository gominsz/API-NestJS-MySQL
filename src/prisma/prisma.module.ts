import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Global()
@Module({
  providers: [PrismaService],
  //fazendo que esse serviço n fique privado, para ser REulsado em outros lugares
  exports: [PrismaService],
})
export class PrismaModule {}

