export type ApiResponse = {
  docs: Simpson[];
};

export type Simpson = {
  _id: string;
  Nombre: string;
  Historia: string;
  Imagen: string;
  Genero: string;
  Estado: string;
  Ocupacion: string;
};

export type SimpsonPaging = {
  getAll(query: string, currentPage: number): Promise<ApiResponse>;
};
