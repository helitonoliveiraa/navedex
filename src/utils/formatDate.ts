import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt';

export function formatDistanceBetweenDates(date: string): string {
  return formatDistanceToNow(new Date(date), {
    locale: ptBR,
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

export function formatDateToPtBR(date: string): string {
  return new Intl.DateTimeFormat('pt-BR').format(new Date(date));
}
