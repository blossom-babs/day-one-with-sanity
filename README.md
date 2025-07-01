# Sanity Day One

A hands-on walkthrough following [Sanity's official Day One course](https://www.sanity.io/docs) to learn how to structure content, define schemas, and build a customizable content studio.

Deployed at `https://sanity-101.sanity.studio/`

## 📚 What I Learned

- How to scaffold a Sanity Studio using the CLI
- Creating and registering custom document types (schemas)
- Using the structure builder to customize the Studio layout
- Defining fields like `string`, `image`, `reference`, `array`, and more
- Validating fields and adding conditional logic
- Previewing real-time content updates

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- PNPM or NPM
- Sanity CLI:  

### Install dependencies

```bash
pnpm install
```

### Start Sanity Studio

```bash
pnpm dev
```

The Studio will be available at `http://localhost:3333` (locally).

Deployed at `https://sanity-101.sanity.studio/`

## 🗂️ Project Structure

```
.
├── sanity.config.ts       # Studio config and plugins
├── schemaTypes/               # Document and object schema definitions
│   ├── artistType.ts
│   ├── eventType.ts
│   └── index.ts
```

## Scripts

* `pnpm dev` – Start the Sanity Studio
* `pnpm deploy` – Deploy sanity to production

## 🧠 Notes

* Sanity Studio is highly customizable with plugins, custom inputs, and real-time previews.
* All schemas are co-located in the `schemas/` directory and auto-imported through the `index.ts`.
* Sanity can accept React components into schema types
* It is an extremely powerful tool and this barely scratches the surface 

## Resources

* [Sanity Docs](https://www.sanity.io/docs)
* [Sanity Studio v3 Guide](https://www.sanity.io/docs/sanity-studio)
* [Structure Builder Examples](https://www.sanity.io/docs/structure-builder-introduction)
