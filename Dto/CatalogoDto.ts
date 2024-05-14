import { Request, Response } from 'express';

export interface catalogoDto{
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    imagen: string;
}

export const catalogos = [
    { id: 1, nombre: 'Jabon fab', descripcion: 'El mejor jabon para lavar la ropa ', precio: 10, imagen:'empaque azul' },
    { id: 2, nombre: 'Yaper Blue', descripcion: 'el energizante para quitar las novias en grande, bajo en codigos, yo soy blessd el gusanito', precio: 12,imagen:'lata azul'}
];

export const getCatalogo = (req: Request, res: Response) => {
    res.json(catalogos);
  };