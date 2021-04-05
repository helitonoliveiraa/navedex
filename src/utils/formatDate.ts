import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt';

export function formatDistanceBetweenDates(date: string): string {
  return formatDistanceToNow(new Date(date), {
    locale: ptBR,
    addSuffix: true,
  });
}

export function formatAge(age_date: string): string {
  return formatDistanceToNow(new Date(age_date), {
    locale: ptBR,
  })
    .split(' ')
    .splice(-2)
    .join(' ');
}
