interface Notice {
  id: string;
  title: string;
  subTitle: string;
  image: string;
  description: string;
  reference: string;
  source: string;
  
}

const notices: Notice[] = [
  {
    id: '1',
    title: 'Descubren dos nuevas especies de crustáceos en los fondos marinos de Galicia',
    subTitle: 'La fauna de los fondos profundos del océano suele ser poco conocida por la dificultad de muestrear a grandes profundidades. Un equipo de investigación de la Estación de Biología Marina de la Graña, en Galicia, emprendió cuatro expediciones oceanográficas en las aguas del noroeste peninsular que han permitido hallar varias especies nuevas que habitan los fondos abismales. Ahora describen dos de ellas que carecen de ojos y son de tamaño milimétrico.',
    image: 'https://d7lju56vlbdri.cloudfront.net/var/ezwebin_site/storage/images/_aliases/img_1col/noticias/descubren-dos-nuevas-especies-de-crustaceos-en-los-fondos-marinos-de-galicia/6045125-1-esl-MX/Descubren-dos-nuevas-especies-de-crustaceos-en-los-fondos-marinos-de-Galicia.jpg',
    description: '',
    reference: '',
    source: '',
  },
  {
    id: '2',
    title: '146 nuevas especies descubiertas en 2022',
    subTitle: 'En 2022, los investigadores de la Academia de Ciencias de California han añadido 146 nuevas especies de animales, plantas y hongos al árbol de la vida, enriqueciendo nuestra comprensión de la biodiversidad de la Tierra y fortaleciendo nuestra capacidad para proteger el mundo natural. ',
    image: 'https://content.nationalgeographic.com.es/medio/2022/12/23/el-pez-hada-con-velo-rosa-cirrhilabrus-finifenmaa_a7aac1dc_221223123908_2000x1344.jpg',
    description: '',
    reference: '',
    source: '',
  },
  {
    id: '3',
    title: 'Detectada por primera vez en España un alga invasora procedente del Caribe y el Atlántico occidental',
    subTitle: 'La Agencia Catalana del Agua (ACA) ha detectado por primera vez en Cataluña y en las costas españolas una nueva alga invasora de difícil erradicación en Punta Falconera, en la reserva natural del Cap de Creus, en Roses (Girona) y también en Es Gat, en Cap Norfeu, que pertenece a la reserva marina del Cap de Creus. Se trata de la Chrysonephos lewisii, una Pelagophyceae, que es una clase de alga muy poco común nativa del Atlántico Occidental y del norte del Caribe. En Europa sólo se había detectado en Italia',
    image: 'https://imagenes.elpais.com/resizer/ebgjGela53KYy0IB1RkpP3RmlkA=/1200x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/47RRCKXAXBFNJKNSZ5IZMMMZU4.jpg',
    description: '',
    reference: '',
    source: '',
  },
];

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const api = {
  list: async (): Promise<Notice[]> => {
    await sleep(750);

    return notices;
  },
  fetch: async (id: Notice["id"]): Promise<Notice> => {
    await sleep(750);

    const notice = notices.find((notice) => notice.id === id);

    if (!notice) {
      throw new Error(`Notice with id ${id} not found`);
    }

    return notice
  },
};

export default api;
