import { MenuItem } from './types';

export const calculateAveragePrice = (menu: MenuItem[]) => {
  if (menu.length === 0) return 0;
  const total = menu.reduce((sum, item) => sum + item.price, 0);
  return parseFloat((total / menu.length).toFixed(2));
};

export const filterByCourse = (menu: MenuItem[], course: string) =>
  menu.filter(item => item.course === course);
