# Alan Henrique — Demonstração de Landing Page

Esta é uma landing page conceitual em **Next.js + React + TypeScript + Tailwind CSS**, criada como demonstração para Alan Henrique, personal trainer com atendimento principalmente presencial em Barretos.

> **Atenção:** esta página é uma demonstração conceitual. Textos, imagens, dados de contato e identidade visual estão sujeitos à aprovação do profissional. O site está configurado com `noindex` para não ser indexado enquanto não for validado.

## Estrutura

- `app/layout.tsx` — metadados, fontes (Inter e Lora) e configuração de `noindex`.
- `app/page.tsx` — composição da página.
- `app/components/` — componentes da landing page.
- `app/globals.css` — variáveis de cor, tipografia e regras de acessibilidade.
- `next.config.ts` — exportação estática para a pasta `dist/`.
- `.verdentc.json` — contrato de deploy estático para publicação futura.

## Como executar localmente

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Como gerar a versão de produção

```bash
npm run build
```

O resultado da build estática será gerado na pasta `dist/`.

## Publicação

A publicação será feita em etapa separada, via GitHub e Vercel, em endereço temporário gratuito. Não configure domínio definitivo, serviços pagos ou credenciais nesta etapa.

## Diretrizes seguidas

- Design inspirado em [Rita Guerra Personal](https://www.ritaguerrapersonal.com.br/), reinterpretado com identidade própria.
- Sem cópia de textos, fotos, logotipos, depoimentos ou resultados da referência.
- Sem dados inventados sobre credenciais, CREF, especializações, anos de experiência, alunos, avaliações ou preços.
- Contato provisório via Instagram até confirmação de número profissional de divulgação.
- Acessibilidade: navegação por teclado, contraste legível, foco visível e respeito a `prefers-reduced-motion`.
- Layout responsivo e movimento sutil.
