export interface Place {
  id: string;
  name: string;
  description: string;
  significance: string;
  appearsInBooks: number[];
  tags: string[];
}

export const places: Place[] = [
  {
    id: 'skotoprigonevsk',
    name: 'Skotoprigonevsk',
    description:
      'De fictieve provinciestad waarin de gehele roman zich afspeelt. De naam klinkt in het Russisch als "stad van het vee" of "beestachtige stad" — een ironische aanduiding van de morele toestand van haar inwoners. De stad is gebaseerd op Staraja Roessa, een kleine stad in het noordwesten van Rusland waar Dostojevski een tijdlang woonde.',
    significance:
      'De stad is bewust generiek gehouden: het had overal in Rusland kunnen zijn. Dostojevski schildert haar als de microkosmos van zijn land — met haar klooster, haar rechtbank, haar adelstand en haar armoede.',
    appearsInBooks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    tags: ['provinciestad', 'hoofdlocatie', 'fictief', 'Rusland'],
  },
  {
    id: 'klooster',
    name: 'Het klooster',
    description:
      'Een Russisch-orthodox klooster aan de rand van de stad, met zijn eigen kathedraal, cellen en tuin. Hier woont ouderling Zosima, hier leeft Aljosha als novice, en hier vinden de eerste cruciale bijeenkomsten van de roman plaats. Het klooster wordt omringd door pelgrims en gelovigen die de ouderling komen bezoeken.',
    significance:
      'Het klooster staat symbool voor de spirituele dimensie van de roman — niet als een vluchthaven van de wereld, maar als een plek waar de diepste vragen van het bestaan eerlijk worden gesteld en geleefd. Zosima\'s aanwezigheid hier geeft het klooster een warmte die verschilt van religieus formalisme.',
    appearsInBooks: [2, 6, 7],
    tags: ['klooster', 'religie', 'Zosima', 'Aljosha', 'spiritueel'],
  },
  {
    id: 'huis-fjodor',
    name: 'Het huis van Fjodor Karamazov',
    description:
      'Een groot, oud herenhuis aan de rand van de stad. Het huis is degelijk gebouwd maar verwaarloosd, het weerspiegelt zijn bewoner: potentieel aanwezig, maar moreel verloederd. De tuin heeft een keldertje en een keukentuin. In het huis werken Grigorij, Marfa en Smerdjakiv.',
    significance:
      'Het huis is het middelpunt van de familiedrama. Het is de plek waar Fjodors relatie met zijn zonen op de spits wordt gedreven, waar zijn rivaliteit met Mitja om Groesjka zich afspeelt, en waar uiteindelijk de centrale misdaad van de roman plaatsvindt.',
    appearsInBooks: [1, 3, 8, 9, 11],
    tags: ['herenhuis', 'Fjodor', 'misdaad', 'familie'],
  },
  {
    id: 'mokroje',
    name: 'Mokroje',
    description:
      'Een klein dorp op enkele uren rijden van de stad. In dit dorp heeft Mitja in het verleden een wilde nacht doorgebracht met Groesjka en een groep zigeuners. Mokroje speelt een centrale rol in het dramatische hoogtepunt van het verhaal.',
    significance:
      'Mokroje is de plek van uitersten: van uitbundig feestgedruis en van diep persoonlijk verdriet. De nacht die Mitja hier doorbrengt is tegelijk een hoogtepunt van zijn liefde voor Groesjka en het begin van zijn val.',
    appearsInBooks: [8, 9],
    tags: ['dorp', 'feest', 'nacht', 'Mitja', 'Groesjka'],
  },
  {
    id: 'huis-groesjka',
    name: 'Het huis van Groesjka',
    description:
      'Een netjes onderhouden huis in de stad, eigendom van de handelaar Samsonov (haar vroegere beschermheer). Groesjka woont hier zelfstandig en beheert haar eigen financiën. Het huis reflecteert haar positie: niet arm, niet afhankelijk, maar ook niet volledig vrij van haar verleden.',
    significance:
      'Dit huis is het toneel van Mitja\'s wanhopige nachtbezoeken en van enkele cruciale ontmoetingen. Het vertegenwoordigt Groesjka\'s eigen ruimte — haar autonomie in een wereld die weinig ruimte biedt aan vrouwen zonder familie.',
    appearsInBooks: [3, 8],
    tags: ['huis', 'Groesjka', 'zelfstandigheid'],
  },
  {
    id: 'huis-khokhlakova',
    name: 'Het huis van Madame Khokhlakova',
    description:
      'Een herenhuis in de stad, het domein van de welgestelde weduwe Madame Khokhlakova en haar dochter Lise. Het huis is ingericht met de laatste mode, en er worden geregeld bezoeken ontvangen. Het heeft ook een kleine salon waar veel gesprekken plaatsvinden.',
    significance:
      'In dit huis spelen zich enkele van de meest intieme gesprekken af — tussen Aljosha en Lise, maar ook cruciale scènes rond Katja. Het is ook de plek waar enkele van de roman\'s komische momenten plaatsvinden, met Madame Khokhlakova in de hoofdrol.',
    appearsInBooks: [4, 10, 11],
    tags: ['herenhuis', 'Khokhlakova', 'Lise', 'gesprekken'],
  },
  {
    id: 'rechtbank',
    name: 'De rechtbank',
    description:
      'De lokale rechtszaal waar het proces plaatsvindt. Dostojevski beschrijft de rechtbank met precisie: de indeling, het publiek (inclusief dames die voor de gelegenheid zijn gekomen), de rechter, de openbare aanklager Kirillowitsj en de verdediger Fetjokovitsj.',
    significance:
      'Het rechtbankgedeelte (Boek 12) is een van de meest gedetailleerde rechtsromanscènes in de wereldliteratuur. Het is niet alleen een beschrijving van een proces, maar een filosofisch debat over schuld, bewijs en de aard van menselijkheid.',
    appearsInBooks: [12],
    tags: ['rechtbank', 'proces', 'schuld', 'gerechtigheid'],
  },
  {
    id: 'keldertje-fjodor',
    name: 'De keukentuin en het keldertje',
    description:
      'De achterkant van het huis van Fjodor: een ommuurd stuk tuin met een kleine kelder en een open raam dat toegang geeft tot de studeer-/slaapkamer van Fjodor. Een onopvallende plek — maar een centrale locatie in het mysterie van de misdaad.',
    significance:
      'Wie kende het signaal? Wie was er in de tuin? De keukentuin met het fameuze raam is het epicentrum van de forensische en juridische discussies in de roman.',
    appearsInBooks: [8, 9, 12],
    tags: ['tuin', 'raam', 'misdaad', 'bewijs'],
  },
  {
    id: 'kamer-ivan',
    name: 'De kamer van Ivan (uitspanning)',
    description:
      'Ivan logeerde in de loop van de roman in een uitspanning in de stad. Zijn kamer is de plek van zijn meest donkere uren — zijn worstelingen met schuld en zijn visioenen.',
    significance:
      'Ivans kamer staat symbool voor zijn innerlijke opsluiting. De bezoeken die hij hier ontvangt (of denkt te ontvangen) zijn dramatisch hoogtepunt en psychologisch cruciaal.',
    appearsInBooks: [11],
    tags: ['kamer', 'Ivan', 'psychologisch', 'visioen'],
  },
];
