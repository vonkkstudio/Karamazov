export interface KeyMoment {
  id: string;
  title: string;
  description: string;
}

export interface Chapter {
  id: string;
  bookNumber: number;
  chapterNumber: number;
  title: string;
  teaser: string;
  summary: string;
  keyMoments: KeyMoment[];
  characterIds: string[];
  themeIds: string[];
}

export interface Book {
  id: number;
  partNumber: number;
  partTitle: string;
  title: string;
  intro: string;
  chapters: Chapter[];
}

export const books: Book[] = [
  {
    id: 1,
    partNumber: 1,
    partTitle: 'Deel I',
    title: 'Een aardige familie',
    intro:
      'Dostojevski introduceert de Karamazov-familie en de wereld van het Russische provinciestadtje. De verteller schetst de levensgeschiedenissen van patriarch Fjodor en zijn drie zonen, die elk op een geheel eigen manier door zijn nalatigheid zijn gevormd.',
    chapters: [
      {
        id: '1-1',
        bookNumber: 1,
        chapterNumber: 1,
        title: 'Fjodor Pavlovitsj Karamazov',
        teaser: 'De verteller introduceert de Karamazov-patriarch en zijn reputatie in de stad.',
        summary:
          'We maken kennis met Fjodor Pavlovitsj Karamazov, een welgesteld maar moreel verloederd grondbezitter. De verteller beschrijft zijn reputatie als parasite, clown en wellusteling. Fjodor is tweemaal getrouwd geweest en heeft drie zonen die hij nauwelijks kent.',
        keyMoments: [
          { id: '1-1-a', title: 'Introductie van Fjodor', description: 'De verteller typeert Fjodor als een man die zijn eigen vernedering cultiveert als beschermingsmiddel.' },
        ],
        characterIds: ['fjodor'],
        themeIds: ['vader-zonen'],
      },
      {
        id: '1-2',
        bookNumber: 1,
        chapterNumber: 2,
        title: 'De eerste vrouw eruit, de tweede er ook al uit',
        teaser: 'De tragische huwelijken van Fjodor en het lot van zijn eerste twee vrouwen.',
        summary:
          'Fjodors eerste vrouw, moeder van Mitja, was een eigenzinnige jongedame die hem verliet en jong stierf. Zijn tweede vrouw, moeder van Ivan en Aljosha, was een stille, vroomgelovige vrouw die eveneens jong overleed. Beide kinderen werden na haar dood overgelaten aan buren en weldoeners.',
        keyMoments: [
          { id: '1-2-a', title: 'Lot van de moeders', description: 'Beide vrouwen sterven jong; hun kinderen groeien op zonder vader of moeder.' },
        ],
        characterIds: ['fjodor', 'dmitri', 'ivan', 'aljosha'],
        themeIds: ['vader-zonen', 'lijden'],
      },
      {
        id: '1-3',
        bookNumber: 1,
        chapterNumber: 3,
        title: 'Een tweede huwelijk, en nog meer kinderen',
        teaser: 'Fjodors tweede huwelijk en de geboorte van zijn buitenechtelijke zoon.',
        summary:
          'We leren hoe Fjodors tweede vrouw overleed en hoe hij daarna zijn onmatige leven voortzette. Er wordt ook verteld over Lizaveta Smerdjasjaja, een idiote bedelaarster bij wie Fjodor een kind verwekte — de latere Smerdjakiv. Dit kind wordt opgenomen in het huishouden van Fjodor door de trouwe bediende Grigorij.',
        keyMoments: [
          { id: '1-3-a', title: 'Geboorte van Smerdjakiv', description: 'Smerdjakivs duistere afkomst wordt onthuld: kind van een idiote vrouw en Fjodor.' },
        ],
        characterIds: ['fjodor', 'smerdjakiv', 'grigorij'],
        themeIds: ['vader-zonen', 'schuld'],
      },
      {
        id: '1-4',
        bookNumber: 1,
        chapterNumber: 4,
        title: 'De derde zoon Aljosja',
        teaser: 'Een portret van de jonge Aljosha en zijn bijzondere aard.',
        summary:
          'De verteller presenteert Aljosha als zijn eigenlijke held. Aljosha is als jongeling naar het klooster getrokken, aangetrokken door ouderling Zosima. Hij is eerlijk, liefdevol en ongewoon — niet door wereldvreemde vroomheid, maar door een aangeboren warmte voor mensen. De verteller verdedigt zijn keuze voor deze "held" die niet past in de conventionele romantraditie.',
        keyMoments: [
          { id: '1-4-a', title: 'Aljosha als held', description: "De verteller introduceert Aljosha als 'een vroege mensenminnaar' — ongewoon maar echt." },
        ],
        characterIds: ['aljosha', 'fjodor'],
        themeIds: ['geloof', 'actieve-liefde'],
      },
      {
        id: '1-5',
        bookNumber: 1,
        chapterNumber: 5,
        title: 'Ouderlingen',
        teaser: 'Uitleg over het instituut van de startsj en Zosima\'s bijzondere positie.',
        summary:
          'De verteller legt het Russisch-orthodoxe instituut van de "startsj" (ouderling) uit: een geestelijk leidsman die absolute geestelijke autoriteit heeft over zijn volgelingen. Ouderling Zosima is een geliefd en omstreden figuur — geliefd bij het gewone volk, met scepsis bekeken door de kloosterleiding. Aljosha heeft zich volledig aan Zosima toevertrouwd.',
        keyMoments: [
          { id: '1-5-a', title: 'Het instituut van de startsj', description: "De spanningsverhouding tussen Zosima's volkse autoriteit en de officiële kerkstructuur." },
        ],
        characterIds: ['aljosha', 'zosima'],
        themeIds: ['geloof', 'actieve-liefde'],
      },
    ],
  },
  {
    id: 2,
    partNumber: 1,
    partTitle: 'Deel I',
    title: 'Een ongelegen bijeenkomst',
    intro:
      'De Karamazovs komen samen in het klooster voor een familiebespreking, maar wat bedoeld was als verzoening ontaardt in een reeks pijnlijke confrontaties. Zosima staat er als stille getuige bij.',
    chapters: [
      {
        id: '2-1',
        bookNumber: 2,
        chapterNumber: 1,
        title: 'Ze arriveren in het klooster',
        teaser: 'De Karamazovs en hun gezelschap betreden het klooster voor de bijeenkomst bij Zosima.',
        summary:
          'Fjodor, Mitja, Ivan, Aljosha en de liberale neef Miusov reizen naar het klooster. Miusov probeert chic te doen en Fjodor maakt meteen zijn clownsnummer. Onderweg al is de spanning voelbaar: Mitja arriveert te laat, Fjodor ergert iedereen.',
        keyMoments: [
          { id: '2-1-a', title: 'Aankomst in het klooster', description: 'De tegenstelling tussen de heilige omgeving en de chaos die de Karamazovs meebrengen.' },
        ],
        characterIds: ['fjodor', 'dmitri', 'ivan', 'aljosha', 'miusov', 'zosima'],
        themeIds: ['vader-zonen', 'geloof'],
      },
      {
        id: '2-2',
        bookNumber: 2,
        chapterNumber: 2,
        title: 'De oude clown',
        teaser: 'Fjodor gedraagt zich schandelijk tijdens de ontmoeting met de ouderling.',
        summary:
          'In de cel van Zosima begint Fjodor zijn clownsoptreden: hij maakt ongepaste grappen, stelt valse vragen en gedraagt zich bewust beledigend. Iedereen is beschaamd. Zosima observeert Fjodor kalm en zonder oordeel. Fjodor lijkt te provoceren juist om zijn eigen innerlijke leegte te verdoezelen.',
        keyMoments: [
          { id: '2-2-a', title: 'Fjodors clownsmasker', description: "Fjodor verklaart zelf dat hij zijn clownsgedrag als verdediging gebruikt: 'Je doet het zelf eerst.'"},
        ],
        characterIds: ['fjodor', 'ivan', 'aljosha', 'miusov', 'zosima'],
        themeIds: ['vader-zonen', 'schuld'],
      },
      {
        id: '2-3',
        bookNumber: 2,
        chapterNumber: 3,
        title: 'Gelovige vrouwen',
        teaser: 'Zosima ontvangt een groep eenvoudige pelgrimsvrouwen met hun verdriet en gebeden.',
        summary:
          'Terwijl de heren wachten, ontvangt Zosima gelovige vrouwen uit het volk: arme, verdrietige zielen met zieke kinderen, stervende mannen, onbeantwoord gebed. Zosima luistert met oneindige geduld, troost, en geeft hun nieuwe moed. Het contrast met de Karamazov-chaos is groot.',
        keyMoments: [
          { id: '2-3-a', title: 'Zosima troost de moeder', description: 'Een moeder rouwt om haar gestorven kind; Zosima spreekt over het troostende karakter van gebed.' },
        ],
        characterIds: ['zosima', 'aljosha'],
        themeIds: ['geloof', 'lijden', 'actieve-liefde'],
      },
      {
        id: '2-4',
        bookNumber: 2,
        chapterNumber: 4,
        title: 'Een vrouw van weinig geloof',
        teaser: 'Madame Khokhlakova belijdt haar geloofstwijfel aan Zosima.',
        summary:
          'Madame Khokhlakova vertelt Zosima eerlijk dat ze niet gelooft in het leven na de dood. Ze vraagt hoe je dat kunt bewijzen. Zosima antwoordt niet met dogma maar met handelen: "Oefen actieve liefde, en de overtuiging van Gods bestaan en de onsterfelijkheid zal vanzelf in je groeien." Dit is een kernpassage van de roman.',
        keyMoments: [
          { id: '2-4-a', title: 'Actieve liefde als weg naar geloof', description: "Zosima's antwoord op twijfel: niet redeneren maar doen — actieve liefde leidt tot overtuiging." },
        ],
        characterIds: ['zosima', 'madame-khokhlakova', 'lise', 'aljosha'],
        themeIds: ['geloof', 'actieve-liefde', 'twijfel'],
      },
      {
        id: '2-5',
        bookNumber: 2,
        chapterNumber: 5,
        title: 'Zo gaat het bij ons ook',
        teaser: 'De familiebijeenkomst bij Zosima loopt uit op ruzie en beschuldigingen.',
        summary:
          'De eigenlijke "bespreking" begint. Fjodor beschuldigt Mitja van het opmaken van zijn erfenis en liegt schaamteloos. Mitja is woedend. Ivan zwijgt. Aljosha staat er hulpeloos bij. Zosima observeert alles en buigt plotseling voor Mitja, wat iedereen verrast.',
        keyMoments: [
          { id: '2-5-a', title: 'Zosima buigt voor Mitja', description: "De ouderling maakt een diepe buiging voor Mitja — een raadselachtig gebaar dat pas later betekenis krijgt." },
        ],
        characterIds: ['fjodor', 'dmitri', 'ivan', 'aljosha', 'zosima', 'miusov'],
        themeIds: ['vader-zonen', 'schuld', 'lijden'],
      },
      {
        id: '2-6',
        bookNumber: 2,
        chapterNumber: 6,
        title: 'Waarom leeft zo iemand?',
        teaser: 'Mitja uit zijn afschuw over zijn vader in een gesprek met Aljosha.',
        summary:
          'Mitja spreekt met Aljosha en vraagt hem openhartig: hoe kan zo iemand als Fjodor leven? Hij vertelt over zijn eigen passies en zijn wanhopige liefde voor Groesjka, ondanks zijn verloving met Katja. Hij vraagt Aljosha zijn verloofde te bezoeken en haar zijn verontschuldigingen over te brengen.',
        keyMoments: [
          { id: '2-6-a', title: 'Mitja over Groesjka', description: "Mitja bekent aan Aljosha dat hij verliefd is op Groesjka, niet op Katja — een pijnlijk eerlijke bekentenis." },
        ],
        characterIds: ['dmitri', 'aljosha', 'fjodor'],
        themeIds: ['vader-zonen', 'liefde', 'schuld'],
      },
      {
        id: '2-7',
        bookNumber: 2,
        chapterNumber: 7,
        title: 'Een seminarist-carrièremaker',
        teaser: 'Aljosha heeft een gesprek met de ambitieuze seminarist Rakitin.',
        summary:
          'Rakitin legt Aljosha zijn kijk op de Karamazov-situatie uit: hij gelooft dat Groesjka de boel doelbewust opruit. Rakitin is cynisch en weet alles, maar zijn kennis is koud en zelfzuchtig. Aljosha luistert, maar pikt Rakitins toon niet.',
        keyMoments: [
          { id: '2-7-a', title: "Rakitins analyse", description: 'Rakitin onthult dat hij zowel Groesjka als de Karamazovs goed kent — en er strategisch gebruik van maakt.' },
        ],
        characterIds: ['aljosha', 'rakitin'],
        themeIds: ['vrijheid', 'schuld'],
      },
      {
        id: '2-8',
        bookNumber: 2,
        chapterNumber: 8,
        title: 'Het schandaal',
        teaser: 'De bijeenkomst eindigt in een openbaar schandaal als Fjodor zijn masker laat vallen.',
        summary:
          'Bij de maaltijd in het klooster gaat het volledig mis. Fjodor maakt obscene grappen over de monniken, drinkt te veel en provoceert iedereen. Miusov is razend. De kloosterhoofdige probeert de orde te bewaren. Mitja is niet bij de maaltijd en Fjodor beweert dat hij Groesjka heeft meegenomen. Het gezelschap valt uiteen in chaos.',
        keyMoments: [
          { id: '2-8-a', title: 'Fjodors scènemakers', description: "Fjodor's gedrag bereikt een dieptepunt — hij maakt een karikatuur van heilige en profane tegelijk." },
        ],
        characterIds: ['fjodor', 'ivan', 'aljosha', 'miusov'],
        themeIds: ['vader-zonen', 'vrijheid'],
      },
    ],
  },
  {
    id: 3,
    partNumber: 1,
    partTitle: 'Deel I',
    title: 'De wellustelingen',
    intro:
      'We verdiepen ons in de persoonlijke drama\'s van de Karamazovs: Mitja\'s passie voor Groesjka, zijn conflict met zijn vader, en de introductie van Smerdjakiv. De verhaallijnen beginnen samen te komen rond geld, liefde en wraak.',
    chapters: [
      {
        id: '3-1',
        bookNumber: 3,
        chapterNumber: 1,
        title: 'In de dienstruimten',
        teaser: 'Een blik op het leven van de bedienden in het huis van Fjodor.',
        summary:
          'We leren de bedienden van Fjodor kennen: Grigorij, de trouwe maar strenge bediende, zijn vrouw Marfa, en Smerdjakiv. Grigorij heeft Smerdjakiv als kind opgenomen en hem een vak geleerd, maar de jongen blijft een raadsel: koud, zwijgzaam en misprijzend naar alles en iedereen.',
        keyMoments: [
          { id: '3-1-a', title: 'Smerdjakivs karakter', description: "Smerdjakiv's koudheid en verachting worden geïntroduceerd — hij gelooft nergens in en trekt alles in twijfel." },
        ],
        characterIds: ['smerdjakiv', 'grigorij', 'fjodor'],
        themeIds: ['vrijheid', 'schuld'],
      },
      {
        id: '3-2',
        bookNumber: 3,
        chapterNumber: 2,
        title: 'Lizaveta Smerdjasjaja',
        teaser: 'Het verhaal achter Smerdjakivs moeder en zijn onwettige geboorte.',
        summary:
          'De verteller vertelt het droevige verhaal van Lizaveta Smerdjasjaja, een zwakzinnige bedelaarster die door de stad werd getollereerd. Op zekere dag raakte zij zwanger — geruchten wijzen naar Fjodor. Ze bevalt in de tuin van de Karamazovs en sterft kort daarna. Grigorij neemt het kind op.',
        keyMoments: [
          { id: '3-2-a', title: "Smerdjakivs geboorte", description: 'Smerdjakiv wordt geboren als kind van schande en onrecht — een symbool van Fjodors bodemloze moraal.' },
        ],
        characterIds: ['smerdjakiv', 'fjodor', 'grigorij'],
        themeIds: ['lijden', 'schuld', 'vader-zonen'],
      },
      {
        id: '3-3',
        bookNumber: 3,
        chapterNumber: 3,
        title: 'De bekentenissen van een vurig hart. In verzen',
        teaser: 'Mitja vertelt Aljosha over zijn woelige verleden en zijn passie voor Groesjka.',
        summary:
          'In een reeks ontboezemingen legt Mitja aan Aljosha zijn ziel bloot. Hij spreekt over zijn militaire diensttijd, zijn wilde uitgaven en zijn gevecht met zijn eigen aard. Hij citeert Schiller en spreekt over het ideaal van de schoonheid — hoe het hem aantrekt en tegelijk vernedert. Zijn bekentenis is hartstochtelijk en chaotisch.',
        keyMoments: [
          { id: '3-3-a', title: "Schoonheid als tweegevecht", description: "Mitja's beroemde uitspraak: 'Schoonheid is vreselijk en verschrikkelijk... hier strijdt de duivel met God, en het slagveld is het hart van de mens.'" },
        ],
        characterIds: ['dmitri', 'aljosha'],
        themeIds: ['liefde', 'vrijheid', 'lijden'],
      },
      {
        id: '3-4',
        bookNumber: 3,
        chapterNumber: 4,
        title: 'De bekentenissen van een vurig hart. In anekdoten',
        teaser: 'Mitja vertelt hoe hij Katja ontmoette en hoe hun vreemde verhouding begon.',
        summary:
          'Mitja vertelt hoe hij Katja leerde kennen: haar vader, een officier, zat in de problemen met geld. Mitja bood hem de nodige som aan — maar op een vernederende manier. Katja vernedering zich echter vrijwillig, en Mitja stuurde het geld zonder iets te eisen. Sindsdien voelt hij zich aan haar verplicht, hoewel hij van haar niet meer houdt.',
        keyMoments: [
          { id: '3-4-a', title: "Katja's offer", description: "Katja vernedert zich voor Mitja's geld om haar vader te redden — een scène die hun relatie voor altijd kleurt." },
        ],
        characterIds: ['dmitri', 'aljosha', 'katja'],
        themeIds: ['liefde', 'schuld', 'vrijheid'],
      },
      {
        id: '3-5',
        bookNumber: 3,
        chapterNumber: 5,
        title: "De bekentenissen van een vurig hart. 'Kopje over'",
        teaser: 'Mitja bekent dat hij geld verduisterd heeft dat aan Katja toebehoort.',
        summary:
          "Mitja bekent Aljosha dat hij drieduizend roebel van Katja heeft ontvangen om te sturen, maar het geld heeft opgemaakt aan feesten met Groesjka. Hij schaamt zich diep maar kon niet anders — zo hij zegt. Hij noemt zichzelf een dief maar voelt tegelijk dat hij zijn eer niet volledig heeft verloren. Hij wil het bedrag terugbetalen maar heeft niets.",
        keyMoments: [
          { id: '3-5-a', title: 'De verduisterde drieduizend', description: "Mitja's diefstal van Katja's geld — het centrale schuldgevoel dat hem door de rest van de roman achtervolgt." },
        ],
        characterIds: ['dmitri', 'aljosha', 'katja'],
        themeIds: ['schuld', 'liefde', 'vrijheid'],
      },
      {
        id: '3-6',
        bookNumber: 3,
        chapterNumber: 6,
        title: 'Smerdjakiv',
        teaser: 'Een uitgebreid portret van Smerdjakiv en zijn gesprekken met Ivan.',
        summary:
          "We zien Smerdjakiv in gesprek met Ivan — twee intelligente mannen die ieder op hun eigen manier geloof verwerpen. Smerdjakiv heeft Ivans redenaties geabsorbeerd: als er geen God is, is alles geoorloofd. Hij is epileptisch en heeft aanvallen die hem tijdelijk uitschakelen. Zijn koudheid maakt Ivan ongemakkelijk.",
        keyMoments: [
          { id: '3-6-a', title: "Smerdjakiv's logica", description: "Smerdjakiv past Ivans filosofie toe: als God niet bestaat, zijn morele verplichtingen zinloos." },
        ],
        characterIds: ['smerdjakiv', 'ivan', 'fjodor'],
        themeIds: ['geloof', 'vrijheid', 'duivel'],
      },
      {
        id: '3-7',
        bookNumber: 3,
        chapterNumber: 7,
        title: 'De betwister',
        teaser: 'Grigorij en Smerdjakiv botsen in een theologisch debat aan tafel.',
        summary:
          'Aan de eettafel discussiëren Fjodor, Ivan, Grigorij en Smerdjakiv over geloof en het al dan niet mogen afzweren van het geloof als je leven gevaar loopt. Smerdjakiv betoogt geraffineerd dat afzwering gerechtvaardigd is; Grigorij weerlegt hem met zijn nuchtere geloof. Ivan mengelt zich met interesse.',
        keyMoments: [
          { id: '3-7-a', title: 'Het debat over afzwering', description: "Smerdjakiv's theologische spitsvondigheid onthult zijn morele nihilisme op een manier die zelfs Ivan verontrust." },
        ],
        characterIds: ['smerdjakiv', 'ivan', 'fjodor', 'grigorij'],
        themeIds: ['geloof', 'vrijheid', 'duivel'],
      },
      {
        id: '3-8',
        bookNumber: 3,
        chapterNumber: 8,
        title: 'Over de cognac',
        teaser: 'Ivan en zijn vader praten dronken door over vrouwen en het leven.',
        summary:
          'Fjodor en Ivan drinken cognac. Fjodor is openhartig en wellustig, en spreekt over zijn verlangens naar vrouwen — ook Groesjka. Ivan luistert met een mengsel van afschuw en fascinatie. Fjodor vraagt of God bestaat. Ivan antwoordt ontwijkend. De avond toont de ziekelijke aantrekkingskracht die Fjodor op zijn zonen heeft.',
        keyMoments: [
          { id: '3-8-a', title: "Ivan en Fjodor over God", description: "Ivan ontwijkt de vraag of God bestaat — het eerste teken van zijn innerlijke filosofische worsteling." },
        ],
        characterIds: ['fjodor', 'ivan'],
        themeIds: ['geloof', 'vader-zonen', 'vrijheid'],
      },
      {
        id: '3-9',
        bookNumber: 3,
        chapterNumber: 9,
        title: 'De wellustelingen',
        teaser: 'Fjodor en Mitja rivaliserern openlijk om Groesjka.',
        summary:
          "Fjodor en Mitja's rivaliteit om Groesjka is nu openbaar. Fjodor beweert haar drieduizend roebel te hebben aangeboden als ze bij hem komt; Mitja hoort dit en is razend. De spanning tussen vader en zoon bereikt een kookpunt. Aljosha doet vergeefse pogingen om te bemiddelen.",
        keyMoments: [
          { id: '3-9-a', title: "Vader en zoon als rivalen", description: "Fjodor en Mitja's rivaliteit om dezelfde vrouw — een oeroud drama in een Russische provinciestad." },
        ],
        characterIds: ['fjodor', 'dmitri', 'aljosha'],
        themeIds: ['vader-zonen', 'liefde', 'vrijheid'],
      },
      {
        id: '3-10',
        bookNumber: 3,
        chapterNumber: 10,
        title: 'Beide bijeen',
        teaser: 'Aljosha bezoekt Katja en ontmoet er ook Groesjka — met dramatische gevolgen.',
        summary:
          "Aljosha bezoekt Katja om Mitja's boodschap over te brengen. Tot zijn verrassing is Groesjka ook aanwezig. Eerst lijkt er een vreemde harmonie te zijn tussen de twee vrouwen, maar dan pakt Groesjka Katja's hand en kust die koel — een vernedering in vermomming. Katja begrijpt het en is diep gekwetst.",
        keyMoments: [
          { id: '3-10-a', title: "Groesjka's kus", description: "Groesjka's schijnbaar vriendelijke kus op Katja's hand blijkt een koele belediging — een scène van meesterlijk psychologisch spel." },
        ],
        characterIds: ['aljosha', 'katja', 'groesjka'],
        themeIds: ['liefde', 'schuld', 'vrijheid'],
      },
      {
        id: '3-11',
        bookNumber: 3,
        chapterNumber: 11,
        title: 'Nog één reputatie',
        teaser: 'Aljosha reflecteert op de dag en bezoekt Zosima voor de nacht.',
        summary:
          'Na een uitputtende dag keert Aljosha terug naar het klooster. Hij is geschokt door alles wat hij heeft meegemaakt maar voelt zich niet verloren. Zosima is ziek en heeft hem nodig. Aljosha beseft dat zijn rol in al deze drama\'s nog maar net begint.',
        keyMoments: [
          { id: '3-11-a', title: "Aljosha's ankerpunt", description: 'Te midden van alle chaos is Zosima het vaste punt waarnaar Aljosha terugkeert.' },
        ],
        characterIds: ['aljosha', 'zosima'],
        themeIds: ['geloof', 'actieve-liefde'],
      },
    ],
  },
  {
    id: 4,
    partNumber: 2,
    partTitle: 'Deel II',
    title: 'Scheuring',
    intro:
      'Aljosha beweegt zich door de stad en raakt verstrengeld in de scheuren van meerdere levens. Hij bezoekt zijn vader, zijn broers, Lise en de vernederde kapitein Snegirjov. Overal ziet hij pijn die hij maar gedeeltelijk kan verzachten.',
    chapters: [
      {
        id: '4-1',
        bookNumber: 4,
        chapterNumber: 1,
        title: 'Vaderbroeder Ferapont',
        teaser: 'Introductie van de ascetische monnik Ferapont, Zosima\'s tegenstander in het klooster.',
        summary:
          "Vader Ferapont is Zosima's tegenpool in het klooster: een strenge asceet die visioenen heeft en de duivel ziet. Hij wordt door sommige monniken vereerd als een heilige, maar Zosima beschouwt zijn soort vroomheid als hoogmoed. Ferapont vertegenwoordigt een harde, exclusieve religie tegenover Zosima's open menselijkheid.",
        keyMoments: [
          { id: '4-1-a', title: "Feraponts ascese", description: "Ferapont ziet duivels en weigert te eten — zijn vroomheid is angstaanjagend maar ook bekrompen." },
        ],
        characterIds: ['zosima', 'aljosha'],
        themeIds: ['geloof', 'vrijheid'],
      },
      {
        id: '4-2',
        bookNumber: 4,
        chapterNumber: 2,
        title: 'Bij zijn vader',
        teaser: 'Aljosha bezoekt Fjodor en raakt verzeild in diens paranoïde angsten.',
        summary:
          "Aljosha bezoekt zijn vader thuis. Fjodor is bang voor Mitja en heeft sloten laten aanbrengen. Hij vraagt Aljosha te spioneren. Hij is tegelijk dronken en lucide, walgelijk en zielig. Aljosha weigert te spioneren maar luistert met geduld. Fjodor toont even zijn diepe eenzaamheid.",
        keyMoments: [
          { id: '4-2-a', title: "Fjodors eenzaamheid", description: "Achter Fjodors clownsmasker schuilt een eenzame, bange man die door niemand wordt bemind." },
        ],
        characterIds: ['aljosha', 'fjodor', 'smerdjakiv'],
        themeIds: ['vader-zonen', 'lijden'],
      },
      {
        id: '4-3',
        bookNumber: 4,
        chapterNumber: 3,
        title: 'Hij haakt aan',
        teaser: 'Aljosha wordt door een onbekende jongen gebeten en geslagen.',
        summary:
          'Op straat wordt Aljosha plotseling aangevallen door een jongen die hem bijt en met stenen gooit. Aljosha verwondert zich maar begrijpt niet waarom. Later blijkt dat het Iljoesjka is, het zoontje van kapitein Snegirjov, die zijn vader wil wreken — Mitja heeft Snegirjov publiekelijk vernederd door hem aan zijn baard te trekken.',
        keyMoments: [
          { id: '4-3-a', title: "Iljoesjka's aanval", description: "Een kind vecht voor zijn vaders eer — de eerste ontmoeting met Iljoesjka en het begin van een aangrijpende verhaallijn." },
        ],
        characterIds: ['aljosha', 'iljoesjka'],
        themeIds: ['lijden', 'vader-zonen', 'schuld'],
      },
      {
        id: '4-4',
        bookNumber: 4,
        chapterNumber: 4,
        title: 'Scheuring in de klas',
        teaser: 'Iljoesjka\'s conflict met zijn klasgenoten wordt zichtbaar.',
        summary:
          "Aljosha hoort meer over Iljoesjka's situatie: de jongen heeft zijn vader verdedigd op school, maar zijn klasgenoten pesten hem. Kolja Krassotkin is de aanvoerder van de jongens en heeft een complexe relatie met Iljoesjka — bewondering gemengd met wreedheid. De jongens vormen een microkosmos van de grotere wereld.",
        keyMoments: [
          { id: '4-4-a', title: "Iljoesjka's isolement", description: "Iljoesjka staat alleen tegenover de groep — zijn lot is een echo van het lijden van zijn vader." },
        ],
        characterIds: ['iljoesjka', 'kolja', 'aljosha'],
        themeIds: ['lijden', 'schuld', 'actieve-liefde'],
      },
      {
        id: '4-5',
        bookNumber: 4,
        chapterNumber: 5,
        title: 'Een pijnlijk ogenblik bij Aljosha',
        teaser: 'Aljosha bezoekt Lise en wordt geconfronteerd met haar grillige liefde.',
        summary:
          "Aljosha bezoekt Madame Khokhlakova en haar dochter Lise. Lise is speels, uitdagend en eerlijk verliefd op Aljosha — ze schrijft hem een briefje. Aljosha reageert eenvoudig en eerlijk. Madame Khokhlakova wil hem inschakelen voor allerlei zaken maar Aljosha blijft kalm zichzelf.",
        keyMoments: [
          { id: '4-5-a', title: "Lise's liefdesbrief", description: "Lise bekent haar liefde voor Aljosha op een eigenzinnige, grappige en ontroerende manier." },
        ],
        characterIds: ['aljosha', 'lise', 'madame-khokhlakova'],
        themeIds: ['liefde', 'actieve-liefde'],
      },
      {
        id: '4-6',
        bookNumber: 4,
        chapterNumber: 6,
        title: 'Scheuring bij de Snegirjovs',
        teaser: 'Aljosha bezoekt de vernederde kapitein Snegirjov en zijn zieke gezin.',
        summary:
          "Aljosha bezoekt kapitein Snegirjov thuis. Het huis is benauwend arm. De zieke Iljoesjka ligt in bed. Aljosha biedt namens Katja geld aan ter compensatie van de vernedering door Mitja. Snegirjov accepteert eerst het geld met tranen van opluchting — maar vertrapt dan de bankbiljetten en loopt weg. Zijn trots is sterker dan zijn nood.",
        keyMoments: [
          { id: '4-6-a', title: "De vertrampte bankbiljetten", description: "Snegirjov vertrapt het geld — een van de meest pijnlijke en trotse gebaren in de roman." },
        ],
        characterIds: ['aljosha', 'snegirjov', 'iljoesjka'],
        themeIds: ['lijden', 'schuld', 'actieve-liefde'],
      },
      {
        id: '4-7',
        bookNumber: 4,
        chapterNumber: 7,
        title: 'En in de frisse lucht',
        teaser: 'Aljosha verwerkt de dag en spreekt kort met Lise over de toekomst.',
        summary:
          "Na het bezoek aan Snegirjov loopt Aljosha door de frisse lucht en spreekt even met Lise. Ze praten over het verschil tussen echte liefde en de neiging tot vernedering. Aljosha begrijpt nu beter wat de roman steeds benadrukt: dat schijnbaar weldoen ingewikkeld is wanneer trots in het spel komt.",
        keyMoments: [
          { id: '4-7-a', title: "Gesprek over vernedering", description: "Aljosha en Lise realiseren zich dat hulp geven niet altijd goed aankomt — trots en liefde botsen." },
        ],
        characterIds: ['aljosha', 'lise'],
        themeIds: ['actieve-liefde', 'lijden', 'vrijheid'],
      },
    ],
  },
  {
    id: 5,
    partNumber: 2,
    partTitle: 'Deel II',
    title: 'Pro en contra',
    intro:
      'Het filosofische hart van de roman. Ivan en Aljosha spreken de diepste gesprekken die broers kunnen voeren: over God, onschuld, lijden en de Grootinquisiteur. Dit is Dostojevski op zijn meest uitdagend en grootst.',
    chapters: [
      {
        id: '5-1',
        bookNumber: 5,
        chapterNumber: 1,
        title: 'De verloving',
        teaser: 'Katja en Aljosha spreken over de situatie met Mitja en Ivan.',
        summary:
          "Aljosha bezoekt Katja. Ze spreekt over haar liefde voor Mitja — maar Aljosha ziet dat ze eigenlijk Ivan liefheeft. Katja ziet het zelf niet of wil het niet zien. Ze is vastbesloten Mitja trouw te blijven, ook al behandelt hij haar slecht. Aljosha is de enige die door haar façade heen kijkt.",
        keyMoments: [
          { id: '5-1-a', title: "Katja's verwarring", description: "Katja's liefde voor Mitja is verstrengeld met trots en zelfopoffering — geen van beide is gezond." },
        ],
        characterIds: ['katja', 'aljosha', 'ivan', 'dmitri'],
        themeIds: ['liefde', 'vrijheid', 'schuld'],
      },
      {
        id: '5-2',
        bookNumber: 5,
        chapterNumber: 2,
        title: 'Smerdjakiv met de gitaar',
        teaser: 'Een blik op Smerdjakiv\'s vrije avonden en zijn gevaarlijke gedachten.',
        summary:
          "We zien Smerdjakiv in zijn vrije tijd: hij speelt gitaar en flirt met een dienstmeisje. Maar zijn gesprekken zijn doordrenkt van cynisme en superioriteit. Hij beschouwt het gewone leven als zinloos. Ivan spreekt hem nogmaals: Smerdjakiv suggereert voorzichtig dat Ivan beter kan vertrekken als er iets 'zou gebeuren'. Ivan negeert de hint.",
        keyMoments: [
          { id: '5-2-a', title: "Smerdjakivs hint", description: "Smerdjakiv laat subtiel blijken dat hij iets van plan is als Ivan weggaat — Ivan hoort het maar weigert te begrijpen." },
        ],
        characterIds: ['smerdjakiv', 'ivan'],
        themeIds: ['vrijheid', 'schuld', 'duivel'],
      },
      {
        id: '5-3',
        bookNumber: 5,
        chapterNumber: 3,
        title: 'De broers leren elkaar kennen',
        teaser: 'Ivan en Aljosha ontmoeten elkaar in een herberg voor hun eerste echte gesprek.',
        summary:
          "Ivan en Aljosha ontmoeten elkaar in een herberg voor een lang, intiem gesprek — het eerste in hun leven. Ivan is verrast door Aljosha's scherpte en eerlijkheid. Hij vertelt dat hij God misschien accepteert, maar de wereld die God heeft geschapen niet. Hij bereidt zich voor op zijn grote argument.",
        keyMoments: [
          { id: '5-3-a', title: "Ivans openingsthese", description: "'Ik accepteer God, maar ik geef de wereld terug' — Ivan kondigt zijn fundamentele verzet aan." },
        ],
        characterIds: ['ivan', 'aljosha'],
        themeIds: ['geloof', 'opstandigheid', 'lijden'],
      },
      {
        id: '5-4',
        bookNumber: 5,
        chapterNumber: 4,
        title: 'Opstandigheid',
        teaser: 'Ivan confronteert Aljosha met het onschuldige lijden van kinderen.',
        summary:
          "Ivan somt verhalen op van gemartelde kinderen — echte verhalen, uit krantenberichten. Hij vraagt: als God het lijden van onschuldige kinderen toelaat, kan dan de uiteindelijke harmonie dat lijden rechtvaardigen? Hij wil het ticket voor die harmonie teruggeven. Aljosha luistert bewogen maar stelt één vraag: 'Wie moet straffen?'",
        keyMoments: [
          { id: '5-4-a', title: "Het ticket teruggeven", description: "Ivans centrale oproep: hij weigert de universele harmonie te aanvaarden als die gebouwd is op het tranen van één kind." },
          { id: '5-4-b', title: "Aljosha's antwoord", description: "Aljosha noemt Christus als degene die het recht heeft te vergeven — Ivan zat op dit antwoord te wachten." },
        ],
        characterIds: ['ivan', 'aljosha'],
        themeIds: ['opstandigheid', 'lijden', 'geloof', 'vrijheid'],
      },
      {
        id: '5-5',
        bookNumber: 5,
        chapterNumber: 5,
        title: 'De Grootinquisiteur',
        teaser: 'Ivan vertelt zijn gedicht: Christus keert terug en wordt opgesloten door de Inquisiteur.',
        summary:
          "Ivan vertelt zijn zelfgeschreven gedicht: in het Spanje van de zestiende eeuw keert Christus terug en wordt gearresteerd door de Grootinquisiteur. In een lange nachtelijke monoloog legt de Inquisiteur Christus uit waarom de mensheid vrijheid niet aankan en de Kerk goed doet die vrijheid weg te nemen. Christus zwijgt — en kust de Inquisiteur aan het einde. De Inquisiteur laat hem gaan.",
        keyMoments: [
          { id: '5-5-a', title: "De monoloog van de Inquisiteur", description: "De Inquisiteur betoogt dat Christus de mens te veel eer heeft aangedaan door hem vrij te laten — de mensheid heeft brood, wonder en gezag nodig, geen vrijheid." },
          { id: '5-5-b', title: "De kus van Christus", description: "Christus antwoordt niet met woorden maar met een kus — het enige antwoord dat de Inquisiteur niet kan weerleggen." },
        ],
        characterIds: ['ivan', 'aljosha'],
        themeIds: ['grootinquisiteur', 'vrijheid', 'geloof', 'opstandigheid'],
      },
      {
        id: '5-6',
        bookNumber: 5,
        chapterNumber: 6,
        title: 'Vooralsnog een erg onduidelijke',
        teaser: 'Ivan en Aljosha nemen afscheid; Aljosha reageert op de Grootinquisiteur.',
        summary:
          "Na het gedicht kust Aljosha Ivan — een echo van de kus van Christus. Ivan is verrast maar ook ontroerd. Ze nemen afscheid en gaan elk hun weg. Ivan vertelt dat hij weet dat hij zichzelf zal verliezen als hij doorgaat op dit pad, maar hij kan niet stoppen.",
        keyMoments: [
          { id: '5-6-a', title: "Aljosha kust Ivan", description: "Aljosha reageert op de Grootinquisiteur precies zoals Christus deed — niet met woorden, maar met liefde." },
        ],
        characterIds: ['ivan', 'aljosha'],
        themeIds: ['geloof', 'liefde', 'vrijheid', 'grootinquisiteur'],
      },
      {
        id: '5-7',
        bookNumber: 5,
        chapterNumber: 7,
        title: "'Het is altijd interessant met een intelligente man te praten'",
        teaser: 'Smerdjakiv en Ivan wisselen hun laatste gesprek uit voor Ivans vertrek.',
        summary:
          "Ivan bezoekt Smerdjakiv voor zijn vertrek naar Moskou. Smerdjakiv geeft opnieuw cryptische signalen: hij vraagt Ivan nadrukkelijk wanneer hij vertrekt en suggereert dat hij beter niet te snel terug hoeft te komen. Ivan voelt iets duisters maar pakt toch de koets. Dit is het moment waarop Ivan medeplichtig wordt — niet door doen, maar door niet-doen.",
        keyMoments: [
          { id: '5-7-a', title: "Ivans vertrek", description: "Door te vertrekken ondanks de signalen geeft Ivan Smerdjakiv stilzwijgend toestemming — schuld door passiviteit." },
        ],
        characterIds: ['ivan', 'smerdjakiv'],
        themeIds: ['schuld', 'vrijheid', 'duivel'],
      },
    ],
  },
  {
    id: 6,
    partNumber: 2,
    partTitle: 'Deel II',
    title: 'De Russische monnik',
    intro:
      'Het tegenwicht van de Grootinquisiteur: het leven en de leer van ouderling Zosima, opgetekend door Aljosha. Hier spreekt Dostojevski zijn eigen diepste overtuigingen uit over liefde, schuld en de onderlinge verbondenheid van alle mensen.',
    chapters: [
      {
        id: '6-1',
        bookNumber: 6,
        chapterNumber: 1,
        title: 'Vader Zosima en zijn gasten',
        teaser: 'Zosima ontvangt zijn laatste bezoekers terwijl zijn dood nadert.',
        summary:
          "Zosima is ziek en weet dat hij spoedig zal sterven. Hij ontvangt enkele monniken en vertelt hun zijn levensverhaal. De sfeer is sereen. Aljosha zit aan zijn voeten en schrijft alles op. Het hoofdstuk is een overgang naar het grote testament van Zosima.",
        keyMoments: [
          { id: '6-1-a', title: "Zosima's naderende dood", description: "Zosima aanvaardt zijn dood met vreugde — niet als verlies maar als thuiskomst." },
        ],
        characterIds: ['zosima', 'aljosha', 'rakitin'],
        themeIds: ['geloof', 'actieve-liefde', 'lijden'],
      },
      {
        id: '6-2',
        bookNumber: 6,
        chapterNumber: 2,
        title: 'Over het leven van de in de Heer ontslapen priester-monnik Zosima',
        teaser: 'Het levensverhaal van Zosima: zijn jeugd, zijn duel en zijn bekering.',
        summary:
          "Zosima vertelt zijn leven: zijn gelovige broer Markl, zijn militaire diensttijd en zijn bijna-duel. De nacht voor zijn duel werd hij wakker met een gevoel van schaamte: hij wilde zijn tegenstander vermoorden om een belediging. Hij sloeg zijn bediende de avond tevoren. Beiden schaamten hem. Hij besloot het duel te weigeren en publiekelijk zijn fouten te belijden — wat hem zijn militaire carrière kostte maar zijn ziel redde. Later ontving hij een bezoeker wiens geheim hem diep raakte.",
        keyMoments: [
          { id: '6-2-a', title: "Het geweigerde duel", description: "Zosima weigert het duel en belijdt zijn schuld openbaar — een moment van absolute moed en geestelijke bevrijding." },
          { id: '6-2-b', title: "De mysterieuze bezoeker", description: "Een man biecht Zosima een oud moord op — de bekentenis bevrijdt hem na jaren." },
        ],
        characterIds: ['zosima'],
        themeIds: ['schuld', 'geloof', 'vrijheid', 'actieve-liefde'],
      },
      {
        id: '6-3',
        bookNumber: 6,
        chapterNumber: 3,
        title: 'Uit de gesprekken en leerredenen van de startsj Zosima',
        teaser: 'Zosima\'s kernleerstellingen over liefde, gemeenschap en verantwoordelijkheid.',
        summary:
          "Zosima's wijsheid in geconcentreerde vorm: ieder mens is voor allen en voor alles verantwoordelijk. Actieve liefde — werkelijke, concrete liefde — is de enige weg naar God en naar vrede. Abstracte liefde voor de mensheid is waardeloos als je de concrete mens naast je niet kunt verdragen. Zijn woorden zijn het tegengewicht van Ivans Grootinquisiteur.",
        keyMoments: [
          { id: '6-3-a', title: "Ieder is voor allen verantwoordelijk", description: "Zosima's centrale leer: schuld en verantwoordelijkheid zijn niet individueel maar universeel gedeeld." },
          { id: '6-3-b', title: "Actieve vs. abstracte liefde", description: "Echte liefde richt zich op de concrete persoon voor je — niet op de abstracte mensheid." },
        ],
        characterIds: ['zosima'],
        themeIds: ['actieve-liefde', 'geloof', 'schuld', 'vrijheid'],
      },
    ],
  },
  {
    id: 7,
    partNumber: 3,
    partTitle: 'Deel III',
    title: 'Aljosha',
    intro:
      'Zosima sterft, en wat daarna gebeurt schokt het klooster en test Aljosha\'s geloof op de zwaarste proef. Maar in zijn diepste crisis vindt Aljosha een nieuw fundament.',
    chapters: [
      {
        id: '7-1',
        bookNumber: 7,
        chapterNumber: 1,
        title: 'De rottende stank',
        teaser: 'Zosima\'s lichaam begint te stinken na zijn dood — een schandaal in het klooster.',
        summary:
          "Na Zosima's dood verspreidt er een rottingsgeur — ongewoon snel. In het klooster interpreteerden velen dit als een teken dat Zosima geen heilige was: het lichaam van een heilige behoort niet te stinken. Vader Ferapont triomfeert. Aljosha is vernietigd. Zijn geloof wordt op de zwaarste proef gesteld.",
        keyMoments: [
          { id: '7-1-a', title: "De stank als schandaal", description: "De rottingsgeur wordt aangewend als bewijs tegen Zosima — een wrede ironie die Aljosha's geloof ondermijnt." },
          { id: '7-1-b', title: "Feraponts triomf", description: "Ferapont verklaart demonen te hebben verdreven uit Zosima's cel — zijn extremisme viert tijdelijk hoogtij." },
        ],
        characterIds: ['aljosha', 'zosima', 'rakitin'],
        themeIds: ['geloof', 'lijden', 'twijfel'],
      },
      {
        id: '7-2',
        bookNumber: 7,
        chapterNumber: 2,
        title: 'Het ogenblik',
        teaser: 'Rakitin neemt Aljosha mee naar Groesjka in een poging hem te verzoeken.',
        summary:
          "Rakitin neemt een wankele Aljosha mee naar Groesjka. Zijn bedoeling is cynisch: hij heeft Groesjka beloofd haar 'de vrome Karamazov' te brengen, voor geld. Maar er gebeurt iets onverwachts: Groesjka, zelf in nood vanwege nieuws over haar Poolse officier, behandelt Aljosha met opvallende tederheid. Ze vertelt hem een ui-verhaal.",
        keyMoments: [
          { id: '7-2-a', title: "Groesjka's vriendelijkheid", description: "Groesjka behandelt de gebroken Aljosha met zorg — en hij zegt dat zij hem een ui heeft gegeven." },
        ],
        characterIds: ['aljosha', 'rakitin', 'groesjka'],
        themeIds: ['actieve-liefde', 'geloof', 'twijfel'],
      },
      {
        id: '7-3',
        bookNumber: 7,
        chapterNumber: 3,
        title: 'Een ui',
        teaser: 'Groesjka vertelt Aljosha een sprookje over een ui — en ze treffen elkaar in hun pijn.',
        summary:
          "Groesjka vertelt een Russisch volksverhaal: een slechte vrouw had in haar leven één goede daad gedaan — een ui aan een bedelaar geven. Na haar dood probeerde een engel haar met die ui uit de hel te trekken. Maar anderen grepen zich vast en ze schopte hen weg — de ui brak. Groesjka herkent zichzelf in het verhaal. Ze en Aljosha vinden troost in elkaars gezelschap.",
        keyMoments: [
          { id: '7-3-a', title: "Het sprookje van de ui", description: "Een volksverhaal over genade en zelfzucht — een van de mooiste parables in de roman." },
        ],
        characterIds: ['aljosha', 'groesjka'],
        themeIds: ['actieve-liefde', 'schuld', 'geloof'],
      },
      {
        id: '7-4',
        bookNumber: 7,
        chapterNumber: 4,
        title: 'Kana in Galilea',
        teaser: 'Aljosha\'s mystieke ervaring in de nacht na Zosima\'s dood.',
        summary:
          "Aljosha keert terug naar het klooster en knielt bij het lijk van Zosima. Terwijl de lezer het Evangelie van de bruiloft te Kana voorleest, valt Aljosha in een soort extase: hij ziet Zosima aanwezig op de bruiloft in Kana, uitgenodigd door Christus. Hij hoort Zosima's stem. Hij valt neer en kust de aarde met tranen. Als hij opstaat weet hij: zijn crisis is voorbij, zijn liefde voor het leven is teruggekeerd.",
        keyMoments: [
          { id: '7-4-a', title: "Aljosha's visioen", description: "Aljosha's mystieke nacht: een dieptepunt wordt een ommekeer — hij omhelst de aarde en voelt een nieuw leven beginnen." },
        ],
        characterIds: ['aljosha', 'zosima'],
        themeIds: ['geloof', 'actieve-liefde', 'lijden'],
      },
    ],
  },
  {
    id: 8,
    partNumber: 3,
    partTitle: 'Deel III',
    title: 'Mitja',
    intro:
      'De nacht van de misdaad. Mitja rent wanhopig door de stad op zoek naar geld om Groesjka te kunnen redden van de terugkerende Poolse officier. Zijn tocht eindigt in Mokroje — en in een catastrofe.',
    chapters: [
      {
        id: '8-1',
        bookNumber: 8,
        chapterNumber: 1,
        title: 'Kuzma Samsonov',
        teaser: 'Mitja vraagt de rijke handelaar Samsonov om geld maar wordt afgewezen.',
        summary:
          "Mitja heeft Groesjka nodig en heeft geld nodig. Hij vraagt de oude handelaar Samsonov — Groesjka's voormalige beschermheer — om een lening. Samsonov stuurt hem op een dwaaltocht naar een grondbezitter buiten de stad die nooit zal uitbetalen. Mitja trapt erin en verliest kostbare tijd.",
        keyMoments: [
          { id: '8-1-a', title: "Samsonovs misleiding", description: "Samsonov stuurt Mitja bewust op een dwaalspoor — zelfs zijn helpers verraden hem." },
        ],
        characterIds: ['dmitri', 'groesjka'],
        themeIds: ['liefde', 'vrijheid', 'schuld'],
      },
      {
        id: '8-2',
        bookNumber: 8,
        chapterNumber: 2,
        title: 'Ljagawi',
        teaser: 'Mitja reist naar een grondbezitter maar vindt hem dronken en nutteloos.',
        summary:
          "Mitja rijdt uren naar de bosbezitter Ljagawi om een stuk grond te verkopen. Hij vindt hem volledig dronken. Mitja wacht de hele nacht, maar Ljagawi is onbenaderbaar. Mitja keert terug met lege handen, uitgeput en wanhopig.",
        keyMoments: [
          { id: '8-2-a', title: "De vergeefse nacht bij Ljagawi", description: "Een komische maar pijnlijke episode: Mitja's vertwijfeling groeit naarmate elke uitweg dichtgaat." },
        ],
        characterIds: ['dmitri'],
        themeIds: ['vrijheid', 'lijden'],
      },
      {
        id: '8-3',
        bookNumber: 8,
        chapterNumber: 3,
        title: 'De goudmijnen',
        teaser: 'Mitja vraagt Madame Khokhlakova om geld maar krijgt een absurd advies.',
        summary:
          "In wanhoop bezoekt Mitja Madame Khokhlakova. Ze weigert hem geld maar stelt voor zijn energie te investeren in Siberische goudmijnen. Mitja staat perplex. Terwijl hij vertrekt, bedenkt hij iets wanhopigs: hij zal Fjodor bezoeken en bij hem binnendringen. Zijn gedachten worden gevaarlijk.",
        keyMoments: [
          { id: '8-3-a', title: "Khokhlakova's advies", description: "Een absurde maar veelzeggende scène: terwijl Mitja's wereld ineen valt, krijgt hij raad over goudmijnen." },
        ],
        characterIds: ['dmitri', 'madame-khokhlakova'],
        themeIds: ['vrijheid', 'lijden'],
      },
      {
        id: '8-4',
        bookNumber: 8,
        chapterNumber: 4,
        title: 'In het donker',
        teaser: 'Mitja sluipt de tuin in van zijn vader — de fatale stap.',
        summary:
          "Mitja besluit de tuin van Fjodor te betreden. Hij neemt een bronzen stamper mee. Hij gluurt door het raam. Hij raakt Grigorij, die hem betrapt. Wat daarna precies gebeurt in de tuin blijft door de rest van de roman omstreden. Mitja vlucht.",
        keyMoments: [
          { id: '8-4-a', title: "De tuin in het donker", description: "De centrale scène waarrond het hele rechtbankgedeelte zal draaien — wat zag Mitja, wat deed hij?" },
          { id: '8-4-b', title: "Grigorij wordt neergeslagen", description: "Mitja slaat Grigorij neer bij de vlucht — dit is vaststaand. Of hij ook zijn vader heeft gedood, is de vraag." },
        ],
        characterIds: ['dmitri', 'fjodor', 'grigorij'],
        themeIds: ['schuld', 'vrijheid', 'vader-zonen'],
      },
      {
        id: '8-5',
        bookNumber: 8,
        chapterNumber: 5,
        title: 'Een abrupte beslissing',
        teaser: 'Mitja neemt een impulsieve beslissing en haalt geld op bij Katja.',
        summary:
          "Na de chaos in de tuin gaat Mitja naar Katja's woning en neemt geld dat haar toebehoort — de andere helft van de drieduizend roebel die hij bewaard had. Hij gaat ermee naar het dorp Mokroje, waar Groesjka met haar Poolse officier feest.",
        keyMoments: [
          { id: '8-5-a', title: "Het geld van Katja", description: "Mitja neemt Katja's geld — een daad die zijn situatie in het proces catastrofaal zal maken." },
        ],
        characterIds: ['dmitri', 'katja'],
        themeIds: ['schuld', 'liefde', 'vrijheid'],
      },
      {
        id: '8-6',
        bookNumber: 8,
        chapterNumber: 6,
        title: 'Ik kom!',
        teaser: 'Mitja arriveert in Mokroje en confronteert Groesjka en haar Poolse officier.',
        summary:
          "Mitja arriveert in Mokroje met geld, pistolen en wijn. Hij organiseert een feest en confronteert de Poolse officier. Gaandeweg blijkt dat de officier Groesjka al lang geleden heeft verlaten en nu alleen voor haar geld terugkomt. Groesjka kiest Mitja. Het is hun moment van ware liefde — maar het duurt niet lang.",
        keyMoments: [
          { id: '8-6-a', title: "Groesjka kiest Mitja", description: "Groesjka verwerpt haar Poolse droomfiguur en kiest voor Mitja — de liefde die ze werkelijk voelt." },
        ],
        characterIds: ['dmitri', 'groesjka'],
        themeIds: ['liefde', 'vrijheid', 'schuld'],
      },
      {
        id: '8-7',
        bookNumber: 8,
        chapterNumber: 7,
        title: 'Het vroegere en onbetwistbare',
        teaser: 'Mitja en Groesjka vinden elkaar in een moment van echte verbinding.',
        summary:
          "Mitja en Groesjka hebben een nacht van vreugde en liefde — maar er hangt een donkere schaduw. Mitja bekent aan Groesjka dat hij bloed aan zijn handen heeft. Ze zijn gelukkig, maar de wereld buiten het raam nadert.",
        keyMoments: [
          { id: '8-7-a', title: "Mitja's bekentenis", description: "Mitja bekent dat hij bloed heeft vergoten — maar verzwijgt de details. Groesjka aanvaardt hem." },
        ],
        characterIds: ['dmitri', 'groesjka'],
        themeIds: ['liefde', 'schuld', 'vrijheid'],
      },
      {
        id: '8-8',
        bookNumber: 8,
        chapterNumber: 8,
        title: 'Het delirische',
        teaser: 'De politie arriveert in Mokroje en arresteert Mitja voor de moord op zijn vader.',
        summary:
          "De politie arriveert en arresteert Mitja. Fjodor Karamazov is dood gevonden in zijn huis. Mitja is de hoofdverdachte. Hij heeft een bebloede hand, geld dat hij niet kon hebben, en geen alibi. Het feest eindigt in een arrestatie. Groesjka is getuige.",
        keyMoments: [
          { id: '8-8-a', title: "Mitja's arrestatie", description: "De politie neemt Mitja mee — het begin van het rechtbankgedeelte en de centrale vraag: heeft hij het gedaan?" },
        ],
        characterIds: ['dmitri', 'groesjka'],
        themeIds: ['schuld', 'vrijheid', 'lijden'],
      },
    ],
  },
  {
    id: 9,
    partNumber: 3,
    partTitle: 'Deel III',
    title: 'Het vooronderzoek',
    intro:
      'Het gerechtelijk vooronderzoek naar de moord op Fjodor Karamazov. Mitja wordt verhoord, zijn verleden wordt blootgelegd, en langzaam worden de bewijzen tegen hem gestapeld — terwijl de lezer weet dat de waarheid complexer is.',
    chapters: [
      {
        id: '9-1',
        bookNumber: 9,
        chapterNumber: 1,
        title: 'Het begin van de ambtenaar Perchhotins loopbaan',
        teaser: 'De ambtenaar Perchhkotin ontdekt dat Mitja geld had en pistolen had gekocht.',
        summary:
          "De jonge ambtenaar Perchhotin, bij wie Mitja die avond geld en pistolen had opgehaald, raakt bezorgd. Hij gaat de politie waarschuwen en zo begint het alarm. Zijn beslissing om te melden zal Mitja veroordelen.",
        keyMoments: [
          { id: '9-1-a', title: "Perchhotins melding", description: "Een kleine, eerlijke daad van een ambtenaar zet de machinerie van de rechtsstaat in werking." },
        ],
        characterIds: ['dmitri'],
        themeIds: ['schuld', 'vrijheid'],
      },
      {
        id: '9-2',
        bookNumber: 9,
        chapterNumber: 2,
        title: 'Het alarm',
        teaser: 'Het nieuws van de moord verspreidt zich door de stad.',
        summary:
          "Het nieuws dat Fjodor Karamazov is vermoord verspreidt zich snel. De politie organiseert zich. De aanklager en de rechter-commissaris reizen naar Mokroje. De stad is in opschudding.",
        keyMoments: [
          { id: '9-2-a', title: "De stad in rep en roer", description: "Nieuws reist snel in een kleine stad — geruchten en meningen vormen zich al voor het onderzoek begint." },
        ],
        characterIds: ['dmitri', 'groesjka'],
        themeIds: ['schuld', 'vrijheid'],
      },
      {
        id: '9-3',
        bookNumber: 9,
        chapterNumber: 3,
        title: 'De ziel van een troglodiet. Mitja wordt gearresteerd',
        teaser: 'De officiële arrestatie van Mitja in Mokroje.',
        summary:
          "De aanklager en rechter-commissaris arriveren in Mokroje en arresteren Mitja formeel. Mitja is bewogen maar niet gebroken. Hij beweert zijn onschuld maar de bewijzen stapelen zich tegen hem op: het bloed, het geld, zijn woede-uitbarstingen eerder die avond.",
        keyMoments: [
          { id: '9-3-a', title: "Mitja's eerste verklaring", description: "Mitja erkent wat hij heeft gedaan maar ontkent de moord — de rechters luisteren sceptisch." },
        ],
        characterIds: ['dmitri', 'groesjka'],
        themeIds: ['schuld', 'vrijheid', 'lijden'],
      },
      {
        id: '9-4',
        bookNumber: 9,
        chapterNumber: 4,
        title: 'De foltering. De eerste.',
        teaser: 'Het eerste verhoor van Mitja: over zijn geld en zijn bewegingen die avond.',
        summary:
          "Het verhoor begint. Mitja vertelt zijn verhaal eerlijk maar het klinkt ongeloofwaardig. Waar kwam dat geld vandaan? Hij beweert de helft van Katja's drieduizend roebel te hebben bewaard — maar niemand wist dat. De aanklager gelooft hem niet.",
        keyMoments: [
          { id: '9-4-a', title: "Het geheim van de duizend en vijfhonderd", description: "Mitja beweert geld apart te hebben gelegd als 'eer' — een claim die niemand gelooft maar die cruciaal is." },
        ],
        characterIds: ['dmitri'],
        themeIds: ['schuld', 'vrijheid'],
      },
      {
        id: '9-5',
        bookNumber: 9,
        chapterNumber: 5,
        title: 'De foltering. De tweede.',
        teaser: 'Het verhoor gaat dieper in op de nacht van de misdaad.',
        summary:
          "De onderzoekers reconstrueren Mitja's bewegingen. Alles wijst op hem. Mitja raakt gefrustreerd en is niet altijd coherent, maar is fundamenteel eerlijk. Hij vertelt over de tuin, over Grigorij, over zijn vlucht — maar het klinkt als een dader die probeert te ontsnappen.",
        keyMoments: [
          { id: '9-5-a', title: "De tuin opnieuw", description: "Mitja's verklaring over wat hij in de tuin deed is eerlijk maar ongeloofwaardig voor de onderzoekers." },
        ],
        characterIds: ['dmitri'],
        themeIds: ['schuld', 'vrijheid', 'lijden'],
      },
      {
        id: '9-6',
        bookNumber: 9,
        chapterNumber: 6,
        title: 'De aanklager vat de aanklager op',
        teaser: 'De onderzoekers bespreken onderling hun indrukken van Mitja.',
        summary:
          "De aanklager en rechter-commissaris wisselen hun indrukken uit. Ze zijn ervan overtuigd dat Mitja schuldig is. Ze zien zijn eerlijkheid als een slim spel. Ze begrijpen zijn psychologie verkeerd — ze zoeken een koud berekend moordenaar en zien er een passioneel mens over het hoofd.",
        keyMoments: [
          { id: '9-6-a', title: "De verkeerde lezing", description: "De aanklager leest Mitja's karakter compleet verkeerd — een kritiek op de gerechtigheid die types zoekt, geen mensen." },
        ],
        characterIds: ['dmitri'],
        themeIds: ['schuld', 'vrijheid'],
      },
      {
        id: '9-7',
        bookNumber: 9,
        chapterNumber: 7,
        title: 'Het grote geheim van Mitja. Uitgefloten',
        teaser: 'Mitja onthult zijn grote geheim: hij had Katja\'s geld bewaard.',
        summary:
          "Mitja legt uit waarom hij maar de helft van Katja's geld heeft uitgegeven: hij had het andere deel bewaard als erezaak, als iets dat hij terug wilde geven. Het amulet van zijn eer. De aanklagers vinden dit ongeloofwaardig. Mitja voelt dat hij wordt uitgelachen.",
        keyMoments: [
          { id: '9-7-a', title: "Het bewaard geld als eer", description: "Mitja's complexe eergevoel — hij spaarde geld als symbool, niet als praktisch plan — wordt niet begrepen." },
        ],
        characterIds: ['dmitri', 'katja'],
        themeIds: ['schuld', 'vrijheid', 'liefde'],
      },
      {
        id: '9-8',
        bookNumber: 9,
        chapterNumber: 8,
        title: 'De getuigenissen van Smerdjakiv',
        teaser: 'Smerdjakiv legt als getuige een verklaring af die Mitja verder belast.',
        summary:
          "Smerdjakiv, die tijdens de avond een epileptische aanval zou hebben gehad, legt een verklaring af. Hij zegt dat hij de hele nacht bewusteloos was. Zijn getuigenis — kalm, gedetailleerd, geloofwaardig — helpt de zaak tegen Mitja op te bouwen.",
        keyMoments: [
          { id: '9-8-a', title: "Smerdjakivs alibi", description: "Smerdjakiv presenteert zijn epileptische aanval als alibi — zijn kalmte is verontrustend." },
        ],
        characterIds: ['smerdjakiv', 'dmitri'],
        themeIds: ['schuld', 'duivel', 'vrijheid'],
      },
      {
        id: '9-9',
        bookNumber: 9,
        chapterNumber: 9,
        title: 'Mitja wordt afgevoerd',
        teaser: 'Mitja wordt formeel in hechtenis genomen en afgevoerd naar de stad.',
        summary:
          "Het vooronderzoek is afgerond. Mitja wordt geboeid en per koets naar de stad gebracht. Hij neemt afscheid van Groesjka. Ze beloven elkaar standvastig te zijn. Mitja voelt een vreemd soort vrede: hij weet dat hij onschuldig is aan de moord, ook al is hij schuldig aan andere dingen.",
        keyMoments: [
          { id: '9-9-a', title: "Afscheid van Groesjka", description: "Een ontroerend afscheid — Mitja en Groesjka beloven elkaar te wachten." },
        ],
        characterIds: ['dmitri', 'groesjka'],
        themeIds: ['liefde', 'schuld', 'lijden'],
      },
      {
        id: '9-10',
        bookNumber: 9,
        chapterNumber: 10,
        title: 'De vrouw neemt het over',
        teaser: 'Groesjka beslist dat zij voor Mitja zal zorgen, wat er ook gebeurt.',
        summary:
          "Groesjka toont haar kracht: ze is niet gebroken, ze is vastbesloten. Ze zal Mitja volgen, voor hem zorgen, op hem wachten. Dit is het moment waarop haar transformatie volledig is: van sensuele vrouw met een donker verleden naar iemand met een diepe, onwankelbare liefde.",
        keyMoments: [
          { id: '9-10-a', title: "Groesjka's beslissing", description: "Groesjka's toewijding aan Mitja — haar liefde is nu volledig en onvoorwaardelijk." },
        ],
        characterIds: ['groesjka', 'dmitri'],
        themeIds: ['liefde', 'vrijheid', 'actieve-liefde'],
      },
    ],
  },
  {
    id: 10,
    partNumber: 4,
    partTitle: 'Deel IV',
    title: 'Jongens',
    intro:
      "Een schijnbaar apart verhaal over kinderen — maar eigenlijk de roman in miniatuur. Kolja, Iljoesjka en Aljosha spelen de grote thema's uit in een kleine, aangrijpende wereld.",
    chapters: [
      {
        id: '10-1',
        bookNumber: 10,
        chapterNumber: 1,
        title: 'Kolja Krassotkin',
        teaser: 'Introductie van Kolja: een slimme, zelfbewuste jongen van dertien.',
        summary:
          "We maken kennis met Kolja Krassotkin: hij is de slimste jongen van de klas en weet dat. Hij heeft Ivans filosofische twijfels als scholier geabsorbeerd. Hij is tegelijk innemend en irritant. Zijn verhouding met zijn moeder is warm maar hij schaamt zich voor haar zachtheid.",
        keyMoments: [
          { id: '10-1-a', title: "Kolja's karakter", description: "Kolja als jeugdige Ivan: intelligent, brutaal eerlijk, vol van geleende ideeën die hij nog niet begrijpt." },
        ],
        characterIds: ['kolja'],
        themeIds: ['vrijheid', 'vader-zonen'],
      },
      {
        id: '10-2',
        bookNumber: 10,
        chapterNumber: 2,
        title: 'Kinderen',
        teaser: 'De jongens in de stad en hun relatie tot Iljoesjka\'s ziekte.',
        summary:
          "De situatie in de stad onder de jongens: Iljoesjka is ernstig ziek en ligt thuis. De andere jongens weten niet goed hoe ze hiermee om moeten gaan. Kolja heeft zich enige tijd afzijdig gehouden uit schaamte — hij deed Iljoesjka iets pijnlijks aan.",
        keyMoments: [
          { id: '10-2-a', title: "Kolja's schuld", description: "Kolja schaamde zich voor iets wat hij Iljoesjka aandeed — zijn wroeging is echt maar moeilijk te tonen." },
        ],
        characterIds: ['kolja', 'iljoesjka'],
        themeIds: ['schuld', 'actieve-liefde', 'lijden'],
      },
      {
        id: '10-3',
        bookNumber: 10,
        chapterNumber: 3,
        title: 'Een scholier',
        teaser: 'Kolja ontmoet Aljosha voor de eerste keer.',
        summary:
          "Kolja ontmoet Aljosha op weg naar Iljoesjka's huis. Kolja probeert indruk te maken en test Aljosha met provocerende filosofische stellingen. Aljosha is niet onder de indruk maar ook niet neerbuigend. Kolja is verrast: hij had een flauwerd verwacht.",
        keyMoments: [
          { id: '10-3-a', title: "Kolja test Aljosha", description: "Kolja gooit zijn filosoische provocaties naar Aljosha — en wordt verrast door diens eenvoudige, eerlijke reactie." },
        ],
        characterIds: ['kolja', 'aljosha'],
        themeIds: ['geloof', 'vrijheid', 'actieve-liefde'],
      },
      {
        id: '10-4',
        bookNumber: 10,
        chapterNumber: 4,
        title: 'Zjoetsjka',
        teaser: 'Kolja haalt het hondje Zjoetsjka terug voor Iljoesjka.',
        summary:
          "Kolja had Iljoesjka verteld dat zijn hondje Zjoetsjka was gestorven — maar dat was een leugen. Hij had het dier gevonden en verborgen als verrassing. Nu brengt hij het levende hondje naar Iljoesjka's ziekbed. Het kind is bewogen.",
        keyMoments: [
          { id: '10-4-a', title: "Zjoetsjka komt terug", description: "Het hondje terugbrengen is Kolja's manier om zijn schuld goed te maken — een kleine maar echte daad van liefde." },
        ],
        characterIds: ['kolja', 'iljoesjka', 'aljosha'],
        themeIds: ['actieve-liefde', 'schuld', 'lijden'],
      },
      {
        id: '10-5',
        bookNumber: 10,
        chapterNumber: 5,
        title: "Bij Iljoesjka's bed",
        teaser: 'Aljosha, Kolja en de jongens verzamelen zich bij het ziekbed van Iljoesjka.',
        summary:
          "De jongens en Aljosha verzamelen zich bij Iljoesjka's bed. Zijn vader Snegirjov is aanwezig — gebroken maar dankbaar. Iljoesjka is zwak maar blij. Het is een aangrijpende scène van menselijkheid: een ziek kind omringd door vrienden.",
        keyMoments: [
          { id: '10-5-a', title: "Vriendschap bij het ziekbed", description: "Een van de meest ontroerende scènes: de jongens rondom Iljoesjka — kinderlijke liefde in haar puurste vorm." },
        ],
        characterIds: ['iljoesjka', 'kolja', 'aljosha', 'snegirjov'],
        themeIds: ['actieve-liefde', 'lijden', 'schuld'],
      },
      {
        id: '10-6',
        bookNumber: 10,
        chapterNumber: 6,
        title: 'Vroegrijpheid',
        teaser: 'Kolja en Aljosha spreken over God, geloof en twijfel.',
        summary:
          "Kolja spreekt met Aljosha over zijn twijfels en zijn geloof in een nieuwe maatschappij. Aljosha luistert ernstig en reageert op Kolja's filosofische stellingen zonder ze te verwerpen of te veroordelen. Hij erkent Kolja's intelligentie en spreekt als gelijke met hem.",
        keyMoments: [
          { id: '10-6-a', title: "Aljosha en Kolja over geloof", description: "Aljosha behandelt Kolja als een volwassen gesprekspartner — het beste wat hij voor hem kan doen." },
        ],
        characterIds: ['kolja', 'aljosha'],
        themeIds: ['geloof', 'twijfel', 'actieve-liefde'],
      },
      {
        id: '10-7',
        bookNumber: 10,
        chapterNumber: 7,
        title: 'Iljoesjka',
        teaser: 'Iljoesjka\'s toestand verslechtert; zijn dood wordt voelbaar.',
        summary:
          "Iljoesjka's toestand gaat achteruit. De jongens bezoeken hem regelmatig. De sfeer is teder maar verdrietig. Snegirjov is gebroken. Aljosha zorgt dat het kind niet alleen is. De dood nadert.",
        keyMoments: [
          { id: '10-7-a', title: "Iljoesjka's naderende dood", description: "Het onschuldige lijden van een kind — de concrete realisatie van Ivans abstracte betoog in Boek 5." },
        ],
        characterIds: ['iljoesjka', 'aljosha', 'snegirjov', 'kolja'],
        themeIds: ['lijden', 'actieve-liefde', 'geloof'],
      },
    ],
  },
  {
    id: 11,
    partNumber: 4,
    partTitle: 'Deel IV',
    title: 'Broer Ivan Fjodorovitsj',
    intro:
      'Ivan stort in. Zijn gesprekken met Smerdjakiv onthullen de ware toedracht van de moord — en de mate van zijn eigen schuld. Zijn geest begint te bezwijken onder het gewicht van wat hij weet.',
    chapters: [
      {
        id: '11-1',
        bookNumber: 11,
        chapterNumber: 1,
        title: 'Bij Groesjka',
        teaser: 'Aljosha bezoekt Groesjka, die hem over Mitja en zijn toestand vertelt.',
        summary:
          "Aljosha bezoekt Groesjka. Ze vertelt over Mitja's geestelijke toestand in de gevangenis: hij is veranderd, meer naar binnen gekeerd. Ze is bezorgd maar vastbesloten. Er is ook sprake van Rakitin, die haar heeft bezocht met duistere bedoelingen.",
        keyMoments: [
          { id: '11-1-a', title: "Groesjka over Mitja's verandering", description: "Mitja groeit in de gevangenis — zijn lijden is louterend, niet verwoestend." },
        ],
        characterIds: ['aljosha', 'groesjka', 'dmitri'],
        themeIds: ['liefde', 'schuld', 'lijden'],
      },
      {
        id: '11-2',
        bookNumber: 11,
        chapterNumber: 2,
        title: 'De zere poot',
        teaser: 'Lise vertoont steeds grilliger gedrag en bekent haar duistere verlangens.',
        summary:
          "Lise stuurt Aljosha weg en doet daarna een eigenaardige bekentenis: ze zegt dat ze van het kwade houdt, dat ze wil dat iemand haar pijn doet. Ze heeft dromen over duivels. Ze beschadigt zichzelf. Aljosha is bezorgd maar weet niet hoe te helpen.",
        keyMoments: [
          { id: '11-2-a', title: "Lise's zelfdestructie", description: "Lise's raadselachtige zelfdestructie — een psychologisch portret van iemand die zichzelf straft voor iets onbenoembaars." },
        ],
        characterIds: ['aljosha', 'lise'],
        themeIds: ['vrijheid', 'lijden', 'schuld'],
      },
      {
        id: '11-3',
        bookNumber: 11,
        chapterNumber: 3,
        title: 'De zere poot (vervolg)',
        teaser: 'Aljosha en Lise praten door over het kwade en de wereld.',
        summary:
          "Lise en Aljosha praten door. Lise zegt dat ze niet wil dat het goed komt met de wereld. Aljosha is diep ontdaan maar verwerpt haar niet. Het gesprek is een van de duisterste in de roman — maar ook eerlijk.",
        keyMoments: [
          { id: '11-3-a', title: "Lise wil het kwade", description: "Lise bekent dat ze bewust voor vernietiging kiest — Aljosha hoort het aan zonder te vluchten." },
        ],
        characterIds: ['aljosha', 'lise'],
        themeIds: ['vrijheid', 'lijden', 'schuld'],
      },
      {
        id: '11-4',
        bookNumber: 11,
        chapterNumber: 4,
        title: 'Een huwelijk voor eeuwig',
        teaser: 'Aljosha bezoekt Mitja in de gevangenis.',
        summary:
          "Aljosha bezoekt Mitja. Mitja vertelt over zijn dromen: hij heeft een visioen gehad van een huilend kind in een koud dorp. Het raakt hem. Hij spreekt over schuld en boetedoening op een nieuwe manier. Hij heeft besloten zijn straf te aanvaarden, ook al is hij onschuldig aan de moord.",
        keyMoments: [
          { id: '11-4-a', title: "Mitja's droom van het kind", description: "Mitja droomt van een weenend kind — een visioen dat zijn morele ontwaking symboliseert." },
          { id: '11-4-b', title: "Straf aanvaarden als reiniging", description: "Mitja besluit zijn onterechte straf te ondergaan — hij ziet het als boetedoening voor zijn werkelijke zonden." },
        ],
        characterIds: ['dmitri', 'aljosha'],
        themeIds: ['schuld', 'lijden', 'vrijheid', 'actieve-liefde'],
      },
      {
        id: '11-5',
        bookNumber: 11,
        chapterNumber: 5,
        title: 'Niet jij, niet jij!',
        teaser: 'Katja bezoekt Mitja in de gevangenis met verrassende gevolgen.',
        summary:
          "Katja bezoekt Mitja in de gevangenis. Het gesprek is emotioneel en verwarrend. Ze zegt dat ze voor hem zal zorgen maar Mitja voelt dat haar liefde voor Ivan groter is. Hij vraagt haar dat te erkennen. De scène eindigt in pijn.",
        keyMoments: [
          { id: '11-5-a', title: "De laatste confrontatie van Katja en Mitja", description: "Twee mensen die van elkaar houden op een manier die hen beide gevangen houdt." },
        ],
        characterIds: ['dmitri', 'katja', 'aljosha'],
        themeIds: ['liefde', 'schuld', 'vrijheid'],
      },
      {
        id: '11-6',
        bookNumber: 11,
        chapterNumber: 6,
        title: 'Het eerste bezoek aan Smerdjakiv',
        teaser: 'Ivan bezoekt Smerdjakiv voor het eerste serieuze gesprek na de moord.',
        summary:
          "Ivan bezoekt Smerdjakiv ziek thuis. Smerdjakiv is koel en berekend als altijd. Hij spreekt over de avond van de moord met een zelfverzekerdheid die Ivan verontrust. Ivan begint te begrijpen dat er meer is dan hij dacht.",
        keyMoments: [
          { id: '11-6-a', title: "Ivans ongemak", description: "Ivan voelt dat Smerdjakiv hem iets vertelt zonder het te zeggen — de impliciete boodschap is verontrustend." },
        ],
        characterIds: ['ivan', 'smerdjakiv'],
        themeIds: ['schuld', 'duivel', 'vrijheid'],
      },
      {
        id: '11-7',
        bookNumber: 11,
        chapterNumber: 7,
        title: 'Het tweede bezoek aan Smerdjakiv',
        teaser: 'Ivan bezoekt Smerdjakiv opnieuw en krijgt meer te horen.',
        summary:
          "Bij het tweede bezoek vertelt Smerdjakiv meer. Hij legt Ivan stap voor stap uit hoe de nacht verliep. Ivan begint te beseffen hoe zijn eigen filosofie — 'alles is geoorloofd' — gebruikt is als rechtvaardiging. Zijn schuld groeit.",
        keyMoments: [
          { id: '11-7-a', title: "Ivans filosofie in actie", description: "Smerdjakiv heeft Ivans ideeën letterlijk genomen — en Ivan kan zijn eigen woorden niet weerleggen." },
        ],
        characterIds: ['ivan', 'smerdjakiv'],
        themeIds: ['schuld', 'vrijheid', 'duivel'],
      },
      {
        id: '11-8',
        bookNumber: 11,
        chapterNumber: 8,
        title: 'Het derde bezoek aan Smerdjakiv',
        teaser: 'Smerdjakiv bekent de moord volledig aan Ivan.',
        summary:
          "Bij het derde bezoek bekent Smerdjakiv de moord openlijk. Hij legt uit hoe hij het heeft gedaan. Hij geeft Ivan het geld. Maar hij zegt ook: 'U heeft het gedaan — u bent de geestelijke dader.' Ivan is verbrijzeld. Smerdjakiv is volledig koel.",
        keyMoments: [
          { id: '11-8-a', title: "Smerdjakivs bekentenis", description: "Smerdjakiv bekent de moord maar houdt Ivan medeverantwoordelijk — de morele kern van de roman." },
          { id: '11-8-b', title: "'U heeft het gedaan'", description: "Smerdjakiv wijst Ivan aan als de intellectuele dader — hij gaf de toestemming door te zwijgen en te vertrekken." },
        ],
        characterIds: ['ivan', 'smerdjakiv'],
        themeIds: ['schuld', 'vrijheid', 'duivel', 'vader-zonen'],
      },
      {
        id: '11-9',
        bookNumber: 11,
        chapterNumber: 9,
        title: 'De duivel. Ivans nachtmerrie',
        teaser: 'Ivan krijgt een bezoek van de duivel — een visioen of realiteit?',
        summary:
          "Ivan, koortsig en geestelijk uitgeput, ontvangt een bezoek van een man die zich gedraagt als de duivel. De duivel is banaal, vriendelijk en grappig — hij weet Ivans meest beschamende gedachten. Ivan weet niet of het een hallucinatie is of niet. Het visioen dwingt hem zijn eigen aard onder ogen te zien.",
        keyMoments: [
          { id: '11-9-a', title: "De banale duivel", description: "Dostojevski's duivel is geen angstaanjagende figuur maar een gewone man — het banale kwaad in Ivans eigen geest." },
        ],
        characterIds: ['ivan'],
        themeIds: ['duivel', 'vrijheid', 'schuld', 'geloof'],
      },
      {
        id: '11-10',
        bookNumber: 11,
        chapterNumber: 10,
        title: "'Hij heeft het gedaan'",
        teaser: 'Ivan besluit de waarheid te vertellen op het proces — maar het is al te laat.',
        summary:
          "Aljosha bezoekt Ivan na de duivelservaring. Ivan vertelt hem dat hij de volgende dag de waarheid zal vertellen in de rechtbank. Hij weet wie de moordenaar is. Aljosha luistert. Ivan is koortzig en ziek maar vastbesloten.",
        keyMoments: [
          { id: '11-10-a', title: "Ivan besluit te spreken", description: "Ivan kiest voor de waarheid ten koste van zichzelf — een pijnlijke maar menselijke daad." },
        ],
        characterIds: ['ivan', 'aljosha'],
        themeIds: ['schuld', 'vrijheid', 'geloof'],
      },
    ],
  },
  {
    id: 12,
    partNumber: 4,
    partTitle: 'Deel IV',
    title: 'Een rechterlijke dwaling',
    intro:
      'Het grote rechtbankdrama. De aanklager en de verdediger leveren hun magistrale pleidooien. De jury beslist. En de uitkomst — terecht of onterecht — legt de grenzen van menselijke gerechtigheid bloot.',
    chapters: [
      {
        id: '12-1',
        bookNumber: 12,
        chapterNumber: 1,
        title: 'De fatale dag',
        teaser: 'De rechtszaal vult zich voor het proces van de eeuw in de provincie.',
        summary:
          "De stad is in rep en roer: het proces trekt bezoekers van heinde en verre, inclusief dames die speciaal voor de gelegenheid zijn gekomen. De rechtszaal wordt beschreven in detail. Mitja verschijnt rustig en goed gekleed.",
        keyMoments: [
          { id: '12-1-a', title: "De rechtszaal als theater", description: "Dostojevski beschrijft de rechtbank als een maatschappelijk spektakel — de stad gaat uit om te kijken." },
        ],
        characterIds: ['dmitri', 'katja', 'groesjka', 'ivan'],
        themeIds: ['schuld', 'vrijheid'],
      },
      {
        id: '12-2',
        bookNumber: 12,
        chapterNumber: 2,
        title: 'Gevaarlijke getuigen',
        teaser: 'De getuigen worden gehoord — elk met hun eigen belang.',
        summary:
          "De getuigen leggen hun verklaringen af: Grigorij, Madame Khokhlakova, de dokter. Elk getuigt naar beste weten, maar soms klopt het beeld niet. Grigorij is stellig maar vergist zich mogelijk in wat hij zag. Madame Khokhlakova is theatraal.",
        keyMoments: [
          { id: '12-2-a', title: "Grigorijs getuigenis", description: "Grigorij is eerlijk maar zijn waarneming is onzeker — de rechtbank bouwt op fragiel bewijs." },
        ],
        characterIds: ['dmitri', 'grigorij', 'madame-khokhlakova'],
        themeIds: ['schuld', 'vrijheid'],
      },
      {
        id: '12-3',
        bookNumber: 12,
        chapterNumber: 3,
        title: 'De medisch-deskundige en een pond noten',
        teaser: 'De medische deskundigen leveren tegenstrijdige verklaringen over Mitja\'s geestestoestand.',
        summary:
          "Medische deskundigen debatteren over Mitja's geestestoestand op de avond van de moord. Hun verklaringen zijn tegenstrijdig en soms belachelijk. Dostojevski parodieert hier vriendelijk de wetenschappelijke pretenties van de forensische psychiatrie.",
        keyMoments: [
          { id: '12-3-a', title: "De psychiatrie-parodie", description: "Dostojevski's ironie: deskundigen die zeker weten wat ze niet kunnen weten." },
        ],
        characterIds: ['dmitri'],
        themeIds: ['vrijheid', 'schuld'],
      },
      {
        id: '12-4',
        bookNumber: 12,
        chapterNumber: 4,
        title: 'Fortuna zwaait haar zweep',
        teaser: 'De getuigenissen beginnen te draaien — onverwachte wendingen.',
        summary:
          "De rechtbank hoort meer getuigen. Rakitin getuigt en blijkt een agenda te hebben. Enkele getuigen zeggen dingen die Mitja helpen — maar de jury lijkt al overtuigd.",
        keyMoments: [
          { id: '12-4-a', title: "Rakitins getuigenis", description: "Rakitin getuigt maar zijn eigenbelang wordt zichtbaar — zijn geloofwaardigheid tankt." },
        ],
        characterIds: ['dmitri', 'rakitin'],
        themeIds: ['schuld', 'vrijheid'],
      },
      {
        id: '12-5',
        bookNumber: 12,
        chapterNumber: 5,
        title: 'Een plotselinge catastrofe',
        teaser: 'Katja en Ivan getuigen — met dramatische gevolgen.',
        summary:
          "Katja legt een verklaring af die Mitja belast — ze toont een brief die hij haar schreef waarin hij dreigde zijn vader te vermoorden. Dan getuigt de waanzinnige Ivan dat hij de ware toedracht kent: Smerdjakiv heeft het gedaan. De rechtbank gelooft hem niet. Katja verandert ter plekke van mening en trekt haar steun voor Mitja in.",
        keyMoments: [
          { id: '12-5-a', title: "Katja's brief", description: "Katja toont Mitja's dreigbrief — een wanhoopsdaad van jaloezie en pijn die hem zwaar belast." },
          { id: '12-5-b', title: "Ivans getuigenis", description: "Ivan getuigt dat Smerdjakiv de moordenaar is — maar lijkt waanzinnig, en niemand gelooft hem." },
        ],
        characterIds: ['katja', 'ivan', 'dmitri'],
        themeIds: ['schuld', 'liefde', 'vrijheid'],
      },
      {
        id: '12-6',
        bookNumber: 12,
        chapterNumber: 6,
        title: 'De aanklager spreekt',
        teaser: 'De aanklager Kirillowitsj houdt een uitgebreid psychologisch pleidooi.',
        summary:
          "Aanklager Kirillowitsj houdt een lang pleidooi. Hij analyseert Mitja's psychologie, zijn drijfveren, zijn egoïsme. Hij schildert hem als een product van de Russische onmatigheid en morele verwilderd. Het is briljant maar ook onmenselijk: hij begrijpt Mitja niet, hij beschrijft hem.",
        keyMoments: [
          { id: '12-6-a', title: "Het pleidooi van de aanklager", description: "Kirillowitsj heeft gelijk over de feiten maar mist de ziel — hij ziet een type, geen mens." },
        ],
        characterIds: ['dmitri'],
        themeIds: ['schuld', 'vrijheid', 'russische-ziel'],
      },
      {
        id: '12-7',
        bookNumber: 12,
        chapterNumber: 7,
        title: 'Een historisch overzicht',
        teaser: 'De aanklager plaatst Mitja in de bredere context van de Russische maatschappij.',
        summary:
          "Kirillowitsj continueert zijn pleidooi met een historische analyse: hoe de Russische maatschappij dit soort mensen voortbrengt. Het is een eloquent maar ook arrogant betoog.",
        keyMoments: [
          { id: '12-7-a', title: "Rusland als context", description: "De aanklager maakt Mitja representatief voor de Russische morele crisis — terecht maar ook onrechtvaardig." },
        ],
        characterIds: ['dmitri'],
        themeIds: ['russische-ziel', 'vrijheid', 'schuld'],
      },
      {
        id: '12-8',
        bookNumber: 12,
        chapterNumber: 8,
        title: 'Een behandeling van de zijde van de verdediger',
        teaser: 'Advocaat Fetjokovitsj begint zijn verdediging.',
        summary:
          "De beroemde advocaat Fetjokovitsj begint zijn pleidooi. Hij is even briljant als de aanklager maar van een andere orde: hij gaat de feiten te lijf en toont de gaten in het bewijs. Hij is overtuigend. De sfeer in de rechtszaal kantelt.",
        keyMoments: [
          { id: '12-8-a', title: "Fetjokovitsj opent", description: "De verdediger ontleedt het bewijs met een scherpte die de toehoorders verrast." },
        ],
        characterIds: ['dmitri'],
        themeIds: ['schuld', 'vrijheid'],
      },
      {
        id: '12-9',
        bookNumber: 12,
        chapterNumber: 9,
        title: 'Psychologie aan alle kanten',
        teaser: 'Fetjokovitsj weerlegt de psychologische aannames van de aanklager.',
        summary:
          "Fetjokovitsj daagt de psychologische redenering van de aanklager uit: hij toont dat psychologie beide kanten op kan wijzen. Elk 'bewijs' kan anders worden geïnterpreteerd. De jury luistert geboeid.",
        keyMoments: [
          { id: '12-9-a', title: "Psychologie als tweesnijdend zwaard", description: "Fetjokovitsj demonstreert dat dezelfde feiten tegengestelde conclusies kunnen rechtvaardigen." },
        ],
        characterIds: ['dmitri'],
        themeIds: ['vrijheid', 'schuld'],
      },
      {
        id: '12-10',
        bookNumber: 12,
        chapterNumber: 10,
        title: 'De aanklager vat samen',
        teaser: 'De aanklager reageert op de verdediging.',
        summary:
          "Kirillowitsj reageert op Fetjokovitsj's betoog. Hij herhaalt zijn kernpunten en benadrukt dat Mitja's eigen woorden hem veroordelen. Hij is sterk maar zijn zaak heeft barsten.",
        keyMoments: [
          { id: '12-10-a', title: "De aanklager vecht terug", description: "Kirillowitsj is overtuigend maar de twijfel die de verdediger heeft gezaaid, groeit." },
        ],
        characterIds: ['dmitri'],
        themeIds: ['schuld', 'vrijheid'],
      },
      {
        id: '12-11',
        bookNumber: 12,
        chapterNumber: 11,
        title: 'Er was geen geld. Er was geen roof',
        teaser: 'Fetjokovitsj bewijst dat er geen bewijs is voor de moordmotief.',
        summary:
          "Fetjokovitsj toont aan dat het geld waarvan Mitja beroofd zou hebben altijd van hem was — de drieduizend roebel waren zijn eigen erfenis. Er was dus geen roof, geen motief. Zijn betoog is technisch sterk.",
        keyMoments: [
          { id: '12-11-a', title: "De erfenis als argument", description: "Het geld was rechtmatig Mitja's eigendom — het moordmotief valt weg." },
        ],
        characterIds: ['dmitri'],
        themeIds: ['schuld', 'vrijheid'],
      },
      {
        id: '12-12',
        bookNumber: 12,
        chapterNumber: 12,
        title: 'En er was ook geen moord',
        teaser: 'Fetjokovitsj betoogt dat Mitja zijn vader niet heeft vermoord.',
        summary:
          "Fetjokovitsj bouwt zijn conclusie op: Mitja had geen motief, het bewijs is omstreden, en er is een andere mogelijke dader. Zijn pleidooi eindigt met een appel op de menselijkheid van de jury.",
        keyMoments: [
          { id: '12-12-a', title: "Het appel op menselijkheid", description: "Fetjokovitsj eindigt met een appel op genade — niet als juridisch argument maar als menselijk beroep." },
        ],
        characterIds: ['dmitri'],
        themeIds: ['schuld', 'vrijheid', 'actieve-liefde'],
      },
      {
        id: '12-13',
        bookNumber: 12,
        chapterNumber: 13,
        title: "Een toevallig woordje van een gedachteloze vrouw",
        teaser: 'Een kleine opmerking buiten de rechtszaal heeft grote gevolgen.',
        summary:
          "Een bijkomstige opmerking die tijdens het proces wordt gemaakt verandert de stemming. Dostojevski laat zien hoe kleine, onbedoelde momenten het lot van mensen kunnen bepalen.",
        keyMoments: [
          { id: '12-13-a', title: "Het toevallige woord", description: "Hoe een onbedachte opmerking de weegschaal kan doen omslaan — gerechtigheid is fragiel." },
        ],
        characterIds: ['dmitri'],
        themeIds: ['vrijheid', 'schuld'],
      },
      {
        id: '12-14',
        bookNumber: 12,
        chapterNumber: 14,
        title: 'De moejieks staan niet voor rede vatbaar',
        teaser: 'De jury spreekt schuldig — Mitja wordt veroordeeld.',
        summary:
          "De jury spreekt na korte beraadslaging haar oordeel: schuldig. Mitja wordt veroordeeld tot twintig jaar dwangarbeid in Siberië. Hij is bewogen maar niet gebroken. Groesjka staat te schreeuwen. De stad aanvaardt het vonnis. Dostojevski laat de ironie hangen: een onschuldige veroordeeld, een schuldige vrij.",
        keyMoments: [
          { id: '12-14-a', title: "Het vonnis", description: "Mitja schuldig verklaard — de rechterlijke dwaling van de titel. Gerechtigheid faalt." },
          { id: '12-14-b', title: "Groesjka's wanhoop", description: "Groesjka schreeuwt haar wanhoop in de rechtszaal — haar liefde is wanhopig en echt." },
        ],
        characterIds: ['dmitri', 'groesjka', 'katja', 'aljosha'],
        themeIds: ['schuld', 'vrijheid', 'lijden'],
      },
    ],
  },
  {
    id: 13,
    partNumber: 4,
    partTitle: 'Epiloog',
    title: 'Epiloog',
    intro:
      'De naweeën van het proces. Plannen worden gesmeed, afscheid genomen, en bij het graf van Iljoesjka spreekt Aljosha zijn jonge vrienden toe over liefde en herinnering.',
    chapters: [
      {
        id: '13-1',
        bookNumber: 13,
        chapterNumber: 1,
        title: 'Plannen om Mitja te redden',
        teaser: 'Aljosha, Katja en Ivan bespreken hoe Mitja kan ontsnappen.',
        summary:
          "Aljosha, Katja en Ivan bespreken plannen om Mitja te laten ontsnappen naar Amerika voor zijn deportatie naar Siberië begint. Ivan is ziek maar bereid te helpen. Katja heeft al geld geregeld. Mitja twijfelt of hij moet vluchten of zijn straf moet ondergaan.",
        keyMoments: [
          { id: '13-1-a', title: "Vluchten of blijven?", description: "Mitja's morele dilemma: vluchten is praktisch maar vernietigt zijn loutering — blijven is eerlijk maar vernietigt zijn leven." },
        ],
        characterIds: ['aljosha', 'katja', 'ivan', 'dmitri'],
        themeIds: ['vrijheid', 'schuld', 'liefde'],
      },
      {
        id: '13-2',
        bookNumber: 13,
        chapterNumber: 2,
        title: 'Een ogenblik de leugen laten leven',
        teaser: 'Katja en Mitja spreken elkaar voor de laatste keer.',
        summary:
          "Katja bezoekt Mitja in de gevangenis. Ze vergeven elkaar wederzijds en erkennen wat er was en wat er nooit kon zijn. Het is een afscheid dat tegelijk definitief en bevrijdend is. Groesjka weet van het bezoek en aanvaardt het.",
        keyMoments: [
          { id: '13-2-a', title: "Het wederzijdse vergeven", description: "Katja en Mitja vergeven elkaar — een van de meest ontroerende scènes van de roman." },
        ],
        characterIds: ['dmitri', 'katja', 'groesjka'],
        themeIds: ['liefde', 'schuld', 'vrijheid'],
      },
      {
        id: '13-3',
        bookNumber: 13,
        chapterNumber: 3,
        title: "De begrafenis van Iljoesjka. De toespraak bij de steen",
        teaser: 'Iljoesjka wordt begraven en Aljosha spreekt de jongens toe bij de steen.',
        summary:
          "Iljoesjka is gestorven en wordt begraven. Bij de gedenksteen spreekt Aljosha de jongens toe — zijn laatste woorden in de roman. Hij zegt: jullie zullen ooit misschien slechte dingen doen, maar onthoud dit moment. Onthoud dit kind. Onthoud de liefde die hier was. De herinnering aan het goede is het sterkste wapen tegen het kwaad. De jongens scanderen zijn naam.",
        keyMoments: [
          { id: '13-3-a', title: "Aljosha's toespraak", description: "De slotwoorden van de roman: een pleidooi voor herinnering, liefde en hoop — tegen alle wanhoop in." },
          { id: '13-3-b', title: "Hoera voor Karamazov!", description: "De jongens scanderen Aljosha's naam — het laatste beeld van de roman: jeugd, liefde en de toekomst." },
        ],
        characterIds: ['aljosha', 'kolja', 'iljoesjka', 'snegirjov'],
        themeIds: ['actieve-liefde', 'lijden', 'geloof', 'vrijheid'],
      },
    ],
  },
];
