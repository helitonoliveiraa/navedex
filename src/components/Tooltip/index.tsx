import { Container } from './styles';

type TooltipProp = {
  title: string;
  className?: string;
  children: React.ReactNode;
};

export function Tooltip({
  title,
  className,
  children,
}: TooltipProp): JSX.Element {
  return (
    <Container className={className} data-title={title}>
      {children}
    </Container>
  );
}
