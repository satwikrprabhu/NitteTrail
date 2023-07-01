import CSE3PDF from '../components/pages/CSE/3rd Sem/CSE3PDF';

const routes = [
  {
    path: '/cse/3/pdf',
    exact: true,
    component: CSE3PDF
  },
  {
    path: '/cse/3/hand',
    exact: true,
    component: CSE3Hand
  },
  {
    path: '/cse/3/text',
    exact: true,
    component: CSE3Text
  },
  {
    path: '/cse/3/soft',
    exact: true,
    component: CSE3Foft
  },
  {
    path: '/cse/3/lab',
    component: CSE3Lab
  },
];

export default routes;