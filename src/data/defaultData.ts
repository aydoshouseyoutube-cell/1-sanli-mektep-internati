import { SchoolData } from '../types/school';
import { DEFAULT_SCHOOL_PHOTO, DEFAULT_DIRECTOR_PHOTO, DEFAULT_TEACHER_PHOTO, DEFAULT_NEWS_PHOTO } from './defaultAssets';

export const initialSchoolData: SchoolData = {
  schoolName: '1-sanlı Qánigelestirilgen mektep-internatı',
  fullSchoolName: 'Nókis qalası 1-sanlı Qánigelestirilgen mektep-internatı',
  heroTitle: '1-sanlı Qánigelestirilgen mektep-internatı',
  heroSubtitle: 'Bilim, tárbiya hám keleshekke jol',
  welcomeTitle: 'Xosh kelipsiz!',
  welcomeText: '1-sanlı Qánigelestirilgen mektep-internatı — bilimge, izleniwge hám joqarı nátiyjelerge umtılatuǵın jaslardı tárbiyalaw hám sapalı bilim beriwge baǵdarlanǵan bilimlendiriw mekemesi.',
  schoolPhotoUrl: DEFAULT_SCHOOL_PHOTO,
  
  stats: [
    {
      id: 'stat-1',
      value: '500+',
      label: 'Oqıwshı'
    },
    {
      id: 'stat-2',
      value: 'XX+',
      label: 'Ustaz'
    },
    {
      id: 'stat-3',
      value: 'XX+',
      label: 'Jıllıq tájiriybe'
    },
    {
      id: 'stat-4',
      value: 'XX+',
      label: 'Jetiskenlik'
    }
  ],

  about: {
    history: 'Nókis qalası 1-sanlı Qánigelestirilgen mektep-internatı Qaraqalpaqstan Respublikasındaǵı aldıńǵı qánigelestirilgen oqıw orınlarınıń biri esaplanadı. Dáslepki ashılǵan kúninen baslap búgingi kúnge shekem mektep jámááti júzlegen qábiletli oqıwshılardı tárbiyalap, el rawajlanıwına múnásip úles qosıp kelmekte. [Mektep tariyxı boyınsha tolıq maǵlıwmat basqarıw panelinen tolıqtırıladı].',
    purpose: 'Mektebimizdiń tiykarǵı maqseti — tereńlestirilgen pánler boyınsha zamanagóy bilim beriw, keleshek talaplarına juwap bere alatuǵın, intellektual salawatı joqarı, watansúyish hám kásiplik kónlikpelerge iye qánigelerdi qáliplestiriw.',
    tasks: [
      'Anıq hám tábiyiy pánler boyınsha tereńlestirilgen bilim beriwdi shólkemlestiriw',
      'Oqıwshılarda dóretiwshilik, intellektual hám logikalıq pikirlew qábiletlerin rawajlandırıw',
      'Zamanagóy informaciyalıq texnologiyalar hám shet tillerin puxta ózlestiriwge sharayat jaratıw',
      'Pán olimpiadaları, tańlawlar hám ilimiy joybarlarda joqarı nátiyjelerge erisiw',
      'Jas áwladtı milliy hám ulıwma insanıylıq qádiriyatlar ruwxında tárbiyalaw'
    ],
    achievementsSummary: 'Mektep oqıwshıları hám ustazları xalıqaralıq, respublikalıq hám qaraqalpaqstan kólemindegi pán olimpiadalarında, sport jarıslarında hám dóretiwshilik báykewlerde turaqlı túrde sıylı orınlardı iyelep kelmekte.'
  },

  director: {
    name: '[Direktor atı hám familiyası]',
    position: 'Mektep-internatı direktorı',
    photoUrl: DEFAULT_DIRECTOR_PHOTO,
    welcomeHeading: 'Direktorımızdıń sálemi',
    message: 'Áziz oqıwshılar, húrmetli ata-analar hám qádirli miymanlar! Mektep-internatımızdıń rásmiy veb-saytına xosh kelipsiz. Biz hár bir oqıwshınıń intellektual rawajlanıwı, qábiletin tolıq kórsete alıwı hám keleshekte úlken jetiskenliklerge erisiwi ushın barlıq imkaniyatlardı jaratpaqtamız. Bilim — gúlleniwdiń tiykarı bolıp, biz oqıwshılarımızdıń hár qanday jetiskenligi menen maqtanısh etemiz.'
  },

  teachers: [
    {
      id: 'teacher-1',
      name: '[Ustaz atı hám familiyası 1]',
      subject: 'Matematika',
      position: 'Joqarı kategoriyalı matematika páni muǵallimi',
      photoUrl: DEFAULT_TEACHER_PHOTO,
      education: 'Joqarı maǵlıwmatlı'
    },
    {
      id: 'teacher-2',
      name: '[Ustaz atı hám familiyası 2]',
      subject: 'Fizika',
      position: 'Fizika páni jetekshi muǵallimi',
      photoUrl: DEFAULT_TEACHER_PHOTO,
      education: 'Joqarı maǵlıwmatlı'
    },
    {
      id: 'teacher-3',
      name: '[Ustaz atı hám familiyası 3]',
      subject: 'Qaraqalpaq tili hám ádebiyatı',
      position: 'Qaraqalpaq tili páni muǵallimi',
      photoUrl: DEFAULT_TEACHER_PHOTO,
      education: 'Joqarı maǵlıwmatlı'
    },
    {
      id: 'teacher-4',
      name: '[Ustaz atı hám familiyası 4]',
      subject: 'Ximiya hám Biologiya',
      position: 'Tábiyiy pánler kafedrası baslıǵı',
      photoUrl: DEFAULT_TEACHER_PHOTO,
      education: 'Joqarı maǵlıwmatlı'
    },
    {
      id: 'teacher-5',
      name: '[Ustaz atı hám familiyası 5]',
      subject: 'Ingliz tili',
      position: 'Shet tili páni joqarı kategoriyalı ustazı',
      photoUrl: DEFAULT_TEACHER_PHOTO,
      education: 'Joqarı maǵlıwmatlı'
    },
    {
      id: 'teacher-6',
      name: '[Ustaz atı hám familiyası 6]',
      subject: 'Informatika hám IT',
      position: 'Informatika páni qánigesi',
      photoUrl: DEFAULT_TEACHER_PHOTO,
      education: 'Joqarı maǵlıwmatlı'
    }
  ],

  news: [
    {
      id: 'news-1',
      title: 'Pán olimpiadasınıń qala basqıshında mektep oqıwshıları jeńimpaz boldı',
      date: '2026-03-24',
      summary: '1-sanlı Qánigelestirilgen mektep-internatı oqıwshıları matematika, fizika hám ximiya pánleri boyınsha ótkerilgen Nókis qalalıq olimpiadada joqarı orınlardı qolǵa kirgizdi.',
      content: 'Nókis qalasındaǵı qánigelestirilgen mektepler arasında ótkerilgen pán olimpiadasınıń qala basqıshında 1-sanlı mektep-internatınıń talantlı jasları belsendi qatnastı. Matematika, fizika hám biologiya pánlerinen oqıwshılarımız 1-hám 2-dárejeli diplomlar menen sıylıqlandı. Jeńimpaz oqıwshılardı hám olardı tayarlaǵan tájiriybeli ustazlardı qutlıqlaymız!',
      photoUrl: DEFAULT_NEWS_PHOTO,
      author: 'Mektep baspasóz xızmeti'
    },
    {
      id: 'news-2',
      title: 'Zamanagóy IT hám robototexnika dógereginiń ashılıw máresimi bolıp ótti',
      date: '2026-03-18',
      summary: 'Oqıwshılardıń texnologiyalıq bilimlerin arttırıw maqsetinde mektebimizde jańa úskeneler menen támiyinlengen dógerek is basladı.',
      content: 'Jaslardıń informaciyalıq-kommunikaciyalıq texnologiyalarǵa qızıǵıwshılıǵın qollap-quwatlaw maqsetinde mektep-internatında zamanagóy kompyuterler hám robototexnika jıynaǵı menen úskenelengen arnawlı oqıw xanası paydalanıwǵa tapsırıldı. Dógerekte oqıwshılar programmalastırıw hám modellew tiykarların úyrenedi.',
      photoUrl: DEFAULT_NEWS_PHOTO,
      author: 'Mektep baspasóz xızmeti'
    },
    {
      id: 'news-3',
      title: '“Kitap — bilim bulaǵı” atamasındaǵı kitapqumarlıq báykewi juwmaqlandı',
      date: '2026-03-10',
      summary: 'Mektep kitapxanası tárepinen shólkemlestirilgen kitap oqıw tańlawında eń kóp kitap oqıǵan oqıwshılar estelik sawǵalar menen tábiyiklendi.',
      content: 'Oqıwshılardıń kitapqumarlıq mádeniyatın qáliplestiriw hám kórkem ádebiyatqa muhabbatın oyatıw maqsetinde ótkerilgen tańlawda belsendi qatnasqan oqıwshılar mektep administraciyası tárepinen diplom hám qımbat bahalı kitaplar menen sıylıqlandı.',
      photoUrl: DEFAULT_NEWS_PHOTO,
      author: 'Mektep kitapxanası'
    }
  ],

  events: [
    {
      id: 'event-1',
      title: '“Ata-analar májilisi hám oqıwshılar jetiskenlikleri kórgizbesi”',
      date: '2026-04-05',
      time: '15:00',
      location: 'Mekteptiń májilisler zalı',
      description: 'Mektep administraciyası, pán muǵallimleri hám ata-analar qatnasıwında oqıw jılınıń úshinshi shereginiń juwmaqları hám aldada turǵan wazıypalar dodalanadı.',
      photoUrl: DEFAULT_NEWS_PHOTO
    },
    {
      id: 'event-2',
      title: 'Jas ilimpazlar ilimiy-ámeliy konferenciyası',
      date: '2026-04-12',
      time: '10:00',
      location: 'Mektep kitapxanası hám ximiya laboratoriyası',
      description: 'Oqıwshılardıń dóretiwshilik izleniwleri, biologiya, fizika hám tariyx pánlerinen tayarlaǵan ilimiy joybarları kórip shıǵıladı.',
      photoUrl: DEFAULT_NEWS_PHOTO
    },
    {
      id: 'event-3',
      title: 'Mektep-internatı sport spartakiadası',
      date: '2026-04-20',
      time: '09:00',
      location: 'Mektep sport maydanshası',
      description: 'Futbol, voleybol, basketbol hám jeńil atletika boyınsha klasslar aralıq dástúriy mektep jarısları.',
      photoUrl: DEFAULT_NEWS_PHOTO
    }
  ],

  achievements: [
    {
      id: 'ach-1',
      title: 'Matematika páni boyınsha Respublika olimpiadasında I orın',
      category: 'olimpiada',
      categoryLabel: 'Pán olimpiadaları',
      date: '2026',
      description: 'Mektep-internatımızdıń oqıwshısı matematika páni boyınsha ótkerilgen Qaraqalpaqstan Respublikası kólemindegi basqıshta jeńimpaz boldı.',
      photoUrl: DEFAULT_NEWS_PHOTO,
      recipient: '[Oqıwshı atı hám familiyası]'
    },
    {
      id: 'ach-2',
      title: 'Shaxmat boyınsha Nókis qalalıq birinshiliginde altın medal',
      category: 'sport',
      categoryLabel: 'Sport jetiskenlikleri',
      date: '2026',
      description: 'Jas óspirimler arasında ótkerilgen shaxmat turnirinde mektep komandası 1-orındı jeńip aldı.',
      photoUrl: DEFAULT_NEWS_PHOTO,
      recipient: 'Mektep shaxmat toparı'
    },
    {
      id: 'ach-3',
      title: '“Jas intellektual” respublikalıq bilim báykewinde alǵıslaw diplomı',
      category: 'bilim',
      categoryLabel: 'Bilim báykewleri',
      date: '2025',
      description: 'Logikalıq hám intellektual sorawlar boyınsha ótkerilgen tańlawda joqarı qábilet kórsetti.',
      photoUrl: DEFAULT_NEWS_PHOTO,
      recipient: 'Intellektual topar'
    },
    {
      id: 'ach-4',
      title: 'Kórkem óner hám qol óneri kórgizbesinde eń jaqsı dóretpe',
      category: 'oner',
      categoryLabel: 'Óner hám mádeniyat',
      date: '2025',
      description: 'Milliylik hám zamanagóylikti ózinde jámlegen qol jumısları menen arnawlı nominaciyada jeńimpaz boldı.',
      photoUrl: DEFAULT_NEWS_PHOTO,
      recipient: '[Oqıwshı atı]'
    },
    {
      id: 'ach-5',
      title: 'Xalıqaralıq kangooroo matematika tańlawı diplomı',
      category: 'oqiwshi',
      categoryLabel: 'Oqıwshılardıń jetiskenlikleri',
      date: '2026',
      description: 'Oqıwshımız joqarı ball menen xalıqaralıq sertifikat hám medal menen sıylıqlandı.',
      photoUrl: DEFAULT_NEWS_PHOTO,
      recipient: '[Oqıwshı atı]'
    }
  ],

  gallery: [
    {
      id: 'gal-1',
      title: '1-sanlı Qánigelestirilgen mektep-internatı imaratı',
      category: 'mektep',
      categoryLabel: 'Mektep',
      photoUrl: DEFAULT_SCHOOL_PHOTO,
      date: '2026'
    },
    {
      id: 'gal-2',
      title: 'Oqıwshılardıń sabaq procesi hám laboratoriya shınıǵıwları',
      category: 'oqiwshilar',
      categoryLabel: 'Oqıwshılar',
      photoUrl: DEFAULT_NEWS_PHOTO,
      date: '2026'
    },
    {
      id: 'gal-3',
      title: 'Tájiriybeli pedagog-ustazlar quramı',
      category: 'ustazlar',
      categoryLabel: 'Ustazlar',
      photoUrl: DEFAULT_TEACHER_PHOTO,
      date: '2026'
    },
    {
      id: 'gal-4',
      title: 'Navrız bayramı hám milliy qádiriyatlar kúnlerinen kórinisler',
      category: 'issharalar',
      categoryLabel: 'Is-sharalar',
      photoUrl: DEFAULT_NEWS_PHOTO,
      date: '2026'
    },
    {
      id: 'gal-5',
      title: 'Pán olimpiadaları jeńimpazların sıylıqlaw máresimi',
      category: 'jetiskenlikler',
      categoryLabel: 'Jetiskenlikler',
      photoUrl: DEFAULT_NEWS_PHOTO,
      date: '2026'
    },
    {
      id: 'gal-6',
      title: 'Mektep kitapxanasında kitap oqıw máwritleri',
      category: 'oqiwshilar',
      categoryLabel: 'Oqıwshılar',
      photoUrl: DEFAULT_NEWS_PHOTO,
      date: '2026'
    }
  ],

  students: {
    schedule: [
      { period: '1-para / 1-2 sabaqlar', time: '08:30 - 09:55', description: 'Tiykarǵı qánigelik pánler (Matematika / Anıq pánler)' },
      { period: 'Tánepis hám azanǵı awqat', time: '09:55 - 10:15', description: 'Dem alıs máwriti hám tınıǵıw' },
      { period: '2-para / 3-4 sabaqlar', time: '10:15 - 11:40', description: 'Tábiyiy pánler hám tiller' },
      { period: 'Úlken tánepis', time: '11:40 - 12:00', description: 'Taza hawada dem alıw máwriti' },
      { period: '3-para / 5-6 sabaqlar', time: '12:00 - 13:25', description: 'Jámiyetlik pánler hám informatika' },
      { period: 'Túslik awqat', time: '13:30 - 14:30', description: 'Oqıwshılar awqatlanıwı' },
      { period: 'Óz betinshe tayarlıq (Samopodgotovka)', time: '15:00 - 17:00', description: 'Tərbiyashılar baqlawında úy tapsırmaların orınlaw' },
      { period: 'Dógerekler hám sport seksiyaları', time: '17:00 - 18:30', description: 'IT, robototexnika, shaxmat, sport shınıǵıwları' }
    ],
    rules: [
      'Mektepke óz waqtında, belgilengen mektep formasında keliw shárt.',
      'Sabaq waqtında tártip-intizamǵa boysınıw, ustazlardı hám teńleslerdi húrmetlew kerek.',
      'Mektep múlkin, oqıw qural-jaraqların hám kitaplardı abaylap saqlaw kerek.',
      'Sabaq waqtında mobil telefonlardan tek sabaq zárúriyatında, ustazdıń ruqsatı menen paydalanıwǵa ruxsat etiledi.',
      'Tazaǵa, gigiyena talaplarına hám mektep-internatı rejimine qatań boysınıw zárúr.'
    ],
    usefulResources: [
      {
        title: 'Mektep elektron kitapxanası',
        description: 'Sabaqlıqlar, qosımsha qollanbalar hám kórkem ádebiyatlar bazası.',
        category: 'Kitapxana'
      },
      {
        title: 'Olimpiadaǵa tayarlıq tapsırmaları',
        description: 'Matematika, fizika hám anıq pánler boyınsha ótken jıllardıń testleri hám máseleler jıynaǵı.',
        category: 'Olimpiada'
      },
      {
        title: 'IT hám Robototexnika sabaqları',
        description: 'Dógerek aǵzaları ushın elektron metodikalıq qollanbalar hám úlgiler.',
        category: 'Dógerek'
      }
    ],
    news: [
      {
        title: 'Báhárgi imtixanlarǵa tayarlıq baslandı',
        date: '2026-03-20',
        description: 'Barlıq klass oqıwshıları ushın qadaǵalaw jumısları hám sınaq testleri kestesi mektep eglanlar taxtasına ilindi.'
      },
      {
        title: 'Shaxmat dógeregine jańa aǵzalardı qabıllaw',
        date: '2026-03-15',
        description: 'Shaxmatqa qızıǵıwshı 5-9-klass oqıwshıları ushın keste jańalandı.'
      }
    ]
  },

  parents: {
    importantNotes: [
      'Mektep-internatında oqıwshılardıń qáwipsizligi, salamatlıǵı hám sapalı awqatlanıwı turaqlı qadaǵalawda.',
      'Hár ayda oqıwshılardıń sabaqqa qatnasıwı hám bahaları boyınsha monitorinǵ nátiyjeleri ata-analarǵa jetkeriledi.',
      'Oqıwshılardı dem alıs kúnleri úyge alıp ketiw tártibi mektep qaǵıydalarına muwapıq ámelge asırıladı.',
      'Ata-analar komitetiniń májilisleri hár sherekte bir márte shólkemlestiriledi.'
    ],
    announcements: [
      {
        title: 'Sherek juwmaǵı boyınsha ulıwma ata-analar májilisi',
        date: '2026-04-05',
        content: 'Barlıq ata-analar ushın mektep májilisler zalında sabaq kórsetkishleri hám tárbiyalıq máseleler boyınsha ashıq sáwbet ótkeriledi.'
      },
      {
        title: 'Meditsinalıq kózden ótkeriw máwriti',
        date: '2026-04-10',
        content: 'Oqıwshılardıń salamatlıǵın bekkemlew maqsetinde profilaktikalıq kózden ótkeriw ótkeriledi.'
      }
    ],
    documents: [
      {
        title: 'Mektep-internatına qabıllaw tártibi hám qaǵıydaları',
        description: 'Talantlı oqıwshılardı sınaq tiykarında qabıllaw boyınsha reqlament.',
        type: 'PDF hújjet'
      },
      {
        title: 'Ishki tártip-intizam qaǵıydaları',
        description: 'Mektep jámááti, oqıwshılar hám ata-analar ushın huqıqıy hújjet.',
        type: 'Rásmiy qaǵıyda'
      },
      {
        title: 'Oqıwshılardıń mektep forması talapları',
        description: 'Belgilengen úlgidegi kiyim forması standartları.',
        type: 'Metodikalıq kórsetpe'
      }
    ],
    parentingAdvice: [
      {
        title: 'Balanıń óz betinshe bilim alıw qábiletin qollap-quwatlaw',
        content: 'Balaǵa tek bahası ushın emes, al qızıǵıwshılıǵı, jańa nárselerdi úyreniwge umtılıwı ushın ilham beriń. Úyde tınısh oqıw ornın jaratıp beriń.'
      },
      {
        title: 'Internet hám gadjetlerden aqılǵa muwapıq paydalanıw',
        content: 'Telefon hám kompyuterden tek oqıw hám kónlikpelerdi rawajlandırıw baǵdarında paydalanıwın qadaǵalań, kún tártibine ámel etiwin qollap-quwatlań.'
      }
    ]
  },

  contact: {
    phone: '+998 XX XXX XX XX',
    email: 'example@email.com',
    telegramUsername: '@nukus1Qmi',
    telegramLink: 'https://t.me/nukus1Qmi',
    address: 'Nókis qalası, I. Karimov kóshesi, 154-jay',
    workingHours: 'Dúyshembi - Shembi: 08:00 - 18:00'
  }
};
