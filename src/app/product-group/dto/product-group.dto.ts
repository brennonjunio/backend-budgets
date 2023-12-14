import { IsNotEmpty } from "class-validator";

export class UpdateProductGroupDTO {
    @IsNotEmpty({ message: 'Informe a descricao'})
    descricao:string

    @IsNotEmpty({message:'informe o codigo do grupo'})
    cdGrupo: number
}