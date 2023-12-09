import { IsEmail, IsNotEmpty} from 'class-validator';

export class LoginDTO {
  @IsNotEmpty({ message: 'Informe o E-mail do usuário' })
  @IsEmail({}, { message: 'Informe um endereço de e-mail válido' })
  email: string;

  @IsNotEmpty({ message: 'Informe a senha' })
  password: string;
}
