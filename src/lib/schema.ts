import { DOCTOR_URL, SITE } from "../config";

export function globalJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE}/#website`,
        url: `${SITE}/`,
        name: "Mali ORL",
        inLanguage: "hr",
        publisher: { "@id": `${SITE}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${SITE}/#organization`,
        name: "Mali ORL",
        url: `${SITE}/`,
      },
      {
        "@type": "Physician",
        "@id": `${SITE}/#physician`,
        name: "Marcel Marjanović Kavanagh",
        honorificPrefix: "Prim.",
        honorificSuffix: "univ.mag.med.",
        description:
          "specijalist otorinolaringologije, subspecijalist plastične i rekonstruktivne kirurgije glave i vrata",
        medicalSpecialty: ["https://schema.org/Otolaryngologic", "https://schema.org/Pediatric"],
        url: DOCTOR_URL,
      },
    ],
  };
}

export function endoscopyJsonLd(faq: { pitanje: string; odgovor: string }[]) {
  const url = `${SITE}/pregled-i-endoskopija/`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${url}#webpage`,
        url,
        name: "Pregled djeteta i endoskopija nosa: bez zračenja i bez straha",
        headline: "Pregled djeteta i endoskopija nosa: bez zračenja i bez straha",
        inLanguage: "hr",
        about: { "@id": `${url}#procedure` },
      },
      {
        "@type": "MedicalProcedure",
        "@id": `${url}#procedure`,
        name: "Fleksibilna nazofaringoskopija",
        procedureType: "https://schema.org/NoninvasiveProcedure",
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.pitanje,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.odgovor,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Početna",
            item: `${SITE}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Pregled i endoskopija",
            item: url,
          },
        ],
      },
    ],
  };
}
