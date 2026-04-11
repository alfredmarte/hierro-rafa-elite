# [SKILL: CONTENT MAPPER & DATA INJEST]

**Propósito:** Activar este protocolo al separar grandes volúmenes de texto (del cliente original) para crear bases de datos y separarlas de los Componentes React.

## Reglas de Limpieza de Bases de Datos Front-End

1. **Abstracción Absoluta:**
   - La directiva principal de este template es que los componentes `.jsx` no tengan párrafos duros. Todo el Array de Productos, Testimonios, FAQs o Sucursales debe escribirse primero en un archivo de configuración (`src/data/config.js` o similar).

2. **Formato JSON/JS Seguro:**
   - Para las ubicaciones, usa una matriz estricta:
     `{ id: string, title: string, address: string, phone: string, coords: [lat, lng] /* opcional */ }`
   - Si creas descripciones, usa `text-balance` cuando vayas a renderizar el campo, pero mantén el array libre de etiquetas HTML amenos que estés renderizando MarkDown explícito.

3. **Filtrado de Copy:**
   - Antes de volcar los datos copiados del cliente, la IA ejecutará una sub-pasada del protocolo de **COPYWRITING LETAL**, limpiando las redundancias y mejorando el delivery en el mismo objeto JSON generado.
