import { Image } from './image';
import { TrackingLinks } from './trackingLinks';

export class Product {
    description: string;
    image: Image;
    manufacturer: string;
    merchantCategory: string;
    name: string;
    price: number;
    trackingLinks: TrackingLinks;
}