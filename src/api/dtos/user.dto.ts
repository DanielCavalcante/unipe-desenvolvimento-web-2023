import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  Matches,
  MinLength,
  Validate,
} from 'class-validator';

const cpfRegex = /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)/;

export class UserDTO {
  @IsNotEmpty()
  @IsString()
  @MinLength(10)
  fullname: string;

  @IsNotEmpty()
  @IsString()
  @Matches(cpfRegex)
  @Length(11)
  cpf: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  username: string;

  @IsDate()
  birthDate: Date;
}
