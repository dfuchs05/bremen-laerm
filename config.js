export const BREMEN_CENTER = [53.0793, 8.8017];
export const BREMEN_BBOX = { minLat: 53.010, maxLat: 53.230, minLng: 8.480, maxLng: 8.995 };

export const CATEGORIES = [
  { id: 'verkehr', label: 'Verkehr' },
  { id: 'baustelle', label: 'Baustelle' },
  { id: 'gastronomie', label: 'Gastronomie/Events' },
  { id: 'industrie', label: 'Industrie' },
  { id: 'sonstiges', label: 'Sonstiges' },
];

export const LEVELS = {
  1: 'laut',
  2: 'sehr laut',
  3: 'unerträglich',
};

export const categoryLabel = (id) => CATEGORIES.find((c) => c.id === id)?.label ?? id;

export function inBremen(lat, lng) {
  const b = BREMEN_BBOX;
  return lat >= b.minLat && lat <= b.maxLat && lng >= b.minLng && lng <= b.maxLng;
}

export const ERROR_MESSAGES = {
  outside_bremen: 'Dieser Ort liegt außerhalb von Bremen. Meldungen sind nur im Stadtgebiet möglich.',
  rate_limit_nearby: 'Du hast hier in der letzten halben Stunde schon etwas gemeldet. Bitte warte etwas.',
  rate_limit_daily: 'Du hast heute schon sehr viel gemeldet. Bitte versuche es morgen wieder.',
  invalid_level: 'Bitte wähle aus, wie laut es ist.',
  invalid_category: 'Bitte wähle die Art des Lärms.',
  not_found: 'Diese Meldung gibt es nicht mehr.',
};

export const errorMessage = (code) => ERROR_MESSAGES[code] ?? 'Etwas ist schiefgelaufen. Bitte versuche es später erneut.';
