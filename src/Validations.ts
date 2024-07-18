import { IUser } from "./interface";

export function Validations(input: IUser) {
  const error: IUser = {};

  if (input.name && input.name.length > 10) {
    error.name = "el nombre debe contener maximo 10 caracteres";
  } else if (input.name && input.name.length < 3) {
    error.name = "el nombre debe contener minimo 4 caracteres";
  }
  return error;
}
