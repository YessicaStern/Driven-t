export type ApplicationError = {
  name: string;
  message: string;
};

export type ViaCEPAddress = {
  logradouro: string,
  complemento: string,
  bairro: string,
  localidade: string,
  uf: string,
};

export type RequestError = {
  status: number,
  data: object | null,
  statusText: string,
  name: string,
  message: string,
};

export type AddressType = {
  cep: string,
  logradouro: string,
  complemento?: string,
  bairro: string,
  localidade: string,
  uf: string,
  ibge: number,
  gia?: string,
  ddd: number,
  siafi: number
};

export type AddressFilter =  {
  logradouro: string,
  complemento?: string,
  bairro: string,
  cidade: string,
  uf: string,
}
