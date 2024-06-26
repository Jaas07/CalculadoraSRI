export interface gasto{
    "id":number;
    "tipo":string;
    "ruc":string;
    "valor":number;
}

export interface inpuesto{
    "cedula":string;
    "ingreso":number;
    "alimentacion":number;
    "vivienda":number;
    "educacion":number;
    "vestimenta":number;
    "salud":number;
    "baseImponible": number,
    "excedente": number,
    "valorExcedente": number,
    "IR": number
}