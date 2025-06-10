import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateMeetCode() {
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  const randomSegment = (length: number) =>
    Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');

  return `${randomSegment(3)}-${randomSegment(4)}-${randomSegment(3)}`;
}

console.log(generateMeetCode());