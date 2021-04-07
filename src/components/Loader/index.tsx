import LoaderSpinner from 'react-loader-spinner';

type LoaderProps = {
  width?: string | number;
  height?: string | number;
  color?: string;
  type?: 'Puff' | 'BallTriangle';
};

export function Loader({
  width,
  height,
  color,
  type,
}: LoaderProps): JSX.Element {
  return (
    <LoaderSpinner
      type={type || 'Puff'}
      color={color || '#ffffff'}
      height={height || 20}
      width={width || 20}
      timeout={0}
    />
  );
}
