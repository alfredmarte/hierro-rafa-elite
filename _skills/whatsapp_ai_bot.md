# Skill Module: WhatsApp AI Bot Architect

Este documento dota a la IA de la capacidad de transformar CTAs estáticos de WhatsApp en puntos de contacto transaccionales diseñados para alimentar chatbots B2B gobernados por LLMs (Make.com, Flowise, Botpress, Twilio).

## 1. Context Injection via URLs Dinámicos (Approach Básico)
**El Fallo:** Enviar tráfico a `wa.me/XXXXXXXXX` sin parámetros. El bot recibe un "Hola" vacío y no sabe de dónde viene el lead.
**La Solución SV Elite:** La IA del Blueprint DEBE programar botones genéricos para inyectar payloads URLEncoded que le den "Prompt" local al bot receptor.

```javascript
// ESTRUCTURA OBLIGATORIA
export const generateWAPayload = (phone, product, intent) => {
  const payload = `[SISTEMA_REF:${intent}] Hola, vengo desde la web. Deseo cotización para el producto: ${product}.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(payload)}`;
};
```
*Impacto:* El endpoint del IA Bot parseará `[SISTEMA_REF]` instantáneamente para saltar la fase de *Onboarding* y mandar directo al lead a cotización.

## 2. API-First Approach (Form to Webhook)
Para proyectos premium, anularemos la apertura invasiva de WhatsApp Web. Usaremos un Drawer UI que capture el requerimiento y lo envíe directamente al Endpoint IA vía POST.

```javascript
// PLANTILLA DE INTEGRACIÓN SILENCIOSA
export const dispatchToAIBot = async (userPhone, requirementArray) => {
  try {
    await fetch('https://hook.us1.make.com/TU_WEBHOOK_AQUI', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        source: 'SV_ELITE_WEBSITE',
        lead_phone: userPhone,
        raw_list: requirementArray
      })
    });
    return true;
  } catch(e) { return false; }
};
```

## 3. El "Master System Prompt" Vendedor B2B (Para el Bot)
Cuando te pidan formular el Prompt para el "cerebro" del Bot de WhatsApp, TIENES PROHIBIDO generar prompts pasivos ("Eres un asistente amable"). 

**ESTRUCTURA DE PROMPT PARA BOTS B2B:**
> "Eres el Director Comercial de [BRAND_NAME]. Operas en la industria de [INDUSTRY]. 
> Tus prospectos son ingenieros y constructores duros. No digas 'Hola, ¿cómo te ayudo hoy?'. Di: *'Dime exactamente qué materiales exige tu obra y el calibre. Te paso pricing en 1 minuto.'*
> Si el usuario envía una foto de un plano, usa Vision API para extraer las medidas del acero y formula la tabla de cotización.
> Si la métrica es menor a [MINIMAL_ORDER_VALUE], envíalo a ferretería minorista. Tu tiempo es oro."
