import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
   //DTP Data Transfer Object - Objeto de transferencia de dados
  create(@Body() createCategoryDto: CreateCategoryDto) {   
    return this.categoriesService.create(createCategoryDto);
  }

  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(+id);
  }

  @Patch(':id') 
  //PUT-    Atualizar o recurso por COMPLETO - Sendo OBRIGADO a passar TODOS OS DADOS 
  //PATCH - Atualização parcial, podendo passar TODOS ou apenas UM grupo de dados
  update(
    @Param('id') id: string, 
    @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoriesService.update(+id, updateCategoryDto);
  }

  
  @HttpCode(204) // representa No content (Sem conteudo)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(+id);
  }
}
