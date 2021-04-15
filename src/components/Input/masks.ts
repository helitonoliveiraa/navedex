import { FormEvent } from 'react';

export function dateMask(
  event: FormEvent<HTMLInputElement>,
): FormEvent<HTMLInputElement> {
  let { value } = event.currentTarget;

  value = value.replace(/^\D/gi, '');
  value = value.replace(/^(\d{2})(\d{2})(\d{4})/g, '$1/$2/$3');

  // eslint-disable-next-line no-param-reassign
  event.currentTarget.value = value;

  return event;
}
