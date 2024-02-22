interface CardDeliveryProps {
  subtitle: string;
  description: string;
  image: string;
  children: React.ReactNode;
}

export const CardDelivery: React.FC<CardDeliveryProps> = ({
  subtitle,
  description,
  image,
  children,
}) => {
  return (
    <div>
      <h2>hola</h2>
    </div>
  );
};
