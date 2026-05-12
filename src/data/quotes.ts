export interface Quote {
  id: string;
  chapterId: string;
  speaker: string;
  original: string;   // English (Garnett)
  dutch: string;      // Dutch translation
  context: string;    // 1-sentence context
}

export const quotes: Quote[] = [
  {
    id: 'beauty-terrible',
    chapterId: '3-3',
    speaker: 'Dmitri Karamazov',
    original:
      'The awful thing is that beauty is mysterious as well as terrible. God and the devil are fighting there and the battlefield is the heart of man.',
    dutch:
      'Het vreselijke is dat schoonheid zowel mysterieus als verschrikkelijk is. God en de duivel vechten daar, en het slagveld is het hart van de mens.',
    context: 'Mitja bekent aan Aljosha zijn innerlijke strijd tussen het verhevene en het zinnelijke.',
  },
  {
    id: 'ticket-return',
    chapterId: '5-4',
    speaker: 'Ivan Karamazov',
    original:
      "It's not God that I don't accept, Alyosha, only I most respectfully return Him the ticket.",
    dutch:
      'Het is niet God die ik niet accepteer, Aljosha, ik geef Hem alleen heel respectvol het ticket terug.',
    context:
      "Ivan's centrale conclusie na zijn verhalen over lijdende kinderen: hij weigert de universele harmonie te aanvaarden.",
  },
  {
    id: 'bread-alone',
    chapterId: '5-5',
    speaker: 'De Grootinquisiteur',
    original:
      "For the secret of man's being is not only to live but to have something to live for. Without a stable conception of the object of life, man would not consent to go on living, and would rather destroy himself than remain on earth, though he had bread in abundance.",
    dutch:
      'Want het geheim van het menselijk bestaan is niet alleen te leven, maar te weten waarvoor men leeft. Zonder een vast idee over het doel van het leven zou de mens er niet mee instemmen te leven en zou hij de voorkeur geven aan de dood boven het leven op aarde, ook al had hij brood in overvloed.',
    context:
      'De Grootinquisiteur legt Christus uit waarom vrijheid alleen niet voldoende is voor de mensheid.',
  },
  {
    id: 'inquisitor-kiss',
    chapterId: '5-5',
    speaker: 'Ivan Karamazov (verteller)',
    original:
      "The old man shuddered. His lips moved. He went to the door, opened it, and said to Him: 'Go, and come no more ... come not at all, never, never!' And he let Him out into the dark alleys of the town. The Prisoner went away.",
    dutch:
      "De oude man huiverde. Zijn lippen bewogen. Hij liep naar de deur, opende hem en zei tegen Hem: 'Ga heen, en kom niet meer terug... kom helemaal niet terug, nooit, nooit!' En hij liet Hem gaan in de donkere stegen van de stad. De Gevangene ging.",
    context:
      "Het einde van het gedicht: Christus kust de Inquisiteur en wordt vrijgelaten. De kus gloeit in het hart van de oude man, maar hij houdt vast aan zijn idee.",
  },
  {
    id: 'love-in-action',
    chapterId: '6-2',
    speaker: 'Ouderling Zosima',
    original:
      'Love in action is a harsh and dreadful thing compared with love in dreams. Love in dreams is greedy for immediate action, rapidly performed and in the sight of all.',
    dutch:
      'Actieve liefde is een harde en vreselijke zaak vergeleken met de liefde in dromen. De liefde in dromen is gretig naar onmiddellijk handelen, snel volbracht en in het zicht van allen.',
    context:
      "Zosima's antwoord aan Madame Khokhlakova, die twijfelt aan haar vermogen tot echte liefde.",
  },
  {
    id: 'responsible-for-all',
    chapterId: '6-3',
    speaker: 'Ouderling Zosima',
    original:
      'Every one of us is undoubtedly responsible for all men and everything on earth, not merely through the general sinfulness of creation, but each one personally for all mankind and every individual man.',
    dutch:
      'Ieder van ons is ongetwijfeld verantwoordelijk voor alle mensen en voor alles op aarde — niet alleen door de algemene zondigheid van de schepping, maar ieder persoonlijk voor de gehele mensheid en voor ieder afzonderlijk mens.',
    context:
      "De kern van Zosima's ethiek: verantwoordelijkheid is niet individueel maar universeel en wederzijds.",
  },
  {
    id: 'kiss-the-earth',
    chapterId: '6-3',
    speaker: 'Ouderling Zosima',
    original:
      'Kiss the earth and love it with an unceasing, consuming love. Love all men, love everything. Seek that rapture and ecstasy.',
    dutch:
      'Kus de aarde en bemin haar met een onophoudelijke, vertererende liefde. Bemin alle mensen, bemin alles. Zoek die verrukking en extase.',
    context:
      "Zosima's oproep tot concrete, lichamelijke liefde voor de wereld — het tegengewicht van Ivans abstracte filosofie.",
  },
  {
    id: 'alyosha-earth',
    chapterId: '7-4',
    speaker: 'Verteller',
    original:
      'Alyosha stood, gazed, and suddenly threw himself down on the earth. He did not know why he embraced it. He could not have told why he longed so irresistibly to kiss it, to kiss it all. But he kissed it weeping, sobbing and watering it with his tears, and vowed passionately to love it, to love it for ever and ever.',
    dutch:
      'Aljosha stond en staarde, en wierp zich plotseling neer op de aarde. Hij wist niet waarom hij haar omhelsde. Hij had niet kunnen zeggen waarom hij zo onweerstaanbaar verlangde haar te kussen, haar helemaal te kussen. Maar hij kuste haar wenend, snikend en besproeide haar met zijn tranen, en beloofde hartstochtelijk haar lief te hebben, haar voor eeuwig en altijd lief te hebben.',
    context:
      "Aljosha's mystieke ommekeer na Zosima's dood — zijn geloofskrisis mondt uit in een nieuwe, diepere verbondenheid met het leven.",
  },
];
