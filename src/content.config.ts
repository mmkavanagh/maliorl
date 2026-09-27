import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { OBJAVLJENO } from "./lib/published";

const LIJECNIK = "Prim. Marcel Marjanović Kavanagh, univ.mag.med.";

const faq = z.object({
  pitanje: z.string().min(1),
  odgovor: z.string().min(1),
  oznaka: z.boolean().optional(),
});

const povezano = z.array(z.string()).refine((items) => items.every((item) => OBJAVLJENO.has(item)), {
  message: "povezano sadrži stranicu koja nije objavljena",
});

function zajednicko(faza: "simptom" | "stanje" | "odluka") {
  return {
    title: z.string().min(1).max(60),
    description: z.string().min(140).max(155),
    h1: z.string().min(1),
    kljucnaRijec: z.string().min(1),
    sekundarne: z.array(z.string()).default([]),
    faza: z.literal(faza),
    razlog: z.string().min(1),
    ukratko: z.array(z.string().min(1)).min(3).max(5),
    povezano,
    faq: z.array(faq).min(1),
    objavljeno: z.coerce.date(),
    azurirano: z.coerce.date(),
    pregledao: z.literal(LIJECNIK),
    sinusi: z.boolean().default(false),
  };
}

const simptomi = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/simptomi" }),
  schema: z.object(zajednicko("simptom")),
});

const stanja = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/stanja" }),
  schema: z.object(zajednicko("stanje")),
});

const zahvati = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/zahvati" }),
  schema: z.object({
    ...zajednicko("odluka"),
    obavljaSe: z.boolean(),
  }),
});

export const collections = { simptomi, stanja, zahvati };
