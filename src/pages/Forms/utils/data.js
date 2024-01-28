import { IconAdvanced, IconArcade, IconPro } from '../../../assets/images';

const stepItem = [
  {
    title: 'YOUR INFO',
    value: 1,
  },
  {
    title: 'SELECT PLAN',
    value: 2,
  },
  {
    title: 'ADD-ONS',
    value: 3,
  },
  {
    title: 'SUMMARY',
    value: 4,
  },
];

const plans = [
  {
    name: 'Arcade',
    priceMonthly: 9,
    priceYear: 90,
    img: IconArcade,
  },
  {
    name: 'Advanced',
    priceMonthly: 12,
    priceYear: 120,
    img: IconAdvanced,
  },
  {
    name: 'Pro',
    priceMonthly: 15,
    priceYear: 150,
    img: IconPro,
  },
];

const addOnsService = [
  {
    id: 1,
    name: 'Online service',
    desc: 'Access to multiplayer games',
    priceMonthly: 1,
    priceYear: 10,
  },
  {
    id: 2,
    name: 'Larger storage',
    desc: 'Extra 1TB of cloud save',
    priceMonthly: 2,
    priceYear: 20,
  },
  {
    id: 3,
    name: 'Customizable profile',
    desc: 'Custom theme on your profile',
    priceMonthly: 2,
    priceYear: 20,
  },
];

export { stepItem, plans, addOnsService };
