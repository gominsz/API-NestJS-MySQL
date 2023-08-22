// Repl read eval print loop 
// Sáo terminais interativos que conseguimos interarir
// com nossa propria integração

import { repl } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  await repl(AppModule);
}

bootstrap();

//para ver a lista de usuarios
//await get(CategoriesService).findAll() terminal

//Para criar user
//await get(CategoriesService).create({name:'', descripiton:''})