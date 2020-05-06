import {UserCategory} from './components/product-list-layout/product-list-layout.component';

export class User {
  userId: string;
  userName: string;
  email: string;
  password: string;
  userCategory?: UserCategory;
}
