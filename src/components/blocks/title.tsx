type TitleProps = { label: string };

export const Title = ({ label }: TitleProps) => {
  return <h1 className="font-medium">{label}</h1>;
};
