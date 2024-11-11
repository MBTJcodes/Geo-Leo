import { Country, Difficulty } from '../types';

export const countries: Record<Difficulty, Country[]> = {
  beginner: [
    { name: 'Spain', hint: 'Famous for flamenco and tapas' },
    { name: 'Italy', hint: 'Home of pizza and pasta' },
    { name: 'China', hint: 'Has the Great Wall' },
    { name: 'India', hint: 'Home of the Taj Mahal' },
    { name: 'Brazil', hint: 'Famous for carnival and soccer' },
    { name: 'Mexico', hint: 'Land of tacos and pyramids' },
    { name: 'Canada', hint: 'Known for maple syrup' },
    { name: 'Japan', hint: 'Land of the Rising Sun' },
    { name: 'Egypt', hint: 'Home of the pyramids' },
    { name: 'Greece', hint: 'Birthplace of democracy' },
    { name: 'France', hint: 'Home of the Eiffel Tower' },
    { name: 'Germany', hint: 'Famous for Oktoberfest' },
    { name: 'Russia', hint: 'Largest country in the world' },
    { name: 'Australia', hint: 'Land of kangaroos' },
    { name: 'England', hint: 'Home of Big Ben' },
    { name: 'Argentina', hint: 'Land of tango' },
    { name: 'Turkey', hint: 'Bridges Europe and Asia' },
    { name: 'Thailand', hint: 'Land of Smiles' },
    { name: 'Peru', hint: 'Home of Machu Picchu' },
    { name: 'Korea', hint: 'Land of K-pop' },
    { name: 'Poland', hint: 'Famous for pierogi' },
    { name: 'Sweden', hint: 'Land of IKEA' },
    { name: 'Norway', hint: 'Land of fjords' },
    { name: 'Denmark', hint: 'Home of LEGO' },
    { name: 'Portugal', hint: 'Famous for Port wine' },
    { name: 'Ireland', hint: 'The Emerald Isle' },
    { name: 'Scotland', hint: 'Land of kilts' },
    { name: 'Wales', hint: 'Land of dragons' },
    { name: 'Cuba', hint: 'Famous for cigars' },
    { name: 'Jamaica', hint: 'Home of reggae' }
  ],
  intermediate: [
    { name: 'Morocco', hint: 'Famous for its ancient medinas' },
    { name: 'Vietnam', hint: 'Known for Ha Long Bay' },
    { name: 'Croatia', hint: 'Has over thousand islands' },
    { name: 'Austria', hint: 'Birthplace of Mozart' },
    { name: 'Finland', hint: 'Home of Santa Claus' },
    { name: 'Ukraine', hint: 'Known for vast wheat fields' },
    { name: 'Romania', hint: 'Home of Dracula\'s castle' },
    { name: 'Bulgaria', hint: 'Famous for rose valleys' },
    { name: 'Hungary', hint: 'Known for thermal baths' },
    { name: 'Slovakia', hint: 'Heart of Europe' },
    { name: 'Slovenia', hint: 'Has dragon bridges' },
    { name: 'Estonia', hint: 'Most digital society' },
    { name: 'Latvia', hint: 'Known for Art Nouveau' },
    { name: 'Lithuania', hint: 'Has a Hill of Crosses' },
    { name: 'Belarus', hint: 'Last European dictatorship' },
    { name: 'Moldova', hint: 'Famous for wine cellars' },
    { name: 'Georgia', hint: 'Birthplace of wine' },
    { name: 'Armenia', hint: 'Land of monasteries' },
    { name: 'Azerbaijan', hint: 'Land of fire' },
    { name: 'Kazakhstan', hint: 'Largest landlocked country' },
    { name: 'Mongolia', hint: 'Land of Genghis Khan' },
    { name: 'Malaysia', hint: 'Has twin towers' },
    { name: 'Philippines', hint: 'Country of 7000 islands' },
    { name: 'Indonesia', hint: 'Largest archipelago' },
    { name: 'Cambodia', hint: 'Home of Angkor Wat' },
    { name: 'Myanmar', hint: 'Land of golden pagodas' },
    { name: 'Nepal', hint: 'Home of Mount Everest' },
    { name: 'Bangladesh', hint: 'Land of rivers' },
    { name: 'Sri Lanka', hint: 'Pearl of Indian Ocean' },
    { name: 'Maldives', hint: 'Nation of atolls' }
  ],
  advanced: [
    { name: 'Kyrgyzstan', hint: 'Land of celestial mountains' },
    { name: 'Bhutan', hint: 'Land of the Thunder Dragon' },
    { name: 'Mauritania', hint: 'Has the Eye of the Sahara' },
    { name: 'Vanuatu', hint: 'Known for active volcanoes' },
    { name: 'Suriname', hint: 'Has vast rainforest coverage' },
    { name: 'Djibouti', hint: 'Located in the Horn of Africa' },
    { name: 'Tajikistan', hint: 'Has the Pamir Mountains' },
    { name: 'Eritrea', hint: 'Borders the Red Sea' },
    { name: 'Comoros', hint: 'Island nation near Madagascar' },
    { name: 'Tuvalu', hint: 'Pacific island nation' },
    { name: 'Kiribati', hint: 'Spans all four hemispheres' },
    { name: 'Palau', hint: 'Has jellyfish lakes' },
    { name: 'Nauru', hint: 'Smallest island nation' },
    { name: 'Tonga', hint: 'Only Pacific kingdom' },
    { name: 'Lesotho', hint: 'Kingdom in the sky' },
    { name: 'Eswatini', hint: 'Former Swaziland' },
    { name: 'Burundi', hint: 'Heart of Africa' },
    { name: 'Rwanda', hint: 'Land of thousand hills' },
    { name: 'Malawi', hint: 'Warm heart of Africa' },
    { name: 'Botswana', hint: 'Land of diamonds' },
    { name: 'Namibia', hint: 'Has red sand dunes' },
    { name: 'Mozambique', hint: 'Has ancient rock art' },
    { name: 'Zambia', hint: 'Has Victoria Falls' },
    { name: 'Zimbabwe', hint: 'Has Great Zimbabwe ruins' },
    { name: 'Gabon', hint: 'Has rainforest elephants' },
    { name: 'Chad', hint: 'Has Lake Chad' },
    { name: 'Niger', hint: 'Has uranium mines' },
    { name: 'Mali', hint: 'Has ancient Timbuktu' },
    { name: 'Burkina Faso', hint: 'Land of upright people' },
    { name: 'Benin', hint: 'Home of voodoo' }
  ]
};