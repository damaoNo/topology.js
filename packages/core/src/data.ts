
export enum HoverType {
  None,
  LineFrom,
  LineTo,
  LineAnchor,
  NodeAnchor,
  Line,
  Node,
  Resize,
  Rotate,
  LineAnchorPrev,
  LineAnchorNext
}

export enum HotkeyType {
  None,
  Translate,
  Select,
  Resize,
  Anchor
}

export enum MouseRight {
  None,
  TranslateOrContextMenu,
  Translate
}

export enum Direction {
  None = -1,
  Up,
  Right,
  Bottom,
  Left
}

export const defaultCursors = ['nw-resize', 'ne-resize', 'se-resize', 'sw-resize'];
export const rotatedCursors = ['n-resize', 'e-resize', 's-resize', 'w-resize'];

export const defaultDrawLineFns = ['curve', 'ployline', 'line', 'curveMind'];
