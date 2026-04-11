# Skill Module: Arquitecto Odoo ERP Integrator

Esta habilidad instruye a la IA a diseñar y conectar el frontend web transaccional (React/SV Elite) con el backend de Odoo ERP, diferenciando quirúrgicamente los flujos operativos entre corporativo y consumo masivo.

## 1. Topología B2B (Módulo Corporativo y Pedidos Masivos)
En Odoo B2B no creamos ventas directas; creamos **Leads** y **Quotations**. 

**A. Pipeline CRM (Generación de Leads)**
Cuando un botón diga "Pedir Cotización Corporativa", no enviaremos un email; golpearemos Odoo `crm.lead`.
```javascript
// PLANTILLA: Dispatch a CRM Odoo
export const dispatchOdooLead = async (payload) => {
  // OBLIGATORIO: Usar un webhook intermedio (Make/N8N) para proteger las pass de XML-RPC de Odoo.
  await fetch('/api/odoo-proxy/crm', {
    method: 'POST',
    body: JSON.stringify({
      name: `Cotización de Obra - ${payload.company}`,
      contact_name: payload.contact,
      description: `Requerimiento de acero: ${payload.materials}`,
      tag_ids: [4] // Etiqueta: 'B2B Web'
    })
  });
};
```

**B. Auto-Quotation Pipeline (Ventas B2B)**
Si el formulario es estricto (tiene cantides de varillas, etc.), la IA programará el end-point para golpear `sale.order` en estado `draft` (Presupuesto).

## 2. Topología B2C (Retail Directo & Consumidor Final)
En Odoo B2C no hay intermediarios ni cotizaciones. Es facturación fría y rápida.

**A. Flujo de Venta Directa**
Cuando un usuario le da a "Comprar" vía Stripe/Web, la orden se envía a Odoo `sale.order` pero en estado `sale` (Confirmada).
```javascript
// PLANTILLA: Creación de Sale Order Confirmada (B2C)
export const createB2CDirectOrder = async (cartItems, customerId) => {
  await fetch('/api/odoo-proxy/sale', {
    method: 'POST',
    body: JSON.stringify({
      partner_id: customerId,
      state: 'sale', // Obligatorio marcar como Venta cerrada, no Presupuesto.
      order_line: cartItems.map(item => [0, 0, {
        product_id: item.odoo_id,
        product_uom_qty: item.qty
      }])
    })
  });
};
```

**B. Inventario en Vivo (POS Sync)**
El Frontend leerá el modelo `product.template` de Odoo cada hora. 
Si el almacén físico en Puerto Plata vende la varilla en el Punto de Venta (POS), Odoo baja la variable `qty_available`. La web debe renderizar "Agotado Online" instantáneamente sin intervención webmaster.

## MADA DE COMANDO PARA LA IA
Al generar webs con Odoo, la IA **tiene prohibido**:
1. Escribir credenciales de Odoo XML-RPC en código web visible. SIEMPRE instruir el uso de proxies.
2. Mezclar el modelo B2C (`state: 'sale'`) en clientes B2B. Los clientes B2B necesitan negociación previa en estado `draft`.
