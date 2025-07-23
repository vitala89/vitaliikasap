export function applyPushedEffect(event: MouseEvent | TouchEvent): void {
  const element = event.currentTarget as HTMLElement;
  element.classList.add('pushed-effect');
}

export function removePushedEffect(event: MouseEvent | TouchEvent): void {
  const element = event.currentTarget as HTMLElement;
  element.classList.remove('pushed-effect');
}

