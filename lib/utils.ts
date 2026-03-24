/**
 * Utility Functions
 * 
 * Hilfsfunktionen für das gesamte Projekt
 */

/**
 * Kombiniert Klassen-Strings (einfache Version ohne tailwind-merge)
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Verzögert die Ausführung (für Debounce/Throttle)
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Formatiert eine Telefonnummer für tel: Links
 */
export function formatPhoneNumber(phone: string): string {
  return phone.replace(/\s/g, '');
}

/**
 * Scrollt sanft zu einem Element
 */
export function scrollToElement(elementId: string): void {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
