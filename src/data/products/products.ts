import { IProductDatas } from './types';
import { ICategoryPriority } from './types';

const productsData: Array<IProductDatas> = [
  {
    title: 'Sprinkler Söndürme Sistemleri',
    category: 'Sulu Söndürme Sistemleri',
    path: '',
    imageUrl: '/images/products/yangin-sprinkler-sistemi.jpg',
    desc: 'Sprinkler söndürme sistemleri, yangın durumunda otomatik olarak devreye giren su püskürtme sistemleridir. Bu sistemler, algılama sensörleri aracılığıyla yangın tespit edildiğinde suyu hedef alana yönlendirerek hızlı bir şekilde söndürme işlemi gerçekleştirir. ',
    titleEng: 'Sprinkler Extinguishing Systems',
    categoryEng: 'Water Extinguishing Systems',
    descEng:
      'Sprinkler extinguishing systems are water spray systems that are automatically activated in case of fire. When a fire is detected through detection sensors, these systems quickly extinguish it by directing water to the target area.',
  },
  {
    title: 'Yangın Pompaları',
    category: 'Sulu Söndürme Sistemleri',
    path: '',
    imageUrl: '/images/products/yangin-pompasi.png',
    desc: 'Yangın pompası, yangın söndürme sistemlerinde kullanılan temel bir ekipmandır. Bu pompalar, suyu yüksek basınçla hortumlar aracılığıyla yangın alanına ileterek hızlı bir şekilde yangını söndürmeyi amaçlar. Yangın pompaları genellikle itfaiye araçlarında, binalarda ve endüstriyel tesislerde yangın güvenliği için kullanılır.',
    titleEng: 'Fire Pumps',
    categoryEng: 'Water Extinguishing Systems',
    descEng:
      'Fire pump is a basic equipment used in extinguishing systems. These pumps quickly finish extinguishing the combustion by delivering water to the flammable area through high-pressure hoses. Fire pumps are often used for fire safety in firefighters, buildings and industrial equipment.',
  },
  {
    title: 'Çift Kapaklı Cam Yangın Dolabı',
    category: 'Yangın Dolapları ve Ekipmanları',
    path: '',
    imageUrl: '/images/products/yangin-dolablari.jpg',
    desc: 'Yangın dolapları, acil durumlarda kullanılmak üzere tasarlanmış yangın söndürme ekipmanlarını depolamak ve erişilebilir kılmak amacıyla kullanılan donanımlardır. Genellikle su hortumu, yangın musluğu ve yangın söndürücü gibi malzemeleri içerirler. ',
    titleEng: 'Fire Cabinets',
    categoryEng: 'Double Door Glass Fire Cabinet',
    descEng:
      'Fire cabinets are equipment used to store and make accessible fire extinguishing equipment designed to be used in emergencies. They usually include items such as water hoses, fire hydrants, and fire extinguishers.',
  },
  {
    title: 'Yangın Hidrant Sistemleri',
    category: 'Sulu Söndürme Sistemleri',
    path: '',
    imageUrl: '/images/products/yangın-hidranri.jpg',
    desc: 'Yangın hidrant sistemleri, yangın söndürme operasyonları için su teminini sağlamak amacıyla tasarlanmış tesisat sistemleridir. Bu sistemler genellikle şehir su şebekesine bağlıdır ve acil durumlarda yangın söndürme ekiplerine hızlı ve etkili bir su kaynağı sağlar.',
    titleEng: 'Fire Hydrant Systems',
    categoryEng: 'Water Extinguishing Systems',
    descEng:
      'Fire hydrant systems are installation systems designed to provide water supply for fire extinguishing operations. These systems are usually connected to the city water network and provide firefighting teams with a fast and effective water source in case of emergency.',
  },
  {
    title: 'Water Mist (Su Sisi) Söndürme Sistemleri',
    category: 'Sulu Söndürme Sistemleri',
    path: '',
    imageUrl: '/images/products/su-sisi-sondurme-sistemleri.jpg',
    desc: 'Su sisi söndürme sistemleri, suyun mikro boyutlu damlacıklar halinde püskürtülmesi prensibine dayanan modern bir yangın söndürme teknolojisidir. Bu sistemler, suyun bu mikro damlacıkları oluşturulduğunda, yangının etkili bir şekilde kontrol altına alınmasına ve söndürülmesine olanak tanır. ',
    titleEng: 'Water Mist Extinguishing Systems',
    categoryEng: 'Water Extinguishing Systems',
    descEng:
      'Water mist extinguishing systems are a modern fire extinguishing technology based on the principle of spraying water in micro-sized droplets. These systems, when these micro-droplets of water are created, allow the fire to be effectively contained and extinguished.',
  },
  {
    title: 'Köpüklü Sprinkler Sistemi',
    category: 'Köpüklü Söndürme Sistemleri',
    path: '',
    imageUrl: '/images/products/kopuklu-sondurme-sistemi.png',
    desc: 'Köpüklü sprinkler sistemi, yangın söndürme teknolojisinde kullanılan bir tür sprinkler sistemidir. Bu sistem, yangın algılama durumunda köpük maddesini püskürterek yangını bastırmayı amaçlar. Genellikle endüstriyel tesislerde ve tehlikeli malzeme depolama alanlarında kullanılan köpüklü sprinkler sistemleri, yangının yayılmasını kontrol altına almak ve yangını söndürmek için etkili bir çözüm sunar',
    titleEng: 'Water Mist Extinguishing Systems',
    categoryEng: 'Foam Extinguishing Systems',
    descEng:
      'Foam sprinkler system is a type of sprinkler system used in fire extinguishing technology. This system aims to suppress the fire by spraying foam material in case of fire detection. Foam sprinkler systems, which are generally used in industrial facilities and hazardous material storage areas, provide an effective solution to control the spread of fire and extinguish the fire.',
  },
  {
    title: 'Köpüklü Yangın Dolabı',
    category: 'Köpüklü Söndürme Sistemleri',
    path: '',
    imageUrl: '/images/products/kopuklu-yangin-dolabi.jpg',
    desc: 'Köpüklü yangın dolabı, yangın söndürme ekipmanlarını depolamak ve acil durumlarda hızla kullanıma sunmak amacıyla tasarlanmış özel bir tesisat sistemidir. Bu dolaplar genellikle yangın söndürme köpüğünü depolayan bir tankı, basınçlı gaz veya hava ile püskürtmek için kullanılan bir sistemi içerir. ',
    titleEng: 'Foam Fire Cabinet',
    categoryEng: 'Foam Extinguishing Systems',
    descEng:
      'Foam fire cabinet is a special installation system designed to store fire extinguishing equipment and make it available for use quickly in case of emergency. These cabinets usually contain a tank that stores firefighting foam and a system for spraying it with pressurized gas or air.',
  },
  {
    title: 'Yüksek Genleşmeli Köpüklü Söndürme',
    category: 'Köpüklü Söndürme Sistemleri',
    path: '',
    imageUrl: '/images/products/yuksek-genlesmeli-kopuklu-sondurme.jpg',
    desc: 'Yüksek genleşmeli köpüklü söndürme sistemi, yangın söndürme amacıyla özel olarak formüle edilmiş köpük karışımının kullanıldığı bir yangın söndürme teknolojisidir. Bu sistemde, köpük genleştirilerek yangın alanına püskürtülür ve yangını kontrol altına almak, boğmak ve soğutmak amacıyla tasarlanmıştır. ',
    titleEng: 'High Expansion Foam Extinguishing',
    categoryEng: 'Foam Extinguishing Systems',
    descEng:
      'High expansion foam extinguishing system is a fire extinguishing technology in which a specially formulated foam mixture is used for fire extinguishing purposes. In this system, the foam is expanded and sprayed on the fire area and is designed to control, suffocate and cool the fire.',
  },
  {
    title: 'Köpük Monitörleri',
    category: 'Köpüklü Söndürme Sistemleri',
    path: '',
    imageUrl: '/images/products/Köpük-monitörleri.png',
    desc: 'Köpük monitörleri, yangın söndürme sistemlerinde kullanılan özel cihazlardır ve genellikle yüksek basınçlı su ve köpük karışımını hedeflenen bir alana püskürtmek amacıyla tasarlanmıştır. Bu cihazlar genellikle endüstriyel tesisler, depo alanları veya uçak pistleri gibi geniş alanlardaki yangınları kontrol etmek için kullanılır.',
    titleEng: 'Foam Monitors',
    categoryEng: 'Foam Extinguishing Systems',
    descEng:
      'Foam monitors are special devices used in fire suppression systems and are generally designed to spray a high-pressure mixture of water and foam into a targeted area. These devices are often used to control fires in large areas such as industrial facilities, warehouse areas or airstrips.',
  },
  {
    title: 'FM200 - HFC-227ea Söndürme Sistemi',
    category: 'Temiz Gazlı Söndürme Sistemleri',
    path: '',
    imageUrl: '/images/products/FM200-HFC-227ea-Gazlı-Söndürme-Sistemleri.jpg',
    desc: 'FM200 veya HFC-227ea söndürme sistemi, yangın söndürme amacıyla kullanılan bir tür halojenasyonlu karbonhidrojen (HFC) yangın söndürme gazı içeren bir sistemdir. Bu gaz, yangın durumunda hızlı bir şekilde devreye girer, oksijenin azaltılması ve yangının söndürülmesi amacıyla tasarlanmıştır. ',
    titleEng: 'FM200 - HFC-227ea Extinguishing System',
    categoryEng: 'Clean Gas Extinguishing Systems',
    descEng:
      'FM200 or HFC-227ea extinguishing system is a system containing a type of halogenated carbonhydrogen (HFC) extinguishing gas used for fire extinguishing purposes. This gas is activated quickly in case of fire and is designed to reduce oxygen and extinguish the fire.',
  },
  {
    title: 'Novec 1230 - FK-5-1-12 Söndürme Sistemi',
    category: 'Temiz Gazlı Söndürme Sistemleri',
    path: '',
    imageUrl:
      '/images/products/Novec-1230-Gazli-Sondurme-Sistemi-Gas-Fire-fighting-FK-5-1-12-3.png',
    desc: 'Novec 1230 veya FK-5-1-12, yangın söndürme sistemlerinde kullanılan bir tür halojenasyonlu karbonhidrojen (HFC) olmayan kimyasal bir söndürme ajanıdır. Bu sistem, yangın durumunda hızlı bir şekilde devreye girer ve yangını etkili bir şekilde kontrol altına almak için oksijenin azaltılması prensibine dayanır.',
    titleEng: 'Novec 1230 - FK-5-1-12 Extinguishing System',
    categoryEng: 'Clean Gas Extinguishing Systems',
    descEng:
      'Novec 1230 or FK-5-1-12 is a type of non-halogenated carbonhydrogen (HFC) chemical extinguishing agent used in fire suppression systems. This system is activated quickly in case of fire and is based on the principle of reducing oxygen to effectively control the fire.',
  },
  {
    title: 'Inert Gazlı Söndürme Sistemi',
    category: 'Temiz Gazlı Söndürme Sistemleri',
    path: '',
    imageUrl: '/images/products/inert-gazli.jpg',
    desc: 'Inert Gazlı Söndürme Sistemi, yangınları söndürmek ve kontrol altına almak için özel olarak tasarlanmış bir söndürme sistemidir. Bu sistem, inert (etkisiz) gazlar kullanarak yangının oksijenini azaltarak söndürme prensibine dayanır. Inert gazlar, genellikle azot, argon veya karbon dioksit gibi atmosferde doğal olarak bulunan gazlardan oluşur ve yangını söndürmede etkili bir alternatif sağlar.',
    titleEng: 'Inert Gas Extinguishing System',
    categoryEng: 'Clean Gas Extinguishing Systems',
    descEng:
      'Inert Gas Extinguishing System is an extinguishing system specially designed to extinguish and control fires. This system is based on the principle of extinguishing the fire by reducing the oxygen of the fire using inert gases. Inert gases generally consist of gases naturally occurring in the atmosphere, such as nitrogen, argon or carbon dioxide, and provide an effective alternative to extinguishing fires.',
  },
  {
    title: 'KFtech Pano İçi Söndürme Sistemi',
    category: 'Pano İçi Söndürme Sistemleri',
    path: '',
    imageUrl: '/images/products/pano-yangını.jpg',
    desc: 'Pano içi söndürme sistemi, elektrik panolarındaki yangın riskini azaltmak ve kontrol altına almak için tasarlanmış özel bir söndürme çözümüdür. Bu sistemler genellikle aerosol tipi söndürücüleri veya inert gazları kullanarak, yangının hızlı bir şekilde bastırılmasını sağlar.',
    titleEng: 'KFtech Internal Extinguishing System',
    categoryEng: 'Internal Extinguishing Systems',
    descEng:
      'In-panel extinguishing system is a special extinguishing solution designed to reduce and control the risk of fire in electrical panels. These systems generally use aerosol type extinguishers or inert gases to provide rapid fire suppression.',
  },
  {
    title: 'CO2 Söndürme Sistemleri',
    category: 'CO2 Söndürme Sistemleri',
    path: '',
    imageUrl: '/images/products/CO2-Sondurme-Sistemleri.jpg',
    desc: 'CO2 söndürme sistemleri, karbon dioksit (CO2) gazını kullanarak yangınları kontrol altına almak ve söndürmek için tasarlanmıştır. Bu sistemler, yangın anında hızlı bir tepki verir ve CO2 gazını hedeflenen alana püskürterek oksijeni azaltarak yangının söndürülmesini sağlar. ',
    titleEng: 'CO2 Extinguishing Systems',
    categoryEng: 'CO2 Extinguishing Systems',
    descEng:
      'CO2 extinguishing systems are designed to control and extinguish fires using carbon dioxide (CO2) gas. These systems react quickly in case of fire and allow the fire to be extinguished by reducing oxygen by spraying CO2 gas to the targeted area.',
  },
  {
    title: 'Tubingli Algılamalı Sistem',
    category: 'Davlumbaz Söndürme Sistemleri',
    path: '',
    imageUrl: '/images/products/davlumbaz-sondurme-sistemleri.jpeg',
    desc: 'Tubingli algılamalı sistem, özel bir algılama tüpü veya boru ağı kullanarak belirli bir alanda gaz, duman veya başka bir tehlikenin varlığını algılamak üzere tasarlanmış bir güvenlik sistemidir. Bu sistem, tüpler boyunca algılama yapabilen sensörler kullanarak ortamdaki değişiklikleri izleyerek tehlikeli durumları tespit eder ve gerekli alarm veya otomatik önlemleri devreye alabilir.',
    titleEng: 'Tubing Sensing System',
    categoryEng: 'Hood Extinguishing Systems',
    descEng:
      'A tubing sensing system is a security system designed to detect gas, smoke or other danger in a specific area using a special detection system or pipe network. This system detects dangerous situations by making changes in the environment using sensors that can detect along the tubes and can activate the necessary alarms or automatic controls.',
  },
  {
    title: 'Telli Algılamalı Sistem',
    category: 'Davlumbaz Söndürme Sistemleri',
    path: '',
    imageUrl: '/images/products/teli-algılamalı-sistem.jpg',
    desc: 'Telli algılamalı sistem, belirli bir alandaki tehlikeleri izlemek ve algılamak amacıyla kullanılan bir güvenlik sistemidir. Bu sistem, teller veya kablolar üzerindeki sensörler aracılığıyla titreşim, basınç veya diğer değişiklikleri algılar ve olası tehlikeleri belirleyerek alarm verir. ',
    titleEng: 'Wire Detection System',
    categoryEng: 'Hood Extinguishing Systems',
    descEng:
      'Wire sensing system is a security system used to monitor and detect dangers in a specific area. This system detects vibration, pressure or other changes through sensors on wires or cables and identifies potential dangers and raises an alarm.',
  },
  {
    title: 'Duman Tahliye Kapakları',
    category: 'Duman Tahliye Kapakları',
    path: '',
    imageUrl: '/images/products/Duman-Tahliye-Kapaklari-14-Full.jpg',
    desc: 'Duman tahliye kapakları, yangın durumlarında binalardaki dumanın ve sıcak havanın tahliye edilmesini sağlamak amacıyla kullanılan otomatik kapalı sistemlerdir. Bu kapaklar, yangın algılama sistemleri tarafından tespit edilen bir yangın durumunda otomatik olarak açılarak bina içinde biriken dumanın dışarıya atılmasına ve yangın sırasında insanların güvenli bir şekilde tahliye edilmesine yardımcı olur.',
    titleEng: 'Smoke Evacuation Covers',
    categoryEng: 'Smoke Evacuation Covers',
    descEng:
      'Smoke evacuation covers are automatic closed systems used to evacuate smoke and hot air from buildings in case of fire. These covers automatically open in the event of a fire detected by fire detection systems, helping to discharge the smoke accumulated inside the building and evacuating people safely during a fire.',
  },
  {
    title: 'İSG Ekipmanları',
    category: 'İSG Ekipmanları',
    path: '',
    imageUrl: '/images/products/isguvenligi-ekipmanlari.jpg',
    desc: 'İSG (İş Sağlığı ve Güvenliği) ekipmanları, çalışanların sağlığını ve güvenliğini korumak amacıyla kullanılan çeşitli donanımları içerir. Bu ekipmanlar arasında başlıklar, iş eldivenleri, iş ayakkabıları, koruyucu gözlükler ve işitme koruma cihazları gibi kişisel koruyucu donanımlar bulunur.',
    titleEng: 'OHS Equipment',
    categoryEng: 'OHS Equipment',
    descEng:
      'OHS (Occupational Health and Safety) equipment includes various equipment used to protect the health and safety of employees. This equipment includes personal protective equipment such as headgear, work gloves, work shoes, safety glasses and hearing protection devices.',
  },
  {
    title: 'Yangın Perdesi',
    category: 'Duman ve Yangın Perdeleri',
    path: '',
    imageUrl: '/images/products/gizli-yangin-perdesi-04-10-2019-14-15-41.jpg',
    desc: 'Yangın perdesi, bir binadaki yangının yayılmasını kontrol etmek ve sınırlamak amacıyla kullanılan özel bir yangın güvenliği ekipmanıdır. Genellikle yangın bölgesini izole etmek ve yangının diğer bölgelere sıçramasını önlemek için kullanılır.',
    titleEng: 'Fire Curtain',
    categoryEng: 'Smoke and Fire Curtains',
    descEng:
      'A fire curtain is a special fire safety equipment used to control and limit the spread of fire in a building. It is generally used to isolate the fire area and prevent the fire from spreading to other areas.',
  },
  {
    title: 'Duman Perdesi',
    category: 'Duman ve Yangın Perdeleri',
    path: '',
    imageUrl: '/images/products/duman-perdeleri.jpg',
    desc: 'Duman perdesi, bir yangın durumunda oluşan dumanın yayılmasını kontrol etmek ve sınırlamak amacıyla kullanılan bir yangın güvenliği önlemidir. Genellikle bina içindeki farklı bölgeler arasında dumanın geçişini engelleyen özel bir perde sistemini ifade eder.',
    titleEng: 'Smoke Curtain',
    categoryEng: 'Smoke and Fire Curtains',
    descEng:
      'A smoke curtain is a fire safety measure used to control and limit the spread of smoke in the event of a fire. It generally refers to a special curtain system that prevents the passage of smoke between different areas within the building.',
  },
  {
    title: 'Patlama Güvenlik ve Kıvılcım Algılama',
    category: 'Patlama Güvenlik ve Kıvılcım Algılama',
    path: '',
    imageUrl: '/images/products/patlama-guvenlik.jpg',
    desc: 'Patlama güvenlik ve kıvılcım algılama, endüstriyel ortamlarda patlama riskini değerlendirmek ve önlemek amacıyla kullanılan bir güvenlik sistemidir. Bu sistem, potansiyel tehlikeli gazları, buharları veya tozları algılayarak patlama riskini belirler ve olası patlamayı engellemek için otomatik önlemleri devreye alabilir.',
    titleEng: 'Explosion Safety and Spark Detection',
    categoryEng: 'Explosion Safety and Spark Detection',
    descEng:
      'Explosion safety and spark detection is a safety system used to assess and prevent explosion risk in industrial environments. This system detects the risk of explosion by detecting potentially hazardous gases, vapors or dust and can activate automatic measures to prevent a possible explosion.',
  },
  {
    title: 'Yangın Algılama Sistemleri',
    category: 'Yangın ve Gaz Algılama Sistemleri',
    path: '',
    imageUrl: '/images/products/isyeri-yangin-algilama-sistemleri-2.jpg',
    desc: 'Yangın algılama sistemleri, yangın tehlikesini tespit etmek ve alarm vermek amacıyla tasarlanmış otomatik güvenlik sistemleridir. Genellikle ısı, duman veya alev algılama sensörleri kullanılarak yangın belirtileri izlenir ve yangın durumunda hızlı bir tepki sağlamak üzere tasarlanmıştır. ',
    titleEng: 'Fire Detection Systems',
    categoryEng: 'Fire and Gas Detection Systems',
    descEng:
      'Fire detection systems are automatic security systems designed to detect fire danger and raise an alarm. Signs of fire are typically monitored using heat, smoke or flame detection sensors and are designed to provide a rapid response in the event of a fire.',
  },
  {
    title: 'Gaz Algılama Sistemleri',
    category: 'Yangın ve Gaz Algılama Sistemleri',
    path: '',
    imageUrl: '/images/products/yangin.jpg',
    desc: 'Gaz algılama sistemleri, belirli gazların varlığını izleyen ve algılayan özel güvenlik sistemleridir. Bu sistemler, potansiyel tehlikeli gaz sızıntılarını tespit ederek hızlı bir uyarı sağlar ve olası riskleri minimize etmek için otomatik önlemleri devreye alabilir.',
    titleEng: 'Gas Detection Systems',
    categoryEng: 'Fire and Gas Detection Systems',
    descEng:
      'Gas detection systems are special security systems that monitor and detect the presence of certain gases. These systems detect potentially hazardous gas leaks, provide a rapid warning, and can activate automatic measures to minimize potential risks.',
  },
  {
    title: 'Tek Kapaklı Yangın Dolabı',
    category: 'Yangın Dolapları ve Ekipmanları',
    path: '',
    imageUrl: '/images/products/tek-kapakli.webp',
    desc: 'Tek kapaklı yangın dolabı, yangın güvenliği ekipmanlarının depolanması ve hızla ulaşılabilir olması için tasarlanmış özel bir dolap türüdür. Genellikle yangın söndürme cihazları, su hortumu, yangın battaniyesi gibi ekipmanları içerebilir ve yangın anında kullanıma hazır olmalarını sağlamak amacıyla konumlandırılır. ',
    titleEng: 'Single Door Fire Cabinet',
    categoryEng: 'Fire Cabinets and Equipment',
    descEng:
      'Single-door fire cabinet is a special type of cabinet designed for storing and quickly accessing fire safety equipment. It can usually include equipment such as fire extinguishers, water hoses and fire blankets and is positioned to ensure that they are ready for use in case of fire.',
  },
  {
    title: 'Sahra Tipi Çatılı Ayaklı Yangın Dolabı',
    category: 'Yangın Dolapları ve Ekipmanları',
    path: '',
    imageUrl: '/images/products/sahra-tipi-catili.jpg',
    desc: 'Sahra tipi çatılı ayaklı yangın dolabı, genellikle açık alanlarda kullanılmak üzere tasarlanmış özel bir yangın güvenliği depolama ünitesidir. Bu dolap, yangın söndürme ekipmanlarını ve malzemelerini korumak ve kullanıma hazır halde tutmak amacıyla özel olarak tasarlanmış bir çatıya ve ayaklara sahiptir.',
    titleEng: 'Sahara Type Roofed Freestanding Fire Cabinet',
    categoryEng: 'Fire Cabinets and Equipment',
    descEng:
      'Sahara type roof free-standing fire cabinet is a special fire safety storage unit designed to be used generally in open areas. This cabinet has a specially designed roof and legs to protect firefighting equipment and materials and keep them ready for use.',
  },
  {
    title: 'Bez Hortumlu Camlı Yangın Dolabı',
    category: 'Yangın Dolapları ve Ekipmanları',
    path: '',
    imageUrl: '/images/products/camkanaptupbolmebez-20190821142037.jpg',
    desc: 'Bez hortumlu camlı yangın dolabı, yangın güvenliği ekipmanlarını depolamak ve korumak amacıyla kullanılan özel bir dolap türüdür. Genellikle yangın söndürme cihazları, su hortumu ve diğer ilgili malzemeleri içerir ve cam kapısı sayesinde dolabın içindeki ekipmanları gözlemlemek mümkündür.',
    titleEng: 'Glass Fire Cabinet with Cloth Hose',
    categoryEng: 'Fire Cabinets and Equipment',
    descEng:
      'Glass fire cabinet with cloth hose is a special type of cabinet used to store and protect fire safety equipment. It usually contains fire extinguishers, water hose and other related materials, and thanks to the glass door, it is possible to observe the equipment inside the cabinet.',
  },
  {
    title: 'Yangın Ekipman Dolapları',
    category: 'Yangın Dolapları ve Ekipmanları',
    path: '',
    imageUrl: '/images/products/yangin-ekipman-dolabi.jpg',
    desc: 'Yangın ekipman dolapları, yangın güvenliği ekipmanlarını depolamak, korumak ve kolayca erişilebilir kılmak amacıyla tasarlanmış özel depolama birimleridir. Bu dolaplar genellikle yangın söndürme cihazları, yangın hortumları, yangın battaniyeleri ve diğer ilgili malzemeleri içerir. ',
    titleEng: 'Fire Equipment Cabinets',
    categoryEng: 'Fire Cabinets and Equipment',
    descEng:
      'Fire equipment cabinets are special storage units designed to store, protect and make fire safety equipment easily accessible. These cabinets often contain fire extinguishers, fire hoses, fire blankets and other related supplies.',
  },
  {
    title: 'Portatip Yangın Söndürücü Dolabı',
    category: 'Yangın Dolapları ve Ekipmanları',
    path: '',
    imageUrl: '/images/products/portatip-yangin-sondurucu-dolap.jpg',
    desc: 'Portatif yangın söndürücü dolabı, yangın söndürme ekipmanlarını taşınabilir ve düzenli bir şekilde depolamak amacıyla tasarlanmış özel bir depolama birimidir. Genellikle yangın söndürücülerin yanı sıra yangın söndürme battaniyeleri ve diğer ilgili malzemeleri içerir.',
    titleEng: 'Portable Fire Extinguisher Cabinet',
    categoryEng: 'Fire Cabinets and Equipment',
    descEng:
      'Portable fire extinguisher cabinet is a special storage unit designed to store fire extinguishing equipment in a portable and orderly manner. It usually includes fire extinguishers as well as firefighting blankets and other related supplies.',
  },
  {
    title: 'Zemin Aydınlatmaları',
    category: 'Aciz Çıkış Levhaları ve Aydınlatmalar',
    path: '',
    imageUrl: '/images/products/acil-yonlendirme-levhalari.jpg',
    desc: 'Bu zemin aydınlatmaları genellikle gece veya düşük ışık koşullarında etkili bir şekilde görünürlük sağlamak üzere tasarlanmış olup, aciz çıkışları belirgin bir şekilde aydınlatarak acil durumlarda insanların güvenli bir şekilde tahliye olmalarını kolaylaştırır.',
    titleEng: 'Floor Lightings',
    categoryEng: 'Incapacitated Exit Signs and Lightings',
    descEng:
      'These ground lights are generally designed to provide effective visibility at night or in low light conditions, making it easier for people to evacuate safely in emergency situations by clearly illuminating incapacitated exits.',
  },
  {
    title: 'Çıkış Levhaları',
    category: 'Aciz Çıkış Levhaları ve Aydınlatmalar',
    path: '',
    imageUrl: '/images/products/acil-cikis-levhasi-sol-ok-fotolumenli-de-4af1-1000x750.jpg',
    desc: 'Çıkış Levhaları, acil durumlarda güvenli çıkışları belirtmek amacıyla kullanılan önemli güvenlik donanımlarıdır. Bu levhalar genellikle yüksek görünürlükteki renkler ve açıkça anlaşılır okunabilir yazılar içerir, böylece insanların aciz çıkışları hızlı bir şekilde bulmalarına yardımcı olurlar. ',
    titleEng: 'Exit Signs',
    categoryEng: 'Incapacitated Exit Signs and Lightings',
    descEng:
      'Exit Signs are important safety equipment used to indicate safe exits in emergency situations. These signs often feature high-visibility colors and clearly readable text to help people quickly find helpless exits.',
  },
  {
    title: 'Tozlu Portatif Yangın Söndürücüler',
    category: 'Portatif Yangın Söndürücüler',
    path: '',
    imageUrl: '/images/products/6-kg-kkt.png',
    desc: 'Genellikle ABC sınıfı yangınlara karşı etkili müdahale sağlamak amacıyla tasarlanmış taşınabilir söndürme cihazlarıdır. Bu söndürücüler, yangının yaygın olarak görüldüğü kağıt, odun, sıvılar ve elektrikli cihazlar gibi farklı malzemelerden kaynaklanan yangınlara karşı etkili bir çözüm sunarlar.',
    titleEng: 'Powder Portable Fire Extinguishers',
    categoryEng: 'Portable Fire Extinguishers',
    descEng:
      'Powder portable fire extinguishers are portable extinguishing devices designed to provide effective intervention against ABC class fires. These extinguishers offer an effective solution against fires caused by different materials such as paper, wood, liquids and electrical devices, where fire is common.',
  },
  {
    title: 'Köpüklü Portatif Yangın Söndürücüler',
    category: 'Portatif Yangın Söndürücüler',
    path: '',
    imageUrl: '/images/products/Bos-Yangin-Sondurme-Tupu-Doldurulabilir-mi.jpg',
    desc: 'Genellikle sıvı yangınlarına karşı etkili müdahale sağlamak amacıyla tasarlanmış taşınabilir söndürme cihazlarıdır. Bu söndürücüler, özellikle petrol ürünleri, benzin ve yağ gibi sıvı yangınlarına karşı güvenilir bir söndürme ajanı olan köpük kullanırlar. ',
    titleEng: 'Foam Portable Fire Extinguishers',
    categoryEng: 'Portable Fire Extinguishers',
    descEng:
      'They are generally portable extinguishing devices designed to provide effective intervention against liquid fires. These extinguishers use foam, which is a reliable extinguishing agent especially against liquid fires such as petroleum products, gasoline and oil.',
  },
  {
    title: 'Gazlı Portatif Yangın Söndürücüler',
    category: 'Portatif Yangın Söndürücüler',
    path: '',
    imageUrl: '/images/products/halokarbonlu-yangin-sondurme-cihazlari-jpg.jpg',
    desc: 'Genellikle gaz alevi yangınlarına karşı etkili müdahale sağlamak amacıyla tasarlanmış taşınabilir söndürme cihazlarıdır. Bu söndürücüler, yangını boğma prensibiyle çalışarak oksijenin yanma sürecini keser ve alevi söndürür.',
    titleEng: 'Gas Portable Fire Extinguishers',
    categoryEng: 'Portable Fire Extinguishers',
    descEng:
      'They are generally portable extinguishing devices designed to provide effective intervention against gas flame fires. These extinguishers work on the principle of suffocating the fire, interrupting the combustion process of oxygen and extinguishing the flame.',
  },
];

export const categoryPriority: ICategoryPriority = {
  'Yangın Dolapları ve Ekipmanları': 1,
  'Davlumbaz Söndürme Sistemleri': 2,
  'Pano İçi Söndürme Sistemleri': 3,
  'Portatif Yangın Söndürücüler': 4,
  'Aciz Çıkış Levhaları ve Aydınlatmalar': 5,
  'Sulu Söndürme Sistemleri': 6,
  'Köpüklü Söndürme Sistemleri': 7,
  'Temiz Gazlı Söndürme Sistemleri': 8,
  'CO2 Söndürme Sistemleri': 9,
  'Yangın ve Gaz Algılama Sistemleri': 10,
  'Duman Tahliye Kapakları': 11,
  'İSG Ekipmanları': 12,
  'Duman ve Yangın Perdeleri': 13,
  'Patlama Güvenlik ve Kıvılcım Algılama': 14,
};

productsData.sort((a, b) => {
  const priorityA = categoryPriority[a.category] || Object.keys(categoryPriority).length++;
  const priorityB = categoryPriority[b.category] || Object.keys(categoryPriority).length++;

  return priorityA - priorityB;
});

export default productsData;
