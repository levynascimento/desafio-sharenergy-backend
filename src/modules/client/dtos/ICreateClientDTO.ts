interface ICreateClientDTO {
  name: string;
  email: string;
  phone: string;
  _id?: string;
  address: string;
  cpf: string;
  created_at?: Date;
}

export { ICreateClientDTO };
