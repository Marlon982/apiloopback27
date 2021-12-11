"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Servicio = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const cliente_model_1 = require("./cliente.model");
const encomienda_model_1 = require("./encomienda.model");
let Servicio = class Servicio extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Servicio.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Servicio.prototype, "fecha", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Servicio.prototype, "hora", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Servicio.prototype, "valor", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => cliente_model_1.Cliente, { name: 'origenFk' }),
    (0, tslib_1.__metadata)("design:type", String)
], Servicio.prototype, "origenFK", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => cliente_model_1.Cliente, { name: 'destinoFk' }),
    (0, tslib_1.__metadata)("design:type", String)
], Servicio.prototype, "destinoFK", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => encomienda_model_1.Encomienda, { name: 'encomiendaFk' }),
    (0, tslib_1.__metadata)("design:type", String)
], Servicio.prototype, "encomiendaFK", void 0);
Servicio = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Servicio);
exports.Servicio = Servicio;
//# sourceMappingURL=servicio.model.js.map