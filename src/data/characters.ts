export interface Character {
  id: string;
  name: string;
  nickname?: string;
  patronymic?: string;
  fullName: string;
  role: 'hoofdpersonage' | 'bijpersonage' | 'zijpersonage';
  category: 'karamazov' | 'klooster' | 'dorp' | 'overig';
  age?: string;
  description: string;
  deeperProfile: string; // spoiler-free character analysis
  relationships: string[];
  firstAppearsInBook: number;
  tags: string[];
}

export const characters: Character[] = [
  {
    id: 'fjodor',
    name: 'Fjodor Pavlovitsj Karamazov',
    nickname: 'Fjodor',
    fullName: 'Fjodor Pavlovitsj Karamazov',
    role: 'hoofdpersonage',
    category: 'karamazov',
    age: 'circa 55 jaar',
    description:
      'De patriarch van de Karamazov-familie: een welgesteld maar moreel verloederd grondbezitter in een provinciestadje. Fjodor is intelligent genoeg om zijn eigen verdorvenheid te kennen, maar kiest er bewust voor zich eraan over te geven. Hij is buitensporig wellustig, gierig, en gedraagt zich als een clown — een masker dat hij zelf heeft opgezet en nooit meer afzet. Zijn verhouding met zijn drie zonen is zo goed als nihil: hij heeft hen als kinderen in de steek gelaten en trekt nu hun erfenis in twijfel.',
    deeperProfile:
      'Fjodor belichaamt wat Dostojevski de "Karamazov-natuur" noemt: een onbedwingbare levensdrang die zonder moreel kompas alle kanten opgaat. Hij is geen eendimensionale schurk — zijn zelfspot en zijn onverwachte flitsen van eerlijkheid maken hem verontrustend levensecht. Zijn rivaliteit met zijn oudste zoon Mitja om de gunsten van Groesjka is een van de centrale conflicten van de roman.',
    relationships: ['Vader van Dmitri, Ivan en Aljosha', 'Vader (onwettig) van Smerdjakiv', 'Rivaal van Mitja om Groesjka'],
    firstAppearsInBook: 1,
    tags: ['vader', 'grondbezitter', 'antagonist', 'wellustig'],
  },
  {
    id: 'dmitri',
    name: 'Dmitri Fjodorovitsj Karamazov',
    nickname: 'Mitja',
    fullName: 'Dmitri Fjodorovitsj Karamazov',
    role: 'hoofdpersonage',
    category: 'karamazov',
    age: 'circa 28 jaar',
    description:
      'De oudste en meest stormachtige van de drie broers. Mitja is een voormalig militair die zijn geld erdoor jaagt en leeft bij de gratie van zijn passies. Hij is eerlijk, impulsief, eervol in zijn eigen onstuimige manier — maar ook zelfdestructief. Zijn erfenisconflict met zijn vader loopt als een rode draad door het verhaal, net als zijn liefde voor de sensuele Groesjka, ook al is hij verloofd met de trotse Katja.',
    deeperProfile:
      'Mitja staat symbool voor de menselijke wil in zijn meest ongetemde vorm. Hij is niet slecht — hij is ongetemd. Dostojevski tekent hem met groot mededogen: Mitja ziet zijn eigen tekortkomingen, schaamt zich ervoor, en streeft desondanks naar iets groots en zuivers. Zijn louteringsboog in de roman is een van de meest ontroerende in de wereldliteratuur.',
    relationships: ['Zoon van Fjodor', 'Halfbroer van Ivan en Aljosha', 'Verloofd met Katja', 'Verliefd op Groesjka'],
    firstAppearsInBook: 1,
    tags: ['oudste broer', 'militair', 'passioneel', 'impulsief'],
  },
  {
    id: 'ivan',
    name: 'Ivan Fjodorovitsj Karamazov',
    nickname: 'Ivan',
    fullName: 'Ivan Fjodorovitsj Karamazov',
    role: 'hoofdpersonage',
    category: 'karamazov',
    age: 'circa 23 jaar',
    description:
      'De intellectuele middelste broer. Ivan is een briljant denker en schrijver die worstelt met de fundamentele vragen van geloof, rede en de rechtvaardigheid van God. Hij heeft God niet afgewezen omdat hij kan bewijzen dat hij niet bestaat — maar omdat hij de wereld die God heeft geschapen niet accepteert. Zijn redenaties zijn scherp, zijn pijn is echt, en zijn innerlijke strijd is de filosofische ziel van de roman.',
    deeperProfile:
      'Ivan is de belichaming van het moderne rationele intellect dat botst op de grenzen van de rede. Zijn beroemde "Grootinquisiteur"-gedicht is een van de diepzinnigste teksten in de Russische literatuur. Maar Ivan is geen koud filosoof: onder zijn redenaties gloeit een intense, onderdrukte emotionaliteit. Zijn keuzes in de roman hebben gevolgen die hij nooit had voorzien.',
    relationships: ['Zoon van Fjodor', 'Halfbroer van Mitja', 'Broer van Aljosha', 'Verliefd op Katja'],
    firstAppearsInBook: 1,
    tags: ['middelste broer', 'filosoof', 'intellectueel', 'atheïst'],
  },
  {
    id: 'aljosha',
    name: 'Aleksej Fjodorovitsj Karamazov',
    nickname: 'Aljosha',
    fullName: 'Aleksej Fjodorovitsj Karamazov',
    role: 'hoofdpersonage',
    category: 'karamazov',
    age: 'circa 20 jaar',
    description:
      'De jongste broer en de morele ankerfiguur van de roman. Aljosha is novice in het plaatselijke klooster en leerling van de geliefde ouderling Zosima. Hij is zacht, liefdevol en diep gelovig — maar geen naïeve heilige. Aljosha begrijpt mensen intuitief, omarmt ze zonder te oordelen, en heeft een ongewone combinatie van geestelijke diepte en praktisch mededogen.',
    deeperProfile:
      'Dostojevski noemde Aljosha zijn "grote zondaar in wording" — maar de roman toont eerder hoe zo iemand een heilige wordt. Zijn geloofskrisis na de dood van Zosima is een cruciaal moment in het boek. Aljosha verbindt alle verhaallijnen: hij is de enige die zowel met Mitja, als met Ivan, als met de jongens in het dorp een echte band heeft. Hij is degene voor wie alle personages hun masker afzetten.',
    relationships: ['Jongste zoon van Fjodor', 'Halfbroer van Mitja en Ivan', 'Leerling van ouderling Zosima'],
    firstAppearsInBook: 1,
    tags: ['jongste broer', 'novice', 'empathisch', 'spiritueel'],
  },
  {
    id: 'smerdjakiv',
    name: 'Pavel Fjodorovitsj Smerdjakiv',
    nickname: 'Smerdjakiv',
    fullName: 'Pavel Fjodorovitsj Smerdjakiv',
    role: 'hoofdpersonage',
    category: 'karamazov',
    age: 'circa 24 jaar',
    description:
      'Kok en lakei in het huis van Fjodor, en — naar fluistert men — zijn onwettige zoon bij de idiote bedelaarster Lizaveta. Smerdjakiv is koud, zwijgzaam en misprijzend. Hij veracht zijn vader en zijn halfbroers. Hij is epileptisch en heeft een donkere, berekende intelligentie. In tegenstelling tot de andere broers, draagt hij geen greintje van de Karamazov-warmte.',
    deeperProfile:
      'Smerdjakiv is Dostojevski\'s antwoord op de vraag: wat als het Karamazov-intellect zonder ziel werkt? Hij heeft Ivans redenaties geabsorbeerd maar mist zijn innerlijke worsteling. Hij is gevaarlijk juist omdat hij zo weinig voelt. Zijn rol in de centrale misdaad van de roman wordt gaandeweg duidelijk — en de consequenties daarvan zijn vernietigend.',
    relationships: ['Onwettige zoon van Fjodor', 'Halfbroer van Mitja, Ivan en Aljosha', 'Kok en lakei van Fjodor'],
    firstAppearsInBook: 1,
    tags: ['onwettige zoon', 'kok', 'koud', 'berekenings'],
  },
  {
    id: 'zosima',
    name: 'Startsj Zosima',
    nickname: 'Zosima',
    fullName: 'Ouderling Zosima',
    role: 'hoofdpersonage',
    category: 'klooster',
    age: 'oud (circa 65-70 jaar)',
    description:
      'De geliefde ouderling (startsj) van het plaatselijke klooster en geestelijk leermeester van Aljosha. Zosima is een man van diepe menselijkheid en zacht gezag — geen kerkelijke autoriteit, maar een spirituele gids die mensen ontmoet in hun pijn. Zijn levenswijsheid is niet abstract: hij spreekt over actieve liefde, verantwoordelijkheid en de onderlinge verbondenheid van alle mensen.',
    deeperProfile:
      'Zosima is het levende antwoord op Ivans intellectuele bezwaren tegen God. Waar Ivan redenaties opbouwt, leeft Zosima zijn geloof. Zijn levensverhaal — opgetekend door Aljosha — onthult een bewogen weg van zonde naar genade. Zijn visie op "actieve liefde" versus "abstracte liefde" is een van de centrale filosofische ideeën van de roman.',
    relationships: ['Geestelijk vader van Aljosha', 'Leermeester van het klooster'],
    firstAppearsInBook: 2,
    tags: ['ouderling', 'monnik', 'spiritueel leider', 'wijsheid'],
  },
  {
    id: 'groesjka',
    name: 'Agrafena Aleksandrovna Svetlova',
    nickname: 'Groesjka',
    fullName: 'Agrafena Aleksandrovna Svetlova',
    role: 'hoofdpersonage',
    category: 'dorp',
    age: 'circa 22 jaar',
    description:
      'De mooie, zelfstandige vrouw die zowel Fjodor als Mitja in haar ban houdt. Groesjka heeft een verleden: ze werd als meisje verlaten door een Poolse officier, en is sindsdien koelbloedig en zelfvoorzienend geworden. Ze woont op zichzelf, heeft zakelijke belangen en laat zich door niemand beheersen — ondanks de roddels van het stadje.',
    deeperProfile:
      'Groesjka is een van Dostojevski\'s meest gelaagde vrouwelijke personages. Ze verschijnt eerst als de sensuele verleidster, maar ontvouwt zich tot een vrouw met een eigen zielsleven, eigen pijn en eigen kracht. Haar relatie met Mitja is niet enkel hartstocht — het is een zoektocht van twee mensen die allebei twijfelen of ze de liefde verdienen.',
    relationships: ['Begeerd door Fjodor', 'Geliefde van Mitja', 'Wacht op de terugkeer van haar Poolse officier'],
    firstAppearsInBook: 3,
    tags: ['geliefde', 'onafhankelijk', 'sensueel', 'complex'],
  },
  {
    id: 'katja',
    name: 'Katerina Ivanovna Verkhovtseva',
    nickname: 'Katja',
    fullName: 'Katerina Ivanovna Verkhovtseva',
    role: 'hoofdpersonage',
    category: 'dorp',
    age: 'circa 22-23 jaar',
    description:
      'De verloofde van Mitja — al is hun verhouding allesbehalve gelukkig. Katja is van adellijke afkomst, heeft een sterk karakter en een onwrikbaar gevoel voor eer. Ze houdt van Mitja op een manier die doordrenkt is van trots, plichtsbesef en zelfopoffering — maar dat maakt haar liefde tegelijk groot en verstikkend.',
    deeperProfile:
      'Katja is verstrikt in een onmogelijke emotionele situatie: ze houdt van iemand die haar verlaat voor een ander, maar haar trots laat haar niet toe hem los te laten. Haar relatie met Ivan — die werkelijk van haar houdt — is even gecompliceerd. Haar rol in de rechtbankscène is dramatisch en onvergetelijk.',
    relationships: ['Verloofd (officieel) met Mitja', 'Geliefd door Ivan', 'Rivaliteit met Groesjka'],
    firstAppearsInBook: 3,
    tags: ['verloofd', 'trots', 'adellijk', 'complex'],
  },
  {
    id: 'lise',
    name: 'Lise Khokhlakova',
    nickname: 'Lise',
    fullName: 'Lise Khokhlakova',
    role: 'bijpersonage',
    category: 'dorp',
    age: 'circa 14-15 jaar',
    description:
      'De jonge, geestdriftige dochter van Madame Khokhlakova. Lise zit in een rolstoel vanwege een ziekte, maar haar geest is levendig en soms grillig. Ze is als kind genezen (of zo denkt men) dankzij Zosima, en koestert een intense, romanesque liefde voor Aljosha.',
    deeperProfile:
      'Lise is een van de raadselachtigste personages in de roman. Haar liefde voor Aljosha is echt, maar ze gedraagt zich ook destructief — het lijkt alsof ze zichzelf wil bestraffen voor iets wat ze niet kan benoemen. Haar gesprekken met Aljosha zijn tegelijk hartverwarmend en verontrustend.',
    relationships: ['Dochter van Madame Khokhlakova', 'Verliefd op Aljosha'],
    firstAppearsInBook: 2,
    tags: ['jong', 'geestdriftig', 'complex', 'ziek'],
  },
  {
    id: 'madame-khokhlakova',
    name: 'Madame Khokhlakova',
    nickname: 'Madame Khokhlakova',
    fullName: 'Khokhlakova',
    role: 'bijpersonage',
    category: 'dorp',
    description:
      'Een welgestelde weduwe uit het stadje, moeder van Lise. Ze is sociaal actief, ijdel en goedgelovig, maar ook oprecht goedbedoelend. Ze bewondert Zosima buitengewoon en is een aanhanger van de nieuwste ideeën — zolang ze haar niet te veel ongemak bezorgen.',
    deeperProfile:
      'Madame Khokhlakova fungeert deels als komische figuur — haar enthousiasme overtreft steeds haar doorzettingsvermogen. Maar ze vertegenwoordigt ook een bepaald type gelovige: iemand die geloof zoekt maar bang is voor wat het werkelijk vraagt. Haar gesprek met Zosima over "actieve liefde" is een van de mooiste passages in het boek.',
    relationships: ['Moeder van Lise', 'Bewonderaarster van Zosima'],
    firstAppearsInBook: 2,
    tags: ['weduwe', 'goedgelovig', 'sociaal', 'komisch'],
  },
  {
    id: 'rakitin',
    name: 'Mikhail Osipovitsj Rakitin',
    nickname: 'Rakitin',
    fullName: 'Mikhail Osipovitsj Rakitin',
    role: 'bijpersonage',
    category: 'klooster',
    description:
      'Een seminarist en vriend (of liever: bekende) van Aljosha. Rakitin is intelligent en ambitieus, maar zijn motieven zijn steeds zelfzuchtig. Hij aanvaardt de moderne verlichtingsideeën met graagte — niet uit overtuiging, maar omdat ze hem goed uitkomen. Hij is cynisch over menselijkheid maar geeft dat niet graag toe.',
    deeperProfile:
      'Rakitin staat tegenover Aljosha als zijn cynische spiegelbeeld. Waar Aljosha mensen vertrouwt, analyseert Rakitin ze. Hij probeert Aljosha in zijn geloofscrisis te manipuleren. Zijn zelfzucht komt op cruciale momenten pijnlijk aan het licht.',
    relationships: ['Bekende van Aljosha', 'Seminarist in het klooster'],
    firstAppearsInBook: 2,
    tags: ['seminarist', 'cynisch', 'ambitieus', 'manipulatief'],
  },
  {
    id: 'iljoesjka',
    name: 'Iljoesjka Snegirjov',
    nickname: 'Iljoesjka',
    fullName: 'Iljoesjka Snegirjov',
    role: 'bijpersonage',
    category: 'dorp',
    age: 'circa 9 jaar',
    description:
      'Een ziek jongetje, kind van de arme en vernederde kapitein Snegirjov. Iljoesjka is trots en loyaal — hij verdedigt zijn vader bij zijn schoolkameraden met hand en tand. Zijn lot is een van de meest aangrijpende elementen in de roman.',
    deeperProfile:
      'Iljoesjka\'s verhaal raakt de kernvraag van de roman: het onschuldige lijden van kinderen. Zijn vriendschap met de jongens, en met Aljosha in het bijzonder, is een tegengewicht voor de zware filosofische debatten elders in het boek.',
    relationships: ['Zoon van kapitein Snegirjov', 'Bevriend met Kolja Krassotkin en de andere jongens'],
    firstAppearsInBook: 4,
    tags: ['kind', 'ziek', 'trots', 'kwetsbaar'],
  },
  {
    id: 'kolja',
    name: 'Kolja Krassotkin',
    nickname: 'Kolja',
    fullName: 'Nikolaj Ivanovitsj Krassotkin',
    role: 'bijpersonage',
    category: 'dorp',
    age: 'circa 13 jaar',
    description:
      'Een slimme, zelfbewuste jongen die de leider is van zijn klasgenoten. Kolja is briljant voor zijn leeftijd, weet dat, en is er soms een tikje te trots op. Zijn ontmoeting met Aljosha is een ommekeer voor hem.',
    deeperProfile:
      'Kolja is een miniatuurversie van Ivan: hij heeft zijn ideeën overgenomen uit boeken en geeft ze verder zonder ze echt te begrijpen. Zijn ontwikkeling richting oprechtheid en mededogen — mede door zijn vriendschap met Iljoesjka — is een van de mooiste verhaallijnen in het laatste deel van de roman.',
    relationships: ['Aanvoerder van de jongensbende', 'Vriend van Iljoesjka'],
    firstAppearsInBook: 10,
    tags: ['kind', 'intelligent', 'trots', 'leerling'],
  },
  {
    id: 'snegirjov',
    name: 'Kapitein Snegirjov',
    nickname: 'Snegirjov',
    fullName: 'Kapitein Snegirjov',
    role: 'bijpersonage',
    category: 'dorp',
    description:
      'Een arme, vernederde oud-officier, vader van Iljoesjka. Hij is een gebroken man: arm, alcoholisch en publiekelijk vernedered door Mitja. Toch is er iets in hem van onvergankelijke menselijke waardigheid.',
    deeperProfile:
      'Snegirjov staat symbool voor de vernederden en beledígden — een terugkerend Dostojevski-thema. Zijn reactie op Aljosha\'s hulpaanbod is verrassend en complex, en onthult de paradox van trots en armoede.',
    relationships: ['Vader van Iljoesjka', 'Vernederd door Mitja'],
    firstAppearsInBook: 4,
    tags: ['officier', 'vernederd', 'arm', 'vader'],
  },
  {
    id: 'grigorij',
    name: 'Grigorij Vasil\'evitsj',
    nickname: 'Grigorij',
    fullName: 'Grigorij Vasil\'evitsj',
    role: 'bijpersonage',
    category: 'karamazov',
    description:
      'De trouwe, oudgediende bediende van Fjodor Karamazov. Grigorij is streng, rechtvaardig en diepgelovig — een rustpunt in de chaos van het Karamazov-huishouden. Hij heeft als enige een soort vaderfiguurrol vervuld voor de jonge broers.',
    deeperProfile:
      'Grigorij is Dostojevski\'s portret van de eenvoudige, ondogmatische Russische vroomheid. Zijn getuigenis in het rechtbankgedeelte is eerlijk maar heeft onbedoeld dramatische gevolgen.',
    relationships: ['Bediende van Fjodor', 'Getrouwd met Marfa', 'Stiefvader-figuur voor de broers in hun jeugd'],
    firstAppearsInBook: 1,
    tags: ['bediende', 'trouw', 'gelovig', 'oud'],
  },
  {
    id: 'miusov',
    name: 'Pjotr Aleksandrovitsj Miusov',
    nickname: 'Miusov',
    fullName: 'Pjotr Aleksandrovitsj Miusov',
    role: 'zijpersonage',
    category: 'dorp',
    description:
      'Een liberale neef van Fjodors eerste vrouw. Miusov heeft Paris gezien, spreekt Frans en is er trots op tot de progressieve kringen te behoren. Hij veracht Fjodor maar deelt ironisch genoeg zijn neiging tot zelfvertoon.',
    deeperProfile:
      'Miusov vertegenwoordigt het Westers georiënteerde Russische liberalisme van de negentiende eeuw — intellectueel pretentieus, moreel correct in de mond, maar weinig consequent in de praktijk. Zijn aanwezigheid in de openingsscène is ironisch en onderhoudend.',
    relationships: ['Neef van Fjodors eerste vrouw', 'In conflict met Fjodor over land'],
    firstAppearsInBook: 1,
    tags: ['liberaal', 'westers', 'ijdel', 'neef'],
  },
];
