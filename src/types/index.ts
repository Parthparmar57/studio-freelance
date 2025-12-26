export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  link: string;
}

export interface PortfolioItem {
  id: string;
  category: string;
  image: string;
  title: string;
  description?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  service: string;
  rating: number;
  text: string;
  image?: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}
