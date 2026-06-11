// ============================================================
// RTMY — Libro de Recetas
// Para añadir una receta: copia el bloque de una existente y
// modifica los campos. Para editarla, modifica directamente.
// ============================================================

const RECIPES = [
  {
    id: "carrilleras",
    name: "Carrilleras con Salsa",
    servings_base: 8,
    steps: [
      { id: 1, desc: "Limpiar carrilleras, retirar membrana y exceso de grasa.", duration_min: 10, type: "activo" },
      { id: 2, desc: "Salpimentar carrilleras y reposar en nevera.", duration_min: 15, type: "pasivo" },
      { id: 3, desc: "Enharinar cada pieza y sacudir el exceso.", duration_min: 3, type: "activo" },
      { id: 4, desc: "Sellar carrilleras en aceite caliente (inducción 8), 2–3 min por pieza. Reservar.", duration_min: 8, type: "activo" },
      { id: 5, desc: "Dorar cebolla, zanahoria, ajo y puerro a fuego medio (inducción 5), 8–10 min.", duration_min: 10, type: "activo" },
      { id: 6, desc: "Añadir tomate rallado y pimentón, cocinar 2 min.", duration_min: 2, type: "activo" },
      { id: 7, desc: "Incorporar vino tinto y vermut, reducir a la mitad (inducción 7), ~5 min.", duration_min: 5, type: "activo" },
      { id: 8, desc: "Añadir agua, laurel y romero. Repartir en dos ollas a presión con las carrilleras.", duration_min: 3, type: "activo" },
      { id: 9, desc: "Cocer en olla a presión: llevar a presión (inducción 8), luego mantener 15 min (inducción 4).", duration_min: 25, type: "pasivo" },
      { id: 10, desc: "Despresurizar de forma natural.", duration_min: 15, type: "pasivo" },
      { id: 11, desc: "Retirar carrilleras, porcionar en raciones de 150 g. Reservar salsa.", duration_min: 10, type: "activo" }
    ],
    ingredients: [
      { name: "Carrillera de cerdo", amount: 1200, unit: "g" },
      { name: "Aceite de oliva", amount: 40, unit: "g" },
      { name: "Cebolla cortada", amount: 200, unit: "g" },
      { name: "Zanahoria en dados", amount: 150, unit: "g" },
      { name: "Puerro", amount: 80, unit: "g" },
      { name: "Ajo", amount: 20, unit: "g" },
      { name: "Tomate rallado", amount: 150, unit: "g" },
      { name: "Pimentón", amount: 5, unit: "g" },
      { name: "Harina", amount: 30, unit: "g" },
      { name: "Vino tinto", amount: 200, unit: "g" },
      { name: "Vermut", amount: 200, unit: "g" },
      { name: "Agua", amount: 300, unit: "g" },
      { name: "Laurel", amount: 3, unit: "g" },
      { name: "Romero", amount: 3, unit: "g" },
      { name: "Sal", amount: 10, unit: "g" },
      { name: "Pimienta", amount: 2, unit: "g" }
    ]
  },
  {
    id: "tiras_pollo",
    name: "Tiras de Pollo",
    servings_base: 6,
    steps: [
      { id: 1, desc: "Mezclar leche con zumo de limón, reposar 10 min a temperatura ambiente hasta que espese. Añadir especias de marinado.", duration_min: 10, type: "pasivo" },
      { id: 2, desc: "Cortar pechugas en tiras de 1 cm. Sumergir en leche especiada, cubrir y refrigerar mínimo 6h (ideal 12h).", duration_min: 360, type: "pasivo" },
      { id: 3, desc: "Triturar copos de maíz en trozos irregulares. Mezclar con sal, ajo y pimentón del empanado.", duration_min: 5, type: "activo" },
      { id: 4, desc: "Preparar 3 estaciones: harina, huevos batidos, mezcla de copos de maíz. Sacar tiras y escurrir (NO secar).", duration_min: 5, type: "activo" },
      { id: 5, desc: "Empanar: harina → huevo → copos de maíz.", duration_min: 10, type: "activo" },
      { id: 6, desc: "Freír en aceite de girasol caliente (inducción 5) durante 4 minutos.", duration_min: 4, type: "activo" },
      { id: 7, desc: "Escurrir y almacenar en raciones de 150 g.", duration_min: 5, type: "activo" }
    ],
    ingredients: [
      { name: "Pechuga de pollo fileteada", amount: 1000, unit: "g" },
      { name: "Leche", amount: 300, unit: "g" },
      { name: "Zumo de limón", amount: 30, unit: "g" },
      { name: "Sal (marinado)", amount: 10, unit: "g" },
      { name: "Ajo en polvo (marinado)", amount: 4, unit: "g" },
      { name: "Pimentón (marinado)", amount: 4, unit: "g" },
      { name: "Cayena molida", amount: 2, unit: "g" },
      { name: "Copos de maíz", amount: 200, unit: "g" },
      { name: "Harina", amount: 80, unit: "g" },
      { name: "Huevos", amount: 2, unit: "und" },
      { name: "Sal (empanado)", amount: 5, unit: "g" },
      { name: "Ajo en polvo (empanado)", amount: 2, unit: "g" },
      { name: "Pimentón (empanado)", amount: 2, unit: "g" },
      { name: "Aceite de girasol", amount: 1500, unit: "g" }
    ]
  },
  {
    id: "fumet_pescado",
    name: "Fumet de Pescado de Roca",
    servings_base: 10,
    steps: [
      { id: 1, desc: "Poner 5000 g de agua a calentar en olla grande.", duration_min: 10, type: "pasivo" },
      { id: 2, desc: "Lavar el pescado con abundante agua fría. Cortar cebolla y tomate en trozos medianos.", duration_min: 5, type: "activo" },
      { id: 3, desc: "Calentar parte del aceite en segunda olla. Dorar levemente el pescado (sin tostar).", duration_min: 5, type: "activo" },
      { id: 4, desc: "Pasar el pescado dorado, sal y laurel a la olla con agua caliente.", duration_min: 2, type: "activo" },
      { id: 5, desc: "En la misma olla del pescado, calentar el resto del aceite. Pochar ajo, cebolla y puerro 5 min.", duration_min: 5, type: "activo" },
      { id: 6, desc: "Añadir zanahoria y pochar 3 min más.", duration_min: 3, type: "activo" },
      { id: 7, desc: "Incorporar vino blanco y reducir.", duration_min: 4, type: "activo" },
      { id: 8, desc: "Añadir tomate y cocinar 5 min.", duration_min: 5, type: "activo" },
      { id: 9, desc: "Incorporar todas las verduras pochadas a la olla del pescado.", duration_min: 2, type: "activo" },
      { id: 10, desc: "Cocer 25 min desde que hierve, retirando espuma periódicamente.", duration_min: 25, type: "pasivo" },
      { id: 11, desc: "Apagar fuego. Reposar 10 min.", duration_min: 10, type: "pasivo" },
      { id: 12, desc: "Esterilizar botes en agua hirviendo 15 min.", duration_min: 15, type: "pasivo" },
      { id: 13, desc: "Llenar botes con 430 g de fumet caliente, tapar y colocar boca abajo. Dejar enfriar parcialmente.", duration_min: 10, type: "activo" },
      { id: 14, desc: "Con fumet atemperado, envasar en bolsas de 430 g. Etiquetar con nombre y fecha.", duration_min: 10, type: "activo" },
      { id: 15, desc: "Refrigerar mínimo 6 horas.", duration_min: 360, type: "pasivo" },
      { id: 16, desc: "Una vez frío, colocar bolsas planas en bandeja en el congelador hasta que endurezcan.", duration_min: 120, type: "pasivo" }
    ],
    ingredients: [
      { name: "Cabeza de rape", amount: 700, unit: "g" },
      { name: "Pescado de roca", amount: 700, unit: "g" },
      { name: "Ajo", amount: 30, unit: "g" },
      { name: "Cebolla cortada", amount: 400, unit: "g" },
      { name: "Puerro congelado", amount: 200, unit: "g" },
      { name: "Zanahoria congelada", amount: 150, unit: "g" },
      { name: "Tomate", amount: 150, unit: "g" },
      { name: "Aceite de oliva", amount: 240, unit: "g" },
      { name: "Vino blanco", amount: 160, unit: "g" },
      { name: "Sal", amount: 30, unit: "g" },
      { name: "Laurel", amount: 3, unit: "hojas" },
      { name: "Agua", amount: 5000, unit: "g" }
    ]
  },
  {
    id: "cebolla_pochada",
    name: "Cebolla Pochada para Paellas",
    servings_base: 4,
    steps: [
      { id: 1, desc: "Pelar y cortar la cebolla en cubos pequeños.", duration_min: 5, type: "activo" },
      { id: 2, desc: "Colocar cebolla en el vaso de la MCC con aceite y sal.", duration_min: 2, type: "activo" },
      { id: 3, desc: "Programar MCC: 30 min, velocidad 1, 120°C, sin cubilete.", duration_min: 30, type: "pasivo" },
      { id: 4, desc: "Bajar con espátula la cebolla adherida a las paredes. Tapar.", duration_min: 2, type: "activo" },
      { id: 5, desc: "Programar MCC: 20 min, velocidad 1, 120°C. Comprobar que esté reducida y transparente.", duration_min: 20, type: "pasivo" },
      { id: 6, desc: "Envasar, dejar atemperar y guardar refrigerada.", duration_min: 5, type: "activo" }
    ],
    ingredients: [
      { name: "Cebolla", amount: 1000, unit: "g" },
      { name: "Aceite de oliva", amount: 40, unit: "g" },
      { name: "Sal", amount: 5, unit: "g" }
    ]
  },
  {
    id: "brownie",
    name: "Brownie",
    servings_base: 8,
    steps: [
      { id: 1, desc: "Precalentar el horno a 200°C.", duration_min: 15, type: "pasivo" },
      { id: 2, desc: "Fundir mantequilla y chocolate en microondas 3 min a potencia media. Remover hasta mezcla homogénea.", duration_min: 5, type: "activo" },
      { id: 3, desc: "Añadir azúcar a la mezcla caliente y mezclar lentamente.", duration_min: 2, type: "activo" },
      { id: 4, desc: "Dejar enfriar la mezcla 10 min antes de añadir los huevos.", duration_min: 10, type: "pasivo" },
      { id: 5, desc: "Incorporar los huevos uno por uno, mezclando lentamente tras cada uno.", duration_min: 3, type: "activo" },
      { id: 6, desc: "Tamizar harina, cacao y sal. Incorporar a la mezcla y mezclar lentamente hasta masa homogénea.", duration_min: 5, type: "activo" },
      { id: 7, desc: "Verter masa en molde preparado.", duration_min: 2, type: "activo" },
      { id: 8, desc: "Hornear a 200°C durante 25 min.", duration_min: 25, type: "pasivo" },
      { id: 9, desc: "Retirar del horno y dejar enfriar antes de cortar, mínimo 20 min.", duration_min: 20, type: "pasivo" }
    ],
    ingredients: [
      { name: "Chocolate 70%", amount: 200, unit: "g" },
      { name: "Mantequilla", amount: 115, unit: "g" },
      { name: "Azúcar", amount: 200, unit: "g" },
      { name: "Huevos", amount: 3, unit: "und" },
      { name: "Harina", amount: 80, unit: "g" },
      { name: "Sal", amount: 2, unit: "g" },
      { name: "Cacao puro", amount: 25, unit: "g" }
    ]
  },
  {
    id: "tortillas",
    name: "Tortillas",
    servings_base: 4,
    variants: [
      { id: "sobrasada", label: "Sobrasada" },
      { id: "alcachofas_queso", label: "Alcachofas y Queso" },
      { id: "anchoas", label: "Anchoas" }
    ],
    steps: [
      { id: 1, desc: "Laminar patatas y cebolla con mandolina.", duration_min: 10, type: "activo" },
      { id: 2, desc: "Colocar patata y cebolla en olla a presión con aceite y sal. Tapar.", duration_min: 3, type: "activo" },
      { id: 3, desc: "Cocinar en vitrocerámica nivel 3 durante 22 min.", duration_min: 22, type: "pasivo" },
      { id: 4, desc: "Dejar enfriar, colar la base y porcionar en bolsas de 205 g. Refrigerar.", duration_min: 20, type: "pasivo" },
      { id: 5, desc: "[SOBRASADA] Calentar sobrasada en microondas 1 min potencia media. Incorporar a mezcla de huevo y base. Añadir miel. Mezclar.", duration_min: 3, type: "activo", variant: "sobrasada" },
      { id: 6, desc: "[ALCACHOFAS] Calentar y secar alcachofas en sartén. Incorporar a mezcla de huevo y base con queso. Mezclar.", duration_min: 8, type: "activo", variant: "alcachofas_queso" },
      { id: 7, desc: "[ANCHOAS] Preparar mezcla base sin añadidos. Las anchoas se colocan al emplatar.", duration_min: 1, type: "activo", variant: "anchoas" },
      { id: 8, desc: "Calentar bolsa de base en microondas 2 min potencia media. Batir 2 huevos. Mezclar base caliente con huevo.", duration_min: 4, type: "activo" },
      { id: 9, desc: "Calentar sartén doble en vitrocerámica nivel 3 durante 3 min.", duration_min: 3, type: "pasivo" },
      { id: 10, desc: "Volcar mezcla en sartén caliente. Cocinar 3 min, voltear, cocinar 3 min más.", duration_min: 6, type: "activo" },
      { id: 11, desc: "Emplatar con 70 g de tomate rallado en vasito y rodaja de pan caliente.", duration_min: 2, type: "activo" }
    ],
    ingredients: {
      base: [
        { name: "Patata laminada", amount: 1000, unit: "g" },
        { name: "Cebolla laminada", amount: 380, unit: "g" },
        { name: "Aceite de oliva", amount: 100, unit: "g" },
        { name: "Sal", amount: 20, unit: "g" },
        { name: "Huevos", amount: 3, unit: "und/tortilla" }
      ],
      sobrasada: [
        { name: "Sobrasada", amount: 30, unit: "g" },
        { name: "Miel", amount: 8, unit: "g" }
      ],
      alcachofas_queso: [
        { name: "Alcachofas cortadas", amount: 1, unit: "und" },
        { name: "Queso curado cortado", amount: 48, unit: "g" }
      ],
      anchoas: [
        { name: "Anchoas", amount: 2, unit: "und" }
      ],
      emplatado: [
        { name: "Tomate rallado", amount: 70, unit: "g" },
        { name: "Pan (rodaja)", amount: 1, unit: "und" }
      ]
    }
  },
  {
    id: "salmorreta",
    name: "Salmorreta",
    servings_base: 8,
    steps: [
      { id: 1, desc: "Cortar tomates en cuartos y repartir en dos tuppers (~900 g cada uno).", duration_min: 5, type: "activo" },
      { id: 2, desc: "Añadir aceite y ajo al vaso de la Thermomix grande. Programar 6 min, 120°C, vel. 1.", duration_min: 6, type: "pasivo" },
      { id: 3, desc: "Añadir pimentón. Programar 30 seg, 120°C, vel. 1.", duration_min: 1, type: "pasivo" },
      { id: 4, desc: "Añadir pulpa de ñora. Programar 3 min, 110°C, vel. 1, marcha atrás.", duration_min: 3, type: "pasivo" },
      { id: 5, desc: "Añadir la mitad del tomate. Programar 15 min, 100°C, vel. 1, marcha atrás, sin cubilete.", duration_min: 15, type: "pasivo" },
      { id: 6, desc: "Añadir el resto del tomate y la sal. Programar 20 min, 100°C, vel. 1, marcha atrás, sin cubilete.", duration_min: 20, type: "pasivo" },
      { id: 7, desc: "Reposar 2 min con tapa puesta. Colocar cubilete con cuidado.", duration_min: 2, type: "pasivo" },
      { id: 8, desc: "Triturar: 30 seg vel. 8, luego 1 min vel. 10 (sin temperatura).", duration_min: 2, type: "activo" },
      { id: 9, desc: "Dejar reposar, envasar y conservar refrigerada.", duration_min: 5, type: "activo" }
    ],
    ingredients: [
      { name: "Tomate cortado", amount: 1875, unit: "g" },
      { name: "Aceite de oliva", amount: 405, unit: "g" },
      { name: "Ajo pelado sin germen", amount: 95, unit: "g" },
      { name: "Pulpa de ñora", amount: 125, unit: "g" },
      { name: "Sal", amount: 22, unit: "g" },
      { name: "Pimentón", amount: 9, unit: "g" }
    ]
  },
  {
    id: "tomate_confitado",
    name: "Tomate Confitado",
    servings_base: 4,
    depends_on: ["salmorreta"],
    steps: [
      { id: 1, desc: "Lavar tomates cherry. Mezclar en bandeja con aceite, romero y sal. Impregnar bien los tomates.", duration_min: 5, type: "activo" },
      { id: 2, desc: "Cocinar en MCC: 20 min, vel. 1, 180°C.", duration_min: 20, type: "pasivo" },
      { id: 3, desc: "Mezclar tomates con 180 g de salmorreta. Reservar.", duration_min: 3, type: "activo" }
    ],
    ingredients: [
      { name: "Tomates cherry", amount: 500, unit: "g" },
      { name: "Sal", amount: 5, unit: "g" },
      { name: "Aceite de oliva", amount: 10, unit: "g" },
      { name: "Romero", amount: 10, unit: "g" },
      { name: "Salmorreta", amount: 180, unit: "g" }
    ]
  },
  {
    id: "gazpacho",
    name: "Gazpacho",
    servings_base: 6,
    steps: [
      { id: 1, desc: "Lavar verduras. Pelar pepino. Retirar tallo y semillas del pimiento. Trocear todo en piezas de 3–4 cm.", duration_min: 8, type: "activo" },
      { id: 2, desc: "Retirar germen del ajo, colocar en vaso con agua y calentar en microondas 1 min a máxima potencia. Escurrir.", duration_min: 3, type: "activo" },
      { id: 3, desc: "Triturar tomate, pepino, pimiento, ajo y sal en MCC a vel. 10 durante 3 min.", duration_min: 3, type: "activo" },
      { id: 4, desc: "Reducir a vel. 4. Con máquina en marcha, incorporar aceite por el bocal en hilo fino durante 2 min.", duration_min: 2, type: "activo" },
      { id: 5, desc: "Añadir vinagre de Jerez. Mezclar 30 seg a vel. 5.", duration_min: 1, type: "activo" },
      { id: 6, desc: "Envasar en jarra, tapar con film y refrigerar mínimo 2 horas.", duration_min: 120, type: "pasivo" }
    ],
    ingredients: [
      { name: "Tomate", amount: 880, unit: "g" },
      { name: "Pimiento rojo", amount: 75, unit: "g" },
      { name: "Pepino", amount: 110, unit: "g" },
      { name: "Ajo", amount: 11, unit: "g" },
      { name: "Aceite de oliva", amount: 50, unit: "g" },
      { name: "Vinagre de Jerez", amount: 22, unit: "g" },
      { name: "Sal", amount: 7, unit: "g" }
    ]
  },
  {
    id: "mantequillas_compuestas",
    name: "Mantequillas Compuestas",
    servings_base: 3,
    variants: [
      { id: "ahumada", label: "Ahumada" },
      { id: "cayena", label: "Picante de Cayena" },
      { id: "tomillo_limon", label: "Tomillo y Limón" }
    ],
    steps: [
      { id: 1, desc: "Sacar mantequilla de la nevera y atemperar 60–90 min hasta textura de pomada.", duration_min: 75, type: "pasivo" },
      { id: 2, desc: "Trabajar la mantequilla pomada con espátula hasta homogénea y sin grumos.", duration_min: 3, type: "activo" },
      { id: 3, desc: "[AHUMADA] Mezclar sal y aroma de humo. Incorporar a la mantequilla en dos tandas, mezclando bien.", duration_min: 3, type: "activo", variant: "ahumada" },
      { id: 4, desc: "[CAYENA] Mezclar cayena, pimentón, ajo en polvo y sal. Incorporar a la mantequilla en dos tandas, mezclando bien.", duration_min: 3, type: "activo", variant: "cayena" },
      { id: 5, desc: "[TOMILLO Y LIMÓN] Lavar limones, rallar piel (4 g). Mezclar con tomillo y sal. Incorporar a la mantequilla en dos tandas, mezclando bien.", duration_min: 5, type: "activo", variant: "tomillo_limon" },
      { id: 6, desc: "Extender cada mantequilla sobre film formando un cilindro. Enrollar y apretar bordes.", duration_min: 5, type: "activo" },
      { id: 7, desc: "Refrigerar mínimo 2 horas antes del primer servicio.", duration_min: 120, type: "pasivo" }
    ],
    ingredients: {
      ahumada: [
        { name: "Mantequilla", amount: 250, unit: "g" },
        { name: "Aroma de humo en polvo", amount: 3, unit: "g" },
        { name: "Sal", amount: 2, unit: "g" }
      ],
      cayena: [
        { name: "Mantequilla", amount: 250, unit: "g" },
        { name: "Cayena molida", amount: 2, unit: "g" },
        { name: "Pimentón dulce", amount: 2, unit: "g" },
        { name: "Ajo en polvo", amount: 1, unit: "g" },
        { name: "Sal", amount: 2, unit: "g" }
      ],
      tomillo_limon: [
        { name: "Mantequilla", amount: 250, unit: "g" },
        { name: "Tomillo seco", amount: 2, unit: "g" },
        { name: "Ralladura de limón", amount: 4, unit: "g" },
        { name: "Sal", amount: 2, unit: "g" }
      ]
    }
  },
  {
    id: "pan",
    name: "Pan",
    servings_base: 8,
    steps: [
      { id: 1, desc: "Calentar 270 g de agua a 40°C exactos (no superar).", duration_min: 3, type: "activo" },
      { id: 2, desc: "Colocar en cubeta de panificadora: agua tibia + masa madre. Mezclar brevemente.", duration_min: 2, type: "activo" },
      { id: 3, desc: "Añadir harina cubriendo toda la superficie. Hacer hueco y colocar levadura. Añadir sal en esquina opuesta.", duration_min: 3, type: "activo" },
      { id: 4, desc: "Seleccionar programa 9 (amasado). Esperar a que finalice.", duration_min: 20, type: "pasivo" },
      { id: 5, desc: "Retirar palas, dar forma al pan y colocar en cubeta limpia.", duration_min: 5, type: "activo" },
      { id: 6, desc: "Fermentar tapado con paño húmedo mínimo 2 horas.", duration_min: 120, type: "pasivo" },
      { id: 7, desc: "Seleccionar programa 15 (horneado). Esperar a que finalice.", duration_min: 60, type: "pasivo" },
      { id: 8, desc: "Retirar pan de inmediato, desmoldar sobre rejilla.", duration_min: 2, type: "activo" },
      { id: 9, desc: "Enfriar completamente antes de cortar, mínimo 45 min.", duration_min: 45, type: "pasivo" }
    ],
    ingredients: [
      { name: "Harina", amount: 500, unit: "g" },
      { name: "Levadura seca", amount: 2, unit: "g" },
      { name: "Masa madre", amount: 100, unit: "g" },
      { name: "Agua a 40°C", amount: 270, unit: "g" },
      { name: "Sal", amount: 12, unit: "g" }
    ]
  },
  {
    id: "base_limonada",
    name: "Base Limonada",
    servings_base: 8,
    steps: [
      { id: 1, desc: "Rallar piel de limones hasta 15 g de ralladura. Exprimir y colar hasta obtener 800 g de zumo.", duration_min: 10, type: "activo" },
      { id: 2, desc: "Introducir en MCC: agua, azúcar, ralladura y sal. Programar 8 min, 100°C, vel. 3, cubilete invertido.", duration_min: 8, type: "pasivo" },
      { id: 3, desc: "Verificar que el azúcar esté disuelto. Añadir zumo de limón colado.", duration_min: 2, type: "activo" },
      { id: 4, desc: "Programar 3 min, 90°C, vel. 2. No superar temperatura ni tiempo.", duration_min: 3, type: "pasivo" },
      { id: 5, desc: "Colar, envasar herméticamente y conservar.", duration_min: 5, type: "activo" }
    ],
    ingredients: [
      { name: "Zumo de limón colado", amount: 800, unit: "g" },
      { name: "Ralladura de limón", amount: 15, unit: "g" },
      { name: "Azúcar", amount: 1000, unit: "g" },
      { name: "Sal", amount: 2, unit: "g" },
      { name: "Agua", amount: 400, unit: "g" }
    ]
  }
];
