export type Course = 'starter' | 'main' | 'dessert';

export interface MenuItem {
  id: number;
  name: string;
  course: Course;
  price: number;
}
