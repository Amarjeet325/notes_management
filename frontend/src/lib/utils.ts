import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type Note = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};
