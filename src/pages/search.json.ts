import { getPulserasCompletas } from "@/lib/resolver";

export async function GET() {
  const pulserasCompletas = getPulserasCompletas();
  const searchIndex: any[] = [];

  pulserasCompletas.forEach((pulsera) => {
    // 1. Insertamos el objeto principal de la pulsera
    searchIndex.push({
      id: pulsera.id,
      nombre: pulsera.nombre,
      precio: pulsera.precio,
      link: `/pulseras/${pulsera.id}`,
    });

    // 2. Si tiene categorías, insertamos cada una de manera individual para el índice
    if (pulsera.categorias) {
      pulsera.categorias.forEach((cat) => {
        searchIndex.push({
          categoria: cat,
        });
      });
    }

    // 3. Opcional: Si quieres hacer lo mismo con los colores (como los tags del ejemplo)
    if (pulsera.variaciones_color) {
      pulsera.variaciones_color.forEach((varColor) => {
        searchIndex.push({
          color: varColor.color_nombre,
        });
      });
    }
  });

  return new Response(JSON.stringify(searchIndex), {
    headers: { "Content-Type": "application/json" },
  });
}