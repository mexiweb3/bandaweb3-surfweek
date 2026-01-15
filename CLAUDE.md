# CLAUDE.md - BandaWeb3 Surf Week

## Proyecto

Side event de BandaWeb3 durante ETH Cinco de Mayo Pop-Up City en Puerto Escondido.

## Links

| Recurso | URL |
|---------|-----|
| Landing | https://ethcdm-pxm.vercel.app |
| GitHub | https://github.com/mexiweb3/bandaweb3-surfweek |
| Vercel | mexis-projects-860cf23c/ethcdm-pxm |

## Stack

- Next.js 16 + TypeScript
- Tailwind CSS
- Vercel (auto-deploy desde GitHub)

## Estructura

```
ethcdm-pxm/
├── src/app/
│   ├── page.tsx          # Landing page
│   ├── layout.tsx        # Layout + metadata
│   └── globals.css       # Estilos + animaciones
├── docs/
│   ├── planning.md       # Info del evento y partners
│   ├── logistics.md      # Vuelos, hospedaje, transporte
│   └── status.md         # Tracking de tareas
└── CLAUDE.md             # Este archivo
```

## Comandos

```bash
npm run dev      # Dev server
npm run build    # Build
git push         # Auto-deploy a Vercel
```

## Contexto del Evento

### ETH Cinco de Mayo 2026
- **Pop-Up City:** Mayo 8-27, Puerto Escondido
- **Buildathon:** Mayo 14-17, Oaxaca Ciudad
- **Organizadores:** @ETHCincoDeMayo, @fruteroclub

### BandaWeb3 Surf Week
- **Fechas:** Mayo 18-24, 2026
- **Formato:** Surf Week + Sunset Session (episodio en vivo)
- **Partner surf:** Surf Travel & Friends

## Pendientes Clave

1. Esperar respuesta de Surf Travel & Friends
2. Registrar side event con ETH CDM
3. Reservar vuelos y hospedaje
4. Planear Sunset Session (tema, invitados)

## Documentación

Ver `/docs/` para información detallada sobre:
- `planning.md` - Concepto y partners
- `logistics.md` - Viaje y presupuesto
- `status.md` - Tareas y progreso
