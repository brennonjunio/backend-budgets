import { IsNotEmpty } from 'class-validator';

export class createProductDto {
  @IsNotEmpty({})
  descricao: string;

  codFabricante: string;

  descricaoFabricante: string;

  codBarra: string;
}
