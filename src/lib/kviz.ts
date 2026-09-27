export type Odgovor = "da" | "ne" | "nez";
export type Ishod = "A" | "B" | "C";
export type Razlog = "disanje" | "uho" | "grlo" | "nos" | "opce";

/**
 * A: at least one yes on question 2 or 9, or yes on both 6 and 7.
 * B: at least two yes answers on the other questions.
 * C: otherwise.
 * razlog is the group with the most yes answers: disanje (1–4, 7), uho (5–6), grlo (8), nos (9).
 * "Ne znam" does not count as yes. Nothing is stored.
 */
export function ocijeni(odgovori: Odgovor[]): { ishod: Ishod; razlog: Razlog; nos: boolean } {
  const da = (n: number) => odgovori[n - 1] === "da";
  const broj = (pitanja: number[]) => pitanja.filter(da).length;
  const grupe = {
    disanje: broj([1, 2, 3, 4, 7]),
    uho: broj([5, 6]),
    grlo: broj([8]),
    nos: broj([9]),
  };
  const redoslijed = ["disanje", "uho", "grlo", "nos"] as const;
  const max = Math.max(...redoslijed.map((kljuc) => grupe[kljuc]));
  const razlog: Razlog = max === 0 ? "opce" : (redoslijed.find((kljuc) => grupe[kljuc] === max) ?? "opce");
  const nos = da(9);
  const a = da(2) || da(9) || (da(6) && da(7));
  if (a) return { ishod: "A", razlog, nos };
  const ostala = broj([1, 3, 4, 5, 6, 7, 8]);
  if (ostala >= 2) return { ishod: "B", razlog, nos };
  return { ishod: "C", razlog, nos };
}
