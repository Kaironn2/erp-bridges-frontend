export function formatPhone(phone: string | null | undefined): string {
  if (!phone) {
    return '—';
  }

  const onlyDigits = phone.replace(/\D/g, '');

  if (onlyDigits.length === 11) {
    return onlyDigits.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }
  if (onlyDigits.length === 10) {
    return onlyDigits.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  }

  return phone;
}
