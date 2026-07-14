import { PULSERAS_DATA, type Pulsera,  } from "./pulseras";
import { CATEGORIAS, COLECCIONES, MATERIALES, TALLAS, COLORES } from "./catalogo";

export interface PulseraCompleta extends Omit<Pulsera,
  "categoria_ids" | "coleccion_id" | "material_ids" | "talla_ids" | "color_ids"
> {
  categorias: string[];
  coleccion?: string;
  materiales: string[];
  tallas_disponibles: string[];
  variaciones_color: { color_nombre: string; hex: string }[];
}

export function resolverPulsera(p: Pulsera): PulseraCompleta {
  return {
    ...p,
    categorias: p.categoria_ids.map(
      (id) => CATEGORIAS.find((c) => c.id === id)?.nombre ?? id
    ),
    coleccion: p.coleccion_id
      ? COLECCIONES.find((c) => c.id === p.coleccion_id)?.nombre
      : undefined,
    materiales: p.material_ids.map(
      (id) => MATERIALES.find((m) => m.id === id)?.nombre ?? id
    ),
    tallas_disponibles: p.talla_ids.map(
      (id) => TALLAS.find((t) => t.id === id)?.nombre ?? id
    ),
    variaciones_color: p.color_ids.map((id) => {
      const color = COLORES.find((c) => c.id === id);
      return color
        ? { color_nombre: color.color_nombre, hex: color.hex }
        : { color_nombre: id, hex: "#000000" };
    }),
  };
}

export function getPulserasCompletas(): PulseraCompleta[] {
  return PULSERAS_DATA.map(resolverPulsera);
}

export function getPulseraPorId(id: string): PulseraCompleta | undefined {
  const p = PULSERAS_DATA.find((p) => p.id === id);
  return p ? resolverPulsera(p) : undefined;
}

export function getPulseraPorSlug(slug: string): PulseraCompleta | undefined {
  const p = PULSERAS_DATA.find((p) => p.id.toLowerCase() === slug.toLowerCase());
  return p ? resolverPulsera(p) : undefined;
}

export function getPulserasPorCategoria(categoriaId: string): PulseraCompleta[] {
  return PULSERAS_DATA
    .filter((p) => p.categoria_ids.includes(categoriaId))
    .map(resolverPulsera);
}