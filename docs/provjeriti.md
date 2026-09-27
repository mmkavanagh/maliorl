# PROVJERITI — sadržaj zahvata

Tekst je prepravljen 27. rujna 2026. Datum izmjene nije datum liječničke potvrde. Stranice s novim ili bitno prepravljenim tekstom nose oznaku „Tekst ažuriran”, ne „Stručno pregledano”.

## Liječnik treba potvrditi medicinske tvrdnje

- [ ] Endoskopska adenoidektomija opisana je kao zahvat koji se radi (`obavljaSe: true` na `/zahvati/adenoidektomija/`). Mikrodebrider je naveden kao jedan mogući instrument, ne kao pravilo. Potvrditi smije li tako ostati.
- [ ] Uz cjevčice, treći krajnik u istoj anesteziji opisan je prema smjernici AAO-HNS 2022 (smetnje od trećeg krajnika, ili dob 4 godine i više). Potvrditi da se tako i razgovara na pregledu.
- [ ] Tonzilotomija je izdvojena iz stare stranice `/zahvati/vadenje-krajnika/`, koja je imala `obavljaSe: true` i već spominjala djelomično uklanjanje. Potvrditi da se tonzilotomija nudi kao zaseban zahvat.
- [ ] Tonzilektomija ostaje na starom URL-u `/zahvati/vadenje-krajnika/`. Pragovi angina i noćno praćenje prepisani su iz sažetka smjernice AAO-HNS 2019. Potvrditi da se ti pragovi koriste u razgovoru s roditeljima.
- [ ] Smanjenje donjih nosnih školjki ima `obavljaSe: true` jer stara stranica o polipima i školjkama kaže da oba zahvata radi liječnik. Potvrditi da se radi baš redukcija donjih školjki i da se tehnika ne smije imenovati kao jedina.
- [ ] Kombinirani zahvat, strano tijelo, kauterizacija, otoplastika i dječja endoskopska operacija sinusa nisu označeni kao potvrđena ponuda (`obavljaSe: false`). Tekst ih objašnjava. Potvrditi treba li koji od njih prijeći u ponudu.
- [ ] Na stranici o resici piše da se kod novorođenčeta frenulotomija često radi bez uspavljivanja, prema izvješću AAP 2024. To nije opis protokola ove ordinacije. Potvrditi kako se kod vas radi dojenče, a kako starije dijete.
- [ ] Istezanje rane nakon frenulotomije nije dano kao opća uputa. AAP 2024 to ne preporučuje. Ako vi ipak dajete individualnu uputu, na stranici je ne smije biti.

## Naručivanje i mjerenje

- [ ] Pet razloga dolaska koje Mali ORL šalje u `razlog`: Dječji ORL pregled (`djecji-orl-pregled`), Treći krajnik (`treci-krajnik`), Ventilacijske cjevčice (`ventilacijske-cjevcice`), Frenulum (`frenulum`), Ostali zahvati (`ostali-zahvati`). Obrazac na drmarjanovickavanagh.com ih 27. rujna 2026. ne prepoznaje. Potvrditi nazive prije nego što se dodaju u padajući izbornik.
- [ ] GA4 ili GTM identifikator za maliorl.com, i tekst privole. Dok toga nema, `ANALYTICS_CONSENT` ostaje false i mjerenje se ne šalje. Identifikator s osobnog weba se ne kopira ovdje.
- [ ] Pravni nositelj, adresa, OIB i sud za politiku privatnosti. Nisu upisani.

## Organizacijske činjenice koje u repou nisu poznate

- [ ] Koja se tehnika uvijek koristi (mikrodebrider, škare, laser, način smanjenja školjki, kauterizacija kemijski ili toplinski).
- [ ] Ide li svako dijete kući isti dan, i za koji zahvat. Stranice to više ne obećavaju.
- [ ] Sati natašte, sat dolaska i doze lijekova. Piše samo da upute daje anesteziolog za to dijete.
- [ ] Koje zahvate liječnik stvarno nudi osim onih koji su u repou već imali `obavljaSe: true`: adenoidektomija, cjevčice, frenulotomija, vađenje krajnika (uključujući spomen tonzilotomije) te polipi i nosne školjke.
- [ ] Bolnica ili dnevna bolnica, tko daje anesteziju i koji je raspored kontrola.
- [ ] Cijene. Nisu dodane.
- [ ] Stara rečenica da se o otoplastici razgovara oko 5. do 6. godine maknuta je jer nije bila potvrđena. Ako godina stoji, treba je vratiti kao vašu, ne kao opće pravilo.

## Izvori koji su otvoreni, a nisu stavljeni kao trenutno pravilo

- [ ] Klinički indikatori AAO-HNS za tonzilektomiju, adenoidektomiju i adenotonzilektomiju otvoreni su 27. rujna 2026. Stranica kaže da Akademija sadržaj pregledava (oznaka 7. kolovoza 2014.) i poziva se na smjernicu iz 2011. Zato postotci krvarenja i kriterij sinusitisa s te stranice nisu prepisani roditeljima.
- [ ] Posebna smjernica za dječju endoskopsku kirurgiju sinusa (EPOS ili AAO-HNS o FESS-u) nije otvorena. Stranica `/zahvati/endoskopska-kirurgija-sinusa/` zato ostaje opća i nije označena kao ponuda.
- [ ] Smjernica za krvarenje iz nosa nije otvorena. Minute stiska (10–15 ili 15–20) maknute su iz javnog teksta.
