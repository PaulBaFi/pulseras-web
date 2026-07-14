export interface Categoria {
  id: string;
  nombre: string;
}

export interface Coleccion {
  id: string;
  nombre: string;
}

export interface Material {
  id: string;
  nombre: string;
}

export interface Talla {
  id: string;
  nombre: string;
}

export interface Color {
  id: string;
  color_nombre: string;
  hex: string;
}

export const CATEGORIAS: Categoria[] = [
  { id: "CAT-001", nombre: "🇵🇪 Mes Patrio" },
  { id: "CAT-002", nombre: "❤️ San Valentín" },
  { id: "CAT-003", nombre: "🤝 Amistad" },
  { id: "CAT-004", nombre: "🌹 Día de la Madre" },
  { id: "CAT-005", nombre: "👔 Día del Padre" },
  { id: "CAT-006", nombre: "🎓 Graduación" },
  { id: "CAT-007", nombre: "🎄 Navidad" },
  { id: "CAT-008", nombre: "🎃 Halloween" },
  { id: "CAT-009", nombre: "✨ General" },
  { id: "CAT-010", nombre: "🚀 Motivacional" },
];

export const COLECCIONES: Coleccion[] = [
  { id: "COLEC-001", nombre: "Orgullo Local" },
  /*
  { id: "COLEC-002", nombre: "Love Collection" },
  { id: "COLEC-003", nombre: "Friendship" },
  { id: "COLEC-004", nombre: "Familia" },
  { id: "COLEC-005", nombre: "Logros" },
  { id: "COLEC-006", nombre: "Festividades" },
  { id: "COLEC-007", nombre: "Everyday" },
  { id: "COLEC-008", nombre: "Positive" },
  { id: "COLEC-009", nombre: "Balance" },
  { id: "COLEC-010", nombre: "Minimal" },
   */
];

export const MATERIALES: Material[] = [
  { id: "MAT-001", nombre: "Perlas acrílicas" },
  { id: "MAT-002", nombre: "Cordón elástico" },
  { id: "MAT-003", nombre: "Tela tejida" },
  { id: "MAT-004", nombre: "Broche ajustable" },
];

export const TALLAS: Talla[] = [
  { id: "TALLA-S", nombre: "S (15-16cm)" },
  { id: "TALLA-M", nombre: "M (17-18cm)" },
  { id: "TALLA-L", nombre: "L (19-20cm)" },
  { id: "TALLA-AJ", nombre: "Ajustable a medida" },
];

export const COLORES: Color[] = [
  { id: "COLOR-001", color_nombre: "Negro", hex: "#1a1a1a" },
  { id: "COLOR-002", color_nombre: "Rojo", hex: "#D32F2F" },
  { id: "COLOR-003", color_nombre: "Verde", hex: "#388E3C" },
  { id: "COLOR-004", color_nombre: "Naranja", hex: "#F57C00" },
];
