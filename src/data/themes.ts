export interface Theme {
  id: string;
  title: string;
  icon: string;
  shortDescription: string;
  essay: string;
  relatedThemes: string[];
  appearsInBooks: number[];
}

export const themes: Theme[] = [
  {
    id: 'geloof',
    title: 'Geloof en twijfel',
    icon: '✝️',
    shortDescription: 'De strijd tussen geloof en ongeloof als levenservaring, niet als intellectuele positie.',
    essay:
      'In De Broers Karamazov is geloof geen doctrine maar een levenshouding. Dostojevski plaatst zijn personages op een spectrum van geloof: Zosima belichaamt het gelovige leven in zijn diepste vorm, Ivan de intelligente ongelovige, Aljosha de zoekende ziel, Madame Khokhlakova het wankele enthousiasme. Wat de roman steeds benadrukt is dat geloof niet door redeneringen kan worden verworven of weerlegd — het groeit uit leven, liefde en handelen. Zosima\'s antwoord op Madame Khokhlakova\'s twijfel is programmatisch: ga actief liefhebben, en het geloof zal volgen. Dostojevski presenteert hier geen makkelijk antwoord op Ivans rationele bezwaren, maar een andere weg: die van de ervaring.',
    relatedThemes: ['twijfel', 'actieve-liefde', 'opstandigheid', 'grootinquisiteur'],
    appearsInBooks: [1, 2, 4, 5, 6, 7, 10],
  },
  {
    id: 'twijfel',
    title: 'De aanvechting van het ongeloof',
    icon: '🌑',
    shortDescription: 'Twijfel niet als tegenpool van geloof, maar als integraal onderdeel van de geloofservaring.',
    essay:
      'Dostojevski was zelf een man van diepe twijfel — en dat maakt zijn roman zo overtuigend. Ivan Karamazov is niet zomaar een atheïst: hij is een eerlijk denker die de inconsistenties van de wereld niet kan verzoenen met het idee van een rechtvaardige God. Zijn twijfel is pijnlijk en intellectueel eerlijk. Maar Dostojevski toont ook de gevolgen: Ivans twijfel corrodeert hem van binnenuit en maakt hem medeplichtig aan een misdaad. Tegelijkertijd is Aljosha\'s geloofskrisis na Zosima\'s dood geen zwakte maar een diepte — hij twijfelt én hij gelooft, en juist dit maakt zijn geloof echt. Dostojevski suggereert dat de twijfelaar en de gelovige niet zo ver van elkaar afstaan als ze denken.',
    relatedThemes: ['geloof', 'opstandigheid', 'vrijheid'],
    appearsInBooks: [2, 5, 7, 11],
  },
  {
    id: 'grootinquisiteur',
    title: 'De Grootinquisiteur',
    icon: '⚖️',
    shortDescription: 'Het meest beroemde hoofdstuk: Christus keert terug en wordt gevangengezet door de kerkleider die zegt te weten wat de mensheid echt nodig heeft.',
    essay:
      'Het gedicht van de Grootinquisiteur (Boek 5, hoofdstuk 5) is een van de filosofisch rijkste teksten in de wereldliteratuur. Ivans Inquisiteur betoogt dat Christus de mensheid heeft onderschat door haar vrijheid te geven — wat de mens werkelijk nodig heeft is zekerheid, wonder en gezag. De Inquisiteur heeft dit door, en handelt ernaar: hij geeft de mensen brood en orde ten koste van hun vrijheid. Christus antwoordt niet — hij kust de Inquisiteur. Dit is Dostojevski\'s radicale antwoord: de liefde is sterker dan elk argument. Het hoofdstuk is ook een diagnose van totalitarisme avant la lettre: de Inquisiteur is degene die zegt te weten wat het beste is voor iedereen, en daarvoor de individuele ziel offert.',
    relatedThemes: ['vrijheid', 'geloof', 'opstandigheid'],
    appearsInBooks: [5],
  },
  {
    id: 'vader-zonen',
    title: 'Vaders en zonen',
    icon: '👨‍👦',
    shortDescription: 'De rampzalige vaderloosheid van de Karamazovs en de bredere crisis van vaderlijk gezag in de Russische samenleving.',
    essay:
      'De vader-zoonrelatie is het structurele hart van de roman. Fjodor Karamazov is een vader die zijn zonen heeft verlaten, gebruikt en verwaarloosd — en elke zoon reageert anders. Mitja vecht met zijn vader als rivaal. Ivan distantieert zich intellectueel. Aljosha vervangt zijn biologische vader door een geestelijke vader: Zosima. Smerdjakiv, de onerkende zoon, wordt het instrument van de uiteindelijke catastrophe. Dostojevski schrijft de roman in het licht van een bredere crisis: de traditionele vaderfiguur — patriarch, tsaar, God — wordt in het moderne Rusland van de negentiende eeuw betwist. De vraag is: door wie kan hij worden vervangen?',
    relatedThemes: ['vrijheid', 'schuld', 'russische-ziel'],
    appearsInBooks: [1, 2, 3, 4, 8, 9, 11],
  },
  {
    id: 'vrijheid',
    title: 'Vrijheid en verantwoordelijkheid',
    icon: '🔓',
    shortDescription: 'Echte vrijheid is niet de afwezigheid van beperking, maar de aanvaarding van volledige verantwoordelijkheid voor je keuzes.',
    essay:
      'De Broers Karamazov is een roman over wat het betekent vrij te zijn. De Grootinquisiteur meent dat mensen vrijheid niet aankunnen — en kiest voor orde. Ivan kiest voor intellectuele vrijheid maar draagt de consequenties niet. Smerdjakiv neemt Ivans ideeën letterlijk en handelt ernaar, maar heeft geen geweten. Mitja is vrij in zijn passies en moet daarvoor betalen. Alleen Aljosha en Zosima tonen een vrijheid die ook verantwoordelijkheid omvat: ze kiezen bewust voor de ander, en dragen daarvoor de lasten. Dostojevski\'s boodschap is scherp: vrijheid zonder verantwoordelijkheid is nihilisme; vrijheid met verantwoordelijkheid is liefde.',
    relatedThemes: ['schuld', 'grootinquisiteur', 'actieve-liefde'],
    appearsInBooks: [3, 5, 6, 9, 11, 12],
  },
  {
    id: 'lijden',
    title: 'Het lijden van onschuldigen',
    icon: '💧',
    shortDescription: 'Het onverklaarbare lijden van kinderen als het meest schrijnende argument tegen Gods rechtvaardigheid.',
    essay:
      'Ivans opstandigheid in Boek 5 wordt niet geboren uit koude redenering maar uit concrete verhalen: gemartelde kinderen, misbruikte meisjes, ouders die hun kind straffen. Ivan verzamelt deze verhalen met een pijnlijke nauwkeurigheid. Hij vraagt: hoe kan Gods almacht deze dingen toestaan? Zijn conclusie is niet dat God niet bestaat maar dat hij de wereld die God heeft gemaakt niet accepteert. Dostojevski geeft Ivans argument geen rationeel antwoord — hij geeft er het leven van Zosima en Aljosha tegenover. Iljoesjka\'s verhaal in Deel IV is de concrete uitwerking: een onschuldig kind lijdt en sterft, maar zijn dood verbindt de jongens voor altijd en zaait iets goeds.',
    relatedThemes: ['opstandigheid', 'geloof', 'actieve-liefde'],
    appearsInBooks: [4, 5, 7, 10],
  },
  {
    id: 'actieve-liefde',
    title: 'Actieve liefde vs. abstracte liefde',
    icon: '❤️',
    shortDescription: 'Zosima\'s centrale onderscheid: liefde voor de concrete mens tegenover liefde voor een abstracte mensheid.',
    essay:
      'Zosima legt aan Madame Khokhlakova het cruciale onderscheid uit: abstracte liefde voor de mensheid — voor een idee van de mens — is gemakkelijk en maakt niets uit. Actieve liefde — de concrete persoon naast je liefhebben, ook als hij moeilijk is, ook als hij stinkt of vervelend doet — dat is de enige echte liefde. Dostojevski zag dit als de kern van het christendom en als antwoord op het socialisme en liberalisme van zijn tijd, die spraken van liefde voor de mensheid maar weinig konden met de individuele ziel. Aljosha belichaamt deze actieve liefde: hij reist van de een naar de ander, hij luistert, hij geeft, hij is aanwezig. Hij redt niemand spectaculair maar hij is er.',
    relatedThemes: ['geloof', 'vrijheid', 'lijden'],
    appearsInBooks: [2, 4, 6, 7, 10],
  },
  {
    id: 'schuld',
    title: 'Schuld en boetedoening',
    icon: '⛓️',
    shortDescription: 'Iedereen draagt schuld, ook voor andermans daden — maar schuld erkennen en dragen is de weg naar bevrijding.',
    essay:
      'Schuld in De Broers Karamazov is zelden eenduidig. Mitja is schuldig aan veel maar niet aan de moord. Ivan is schuldig door zijn passiviteit en zijn filosofie. Smerdjakiv is de feitelijke dader maar is hij werkelijk verantwoordelijk? Dostojevski suggereert dat schuld niet alleen individueel is maar ook collectief: "Ieder is voor allen verantwoordelijk", zegt Zosima. Dit is geen vage mystiek maar een concrete ethiek: Mitja accepteert zijn onterechte straf als boetedoening voor zijn echte zonden. Dit is de paradox van Dostojevski\'s moraal: het erkennen en dragen van schuld — zelfs onterecht toegewezen schuld — is bevrijdend. Ontkenning en vlucht leiden tot vernietiging (zoals Ivan laat zien).',
    relatedThemes: ['vrijheid', 'lijden', 'actieve-liefde'],
    appearsInBooks: [3, 5, 8, 9, 11, 12],
  },
  {
    id: 'opstandigheid',
    title: 'Opstandigheid tegen God',
    icon: '⚡',
    shortDescription: 'Ivan Karamazovs weigering om de wereld te accepteren zoals die is — een eerlijk, pijnlijk en destructief protest.',
    essay:
      'Ivans "opstandigheid" (bunt) is een van de meest memorabele posities in de wereldliteratuur. Hij accepteert God — theoretisch — maar hij geeft het "ticket" terug: de toetreding tot een harmonie die gebouwd is op het lijden van onschuldige kinderen. Zijn argument is niet cynisch maar wanhopig eerlijk. Dostojevski respecteerde dit standpunt en heeft het het krachtigste dat hij kon meegekregen. Zijn eigen antwoord — via Zosima en Aljosha — is niet een weerlegging maar een alternatief: opstandigheid is begrijpelijk maar corroderend. Wie opstandig blijft, vernietigt uiteindelijk zichzelf (Ivan) of anderen (via Smerdjakiv).',
    relatedThemes: ['geloof', 'lijden', 'vrijheid', 'grootinquisiteur'],
    appearsInBooks: [5, 11],
  },
  {
    id: 'duivel',
    title: 'De duivel als idee',
    icon: '🌘',
    shortDescription: 'Het kwaad verschijnt in de roman niet als bovennatuurlijke kracht maar als de uitvergroting van menselijke zwakheden en leugentjes.',
    essay:
      'Dostojevski\'s duivel in Boek 11 is een van de meest originele in de literatuur: geen griezelfiguur maar een banale, verveelde heer die Ivans eigen meest beschamende gedachten uitspreekt. Hij is de personificatie van Ivans scepticisme, zijn ijdelheid en zijn angst. Smerdjakiv is een andere verschijningsvorm van het diabolische: koud, berekend, nihilistisch — de duivel als intellectueel project zonder warmte. Dostojevski toont zo dat het kwaad niet spectaculair is maar gewoon: het leeft in de gedachten die we het liefst niet zouden denken, in de keuzes die we maken als niemand kijkt.',
    relatedThemes: ['vrijheid', 'schuld', 'opstandigheid'],
    appearsInBooks: [3, 5, 11],
  },
  {
    id: 'russische-ziel',
    title: 'De Russische ziel',
    icon: '🌾',
    shortDescription: 'Dostojevski\'s portret van de Russische karakter: breed, tegenstrijdig, onmatig — met een vermogen tot zowel heiligheid als geweld.',
    essay:
      'De Broers Karamazov is ook een roman over Rusland. Dostojevski schildert zijn land zonder idealisering maar met diep mededogen: de onmatigheid van Mitja, de koude intelligentie van Ivan, de stille vroomheid van Aljosha — dit zijn allemaal facetten van wat hij de "Russische ziel" noemde. Het klooster met zijn startsj naast het stadsje met zijn dronkenlappen, de rechtbank met zijn gestileerde pleidooien naast de eenvoudige boeren die niet voor rede vatbaar zijn — Dostojevski omvat dit alles. Zijn vraag was: wat is de weg voor Rusland? Zijn antwoord: niet de westerse rede (Ivan) en niet de Oosterse passiviteit, maar de actieve christelijke liefde (Aljosha) gekoppeld aan de rijkdom van de eigen traditie (Zosima).',
    relatedThemes: ['vader-zonen', 'vrijheid', 'actieve-liefde'],
    appearsInBooks: [1, 6, 12],
  },
  {
    id: 'liefde',
    title: 'Liefde in al haar vormen',
    icon: '🌹',
    shortDescription: 'Van destructieve passie tot zelfopofferende toewijding — de roman toont liefde als de meest complexe menselijke kracht.',
    essay:
      'De roman kent meerdere liefdesrelaties en alle zijn ze complex. Mitja en Groesjka beginnen als hartstocht en groeien naar werkelijke verbondenheid. Katja en Mitja zijn verstrengeld in trots en plichtsbesef. Ivan en Katja houden van elkaar maar kunnen het niet zeggen. Aljosha en Lise hebben een broze, tere aantrekking. Fjodor "houdt" van vrouwen op een manier die eigenlijk gaat over bezitten. Dostojevski toont: liefde kan bevrijden maar ook verslaven, zuiveren maar ook vernielen. De vraag is niet of je liefhebt, maar hoe — en of je de ander daadwerkelijk ziet.',
    relatedThemes: ['actieve-liefde', 'vrijheid', 'schuld'],
    appearsInBooks: [3, 4, 5, 8, 9, 13],
  },
];
