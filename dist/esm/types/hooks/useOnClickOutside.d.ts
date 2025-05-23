import { type RefObject } from 'react';
type Handler = (event: MouseEvent) => void;
declare function useOnClickOutside<T extends HTMLElement = HTMLElement>(ref: RefObject<T>, handler: Handler, mouseEvent?: 'mousedown' | 'mouseup'): void;
export default useOnClickOutside;
