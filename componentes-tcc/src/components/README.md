# Componentes Bloom

Cada componente fica em `src/components/<Nome>/`, com um `.tsx` e um `.css`. Tudo é exportado por `src/components/index.ts`:

```tsx
import { Sidebar, Topbar, StatCard } from "../components";
```

## Ícones

Todo lugar que tem ícone recebe uma prop (`icon`, `leadingIcon`, `chevronIcon`, etc). Se a prop não for passada, aparece um quadradinho tracejado com o nome do ícone, só pra mostrar onde ele entra.

```tsx
<Sidebar
  items={[{ id: "home", label: "Inicio", icon: <img src={homeIcon} alt="" /> }]}
  activeId={activeId}
  onSelect={setActiveId}
/>
```

O ícone sempre se ajusta ao tamanho do quadradinho, então não precisa definir tamanho na imagem.

Props de ícone por componente:

- `Sidebar`: `menuIcon` e `icon` em cada item
- `Topbar`: `brandIcon`, `searchIcon`, `bellIcon`, `calendarIcon`, `chevronIcon`, `avatar`
- `Button`: `icon`
- `SearchInput`: `icon`
- `StatCard`: `icon`, `trendIcon`, `chevronIcon`
- `SummaryStats`: `icon` em cada item
- `ListItemCard`: `leadingIcon`
- `Tabs`: `icon` em cada item
- `TextField`: `leadingIcon`
- `SelectField`: `chevronIcon`
- `MiniCalendar`: `titleIcon`, `prevIcon`, `nextIcon`
- `HeroBanner`: `backgroundImage`

No `Topbar`, o `brandIcon` é o B do logo. Sem ele, aparece só a letra.

No `MiniCalendar`, se você não passar o `prevIcon`, ele usa o `nextIcon` virado ao contrário.

## Componentes

`IconSlot`, `Sidebar`, `Topbar`, `PageHeader`, `Badge`, `Button`, `SummaryStats`, `StatCard`, `ListItemCard`, `Tabs`, `SearchInput`, `TextField`, `TextAreaField`, `SelectField`, `MiniCalendar`, `HeroBanner`.

O `ListItemCard` é a linha de lista genérica (salas, turmas, matérias, funcionários, eventos, comunicados, redes de apoio, denúncias). Ele recebe `leadingIcon`, `title`, `subtitle`, `meta` e `trailing`.

O `MiniCalendar` já inclui o título, a navegação do mês, os pontinhos nos dias com evento e a lista "do dia" embaixo.

`src/pages/ComponentsShowcase.tsx` é uma página simples que usa todos os componentes com dados de exemplo.

## Ícones em `src/assets/icons/`

- `menu`: botão de menu do `Sidebar`
- `home`, `bem-estar`, `acolhimento`, `eventos`, `comunicados`, `gerenciamento`: itens do `Sidebar`
- `logo-b`: `brandIcon` do `Topbar`
- `sino`, `calendario`, `chevron-down-topbar`: `Topbar`
- `busca`: `SearchInput`
- `chevron-down-form`: `SelectField`
- `chevron-right`: `StatCard`, `ListItemCard` e `MiniCalendar`
- `calendario-titulo`: `titleIcon` do `MiniCalendar`
- `grafico`, `pessoas`, `pausado`: `SummaryStats`
- `sorriso`, `seta-cima`: `StatCard`

Ainda sem ícone: cards "Participação" e "Turmas em atenção" do dashboard e o `avatar` do `Topbar`.
