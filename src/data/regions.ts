export const regions = [
  {
    id: 'bretagne',
    name: 'Bretagne',
    description: 'Découvrez les artisans bretons, de la dentelle à la poterie, dans cette région côtière historique.',
    color: '#8B4513' // Brown for pottery and woodwork
  },
  {
    id: 'nord-pas-de-calais',
    name: 'Nord-Pas-de-Calais',
    description: 'Une région riche en traditions textiles et artisanat du verre.',
    color: '#1E90FF' // Blue for glass work
  },
  {
    id: 'picardie',
    name: 'Picardie',
    description: 'Explorez le patrimoine artisanal picard, de la verrerie à la tapisserie.',
    color: '#DAA520' // Golden for tapestry
  },
  {
    id: 'haute-normandie',
    name: 'Haute-Normandie',
    description: 'Découvrez les savoir-faire normands, de la céramique à la vannerie.',
    color: '#CD853F' // Wood brown for basketry
  },
  {
    id: 'basse-normandie',
    name: 'Basse-Normandie',
    description: 'Immergez-vous dans les traditions normandes, du travail du cuir à la dentelle.',
    color: '#8B4513' // Brown for leather work
  },
  {
    id: 'ile-de-france',
    name: 'Île-de-France',
    description: 'Le cœur artistique de la France, mêlant tradition et innovation.',
    color: '#C0C0C0' // Silver for jewelry
  },
  {
    id: 'champagne-ardenne',
    name: 'Champagne-Ardenne',
    description: 'Une région célèbre pour son artisanat du verre et du cristal.',
    color: '#87CEEB' // Sky blue for crystal work
  },
  {
    id: 'lorraine',
    name: 'Lorraine',
    description: 'Terre de traditions verrières et de broderie.',
    color: '#9370DB' // Purple for embroidery
  },
  {
    id: 'alsace',
    name: 'Alsace',
    description: 'Explorez les traditions artisanales alsaciennes, de la poterie à la verrerie d\'art.',
    color: '#B8860B' // Dark golden for pottery
  },
  {
    id: 'pays-de-la-loire',
    name: 'Pays de la Loire',
    description: 'Une région riche en artisanat traditionnel et contemporain.',
    color: '#556B2F' // Olive for textile
  },
  {
    id: 'centre',
    name: 'Centre',
    description: 'Au cœur de la France, découvrez des savoir-faire ancestraux.',
    color: '#8B4513' // Brown for woodwork
  },
  {
    id: 'bourgogne',
    name: 'Bourgogne',
    description: 'Une région où l\'artisanat d\'art côtoie la tradition viticole.',
    color: '#800000' // Maroon for wine crafts
  },
  {
    id: 'franche-comte',
    name: 'Franche-Comté',
    description: 'Terre d\'horlogerie et de métiers d\'art.',
    color: '#4682B4' // Steel blue for clockmaking
  },
  {
    id: 'poitou-charentes',
    name: 'Poitou-Charentes',
    description: 'Découvrez l\'artisanat maritime et rural.',
    color: '#20B2AA' // Light sea green for maritime crafts
  },
  {
    id: 'limousin',
    name: 'Limousin',
    description: 'Célèbre pour ses émaux et sa porcelaine.',
    color: '#E6E6FA' // Lavender for porcelain
  },
  {
    id: 'auvergne',
    name: 'Auvergne',
    description: 'Une région où la tradition artisanale reste vivace.',
    color: '#8B4513' // Brown for leather work
  },
  {
    id: 'rhone-alpes',
    name: 'Rhône-Alpes',
    description: 'Entre tradition et modernité, découvrez des artisans passionnés.',
    color: '#DAA520' // Golden for metalwork
  },
  {
    id: 'aquitaine',
    name: 'Aquitaine',
    description: 'Une région riche en artisanat traditionnel.',
    color: '#8FBC8F' // Dark sea green for basketry
  },
  {
    id: 'midi-pyrenees',
    name: 'Midi-Pyrénées',
    description: 'Découvrez l\'artisanat occitan dans toute sa diversité.',
    color: '#CD853F' // Peru brown for pottery
  },
  {
    id: 'languedoc-roussillon',
    name: 'Languedoc-Roussillon',
    description: 'Entre mer et montagne, des traditions artisanales uniques.',
    color: '#DEB887' // Burlywood for textile
  },
  {
    id: 'provence-alpes-cote-dazur',
    name: 'Provence-Alpes-Côte d\'Azur',
    description: 'Plongez dans l\'art de la parfumerie et de la savonnerie traditionnelle.',
    color: '#DDA0DD' // Plum for perfumery
  },
  {
    id: 'corse',
    name: 'Corse',
    description: 'Une île où l\'artisanat traditionnel perdure.',
    color: '#8B4513' // Brown for knife making
  }
];

export const activities = [
  {
    id: 1,
    regionId: 'bretagne',
    title: 'Stage de Poterie Traditionnelle',
    description: 'Immersion complète dans l\'art de la poterie bretonne avec le Maître Artisan Jean-Pierre Moreau.',
    artisan: 'Jean-Pierre Moreau, Maître Potier depuis 30 ans',
    location: 'Quimper, Bretagne',
    duration: '2 jours',
    participants: '4-6 personnes',
    rating: 4.9,
    price: '280€',
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&q=80',
    included: ['Matériaux', 'Déjeuners traditionnels', 'Votre création personnelle']
  },
  {
    id: 2,
    regionId: 'provence-alpes-cote-dazur',
    title: 'Atelier de Parfumerie Artisanale',
    description: 'Créez votre parfum unique avec une Maître Parfumeur de Grasse.',
    artisan: 'Marie Dubois, Maître Parfumeur',
    location: 'Grasse, Provence',
    duration: '1 jour',
    participants: '6-8 personnes',
    rating: 4.8,
    price: '195€',
    image: 'https://images.unsplash.com/photo-1607006483224-56338f0d8777?auto=format&fit=crop&q=80',
    included: ['Matières premières', 'Flacon personnalisé', 'Déjeuner provençal']
  },
  {
    id: 3,
    regionId: 'alsace',
    title: 'Immersion en Verrerie d\'Art',
    description: 'Deux jours pour découvrir l\'art du verre soufflé dans une verrerie historique.',
    artisan: 'Klaus Schmidt, Maître Verrier',
    location: 'Strasbourg, Alsace',
    duration: '2 jours',
    participants: '3-4 personnes',
    rating: 4.9,
    price: '340€',
    image: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&q=80',
    included: ['Matériaux', 'Équipement de sécurité', 'Repas traditionnels alsaciens']
  },
  {
    id: 4,
    regionId: 'bretagne',
    title: 'Tissage de Dentelle Bretonne',
    description: 'Apprentissage des techniques ancestrales de dentelle avec une Meilleure Ouvrière de France.',
    artisan: 'Anne-Marie Le Gall, MOF Dentellière',
    location: 'Pont-l\'Abbé, Bretagne',
    duration: '2 jours',
    participants: '4-6 personnes',
    rating: 4.7,
    price: '260€',
    image: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&q=80',
    included: ['Matériel de dentelle', 'Fils et fuseaux', 'Pauses café bretonnes']
  },
  {
    id: 5,
    regionId: 'bourgogne',
    title: 'Stage de Tonnellerie Traditionnelle',
    description: 'Découvrez l\'art de la fabrication des tonneaux avec un Maître Tonnelier.',
    artisan: 'Pierre Dumont, Maître Tonnelier',
    location: 'Beaune, Bourgogne',
    duration: '2 jours',
    participants: '3-4 personnes',
    rating: 4.9,
    price: '390€',
    image: 'https://images.unsplash.com/photo-1590086783191-a0694c7d1e6e?auto=format&fit=crop&q=80',
    included: ['Matériaux', 'Dégustation de vins', 'Repas gastronomiques']
  }
];

export interface BookingDate {
  date: Date;
  availableSpots: number;
}