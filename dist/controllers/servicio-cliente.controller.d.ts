import { Cliente, Servicio } from '../models';
import { ServicioRepository } from '../repositories';
export declare class ServicioClienteController {
    servicioRepository: ServicioRepository;
    constructor(servicioRepository: ServicioRepository);
    getCliente(id: typeof Servicio.prototype.id): Promise<Cliente>;
}
