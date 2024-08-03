declare module '@/utils/cursor.js' {
    export default function cursorInit(): Cursor;
  
    class Cursor {
      constructor();
      pos: {
        curr: { x: number; y: number } | null;
        prev: { x: number; y: number } | null;
      };
      pt: string[];
      cursor: HTMLDivElement;
      scr: HTMLStyleElement;
  
      move(left: number, top: number): void;
      create(): void;
      refresh(): void;
      init(): void;
      render(): void;
    }
  }