const Images = [
    { image: require('../assets/images/car_1.jpg') },
    { image: require('../assets/images/car_3.jpg') },
    { image: require('../assets/images/car_4.jpg') },
    { image: require('../assets/images/car_5.jpg') },
    { image: require('../assets/images/car_6.jpg') },
    { image: require('../assets/images/car_7.jpg') },
];

export const data = [
    {
        id: '1',
        coordinate: {
            latitude: 22.6293867,
            longitude: 88.4354486,
        },
        title: 'BMW',
        description: `started its operation in 1912 and was formed by the merger of three German companies.

The acronym BMW stands for Bayerische Motoren Werke GmnH, which roughly translates to Bavarian Engine Works Company.`,
        image: Images[0].image,
        rating: 4,
        reviews: 99,
        categories: ['Cars', 'Property', 'Watch'],
    },
    {
        id: '2',
        coordinate: {
            latitude: 22.6345648,
            longitude: 88.4377279,
        },
        title: 'Honda',
        description: `Honda sold what was left of the company to Toyota and used the money to launch the Honda Technical Research Institute..`,
        image: Images[1].image,
        rating: 5,
        reviews: 102,
        categories: ['Restaurant', 'Fastfood Center', 'Snacks Corner'],
    },
    {
        id: '3',
        coordinate: {
            latitude: 22.6281662,
            longitude: 88.4410113,
        },
        title: 'Mercedes',
        description: `Mercedes-Benz traces its origins to Karl Benz, who created the first internal combustion engine used in a car`,
        image: Images[2].image,
        rating: 3,
        reviews: 220,
        categories: ['Restaurant', 'Hotel', 'Dineout'],
    },
    {
        id: '4',
        coordinate: {
            latitude: 22.6341137,
            longitude: 88.4497463,
        },
        title: 'Ferrari',
        description: `The luxury car brand Ferrari is named after its Italian founder, Enzo Ferrari, who was an official Alto race driver..`,
        image: Images[3].image,
        rating: 4,
        reviews: 48,
        categories: ['Restaurant', 'Fastfood Center', 'Snacks Corner'],
    },
    {
        id: '5',
        coordinate: {
            latitude: 22.6292757,
            longitude: 88.444781,
        },
        title: ' Chevrolet',
        description: `also called Chevy, was founded in 1911 by Louis Chevrolet and William C Durant in Detroit, as the Chevrolet Motor Company. .`,
        image: Images[4].image,
        rating: 4,
        reviews: 178,
        categories: ['Cars', 'Property', 'Watch'],
    },
    {
        id: '6',
        coordinate: {
            latitude: 22.6293867,
            longitude: 88.4354486,
        },
        title: 'Amazing Food Place',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est metus, gravida vel ex volutpat, posuere euismod tortor. Pellentesque tincidunt, mi ac varius blandit, quam orci dignissim risus, vitae rutrum orci urna ut neque.
      
      Pellentesque condimentum ut libero id blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
        image: Images[0].image,
        rating: 4,
        reviews: 99,
        categories: ['Cars', 'Property', 'Watch'],
    },
    {
        id: '7',
        coordinate: {
            latitude: 22.6345648,
            longitude: 88.4377279,
        },
        title: 'Aston Martin',
        description: `The name Aston Martin is derived partly from the name of its founder, Lionel Martin, and partly for a stretch of road in Hertfordshire, England, used for racing, called the Aston Hillclimb. .`,
        image: Images[1].image,
        rating: 5,
        reviews: 102,
        categories: ['Cars', 'Property', 'Watch'],
    },
];