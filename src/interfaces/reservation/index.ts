import { TableInterface } from 'interfaces/table';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ReservationInterface {
  id?: string;
  name: string;
  contact_information: string;
  date: any;
  time: any;
  number_of_guests: number;
  table_id: string;
  customer_id: string;
  created_at?: any;
  updated_at?: any;

  table?: TableInterface;
  user?: UserInterface;
  _count?: {};
}

export interface ReservationGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  contact_information?: string;
  table_id?: string;
  customer_id?: string;
}
