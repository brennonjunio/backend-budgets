import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail({}, { message: 'Informe um endereço de e-mail válido' })
  email: string;

  @IsNotEmpty({ message: 'Informe o nome do usuário' })
  @MinLength(4, { message: 'O nome do usuário deve ter no mínimo 4 caracteres' })
  name: string;

  @IsNotEmpty({ message: 'Informe a senha' })
  @MinLength(4, { message: 'A senha deve ter no mínimo 4 caracteres' })
  password: string;
}
