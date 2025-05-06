export interface ProductCardProps {
  icon: string;
  title: string;
  description: string;
  isActive?: boolean;
  onClick?: () => void;
}
