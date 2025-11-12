export interface CommonVariantProps {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

/**
 * Props for components that can be rendered as a child of another component.
 */
export interface AsChildProp {
  /**
   * If true, the component will be rendered as a child of another component.
   * This is useful for composing components together.
   * @default false
   */
  asChild?: boolean;
}

/**
 * Props for components that support ARIA attributes.
 * These attributes are passed directly to the underlying HTML element.
 */
export interface WithAriaProps {
  /**
   * Defines a string value that labels the current element.
   */
  "aria-label"?: string;
  /**
   * Identifies the element (or elements) that describes the object.
   */
  "aria-describedby"?: string;
  /**
   * Identifies the element (or elements) that provides a detailed description for the object.
   */
  "aria-details"?: string;
  /**
   * Indicates whether an element is available or disabled.
   */
  "aria-disabled"?: boolean;
  /**
   * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
   */
  "aria-checked"?: boolean | "mixed";
  /**
   * Indicates the current "pressed" state of a toggle button.
   */
  "aria-pressed"?: boolean | "mixed";
  /**
   * Indicates the current "selected" state of a selectable item.
   */
  "aria-selected"?: boolean;
  /**
   * Indicates whether the element is expanded or collapsed.
   */
  "aria-expanded"?: boolean;
  /**
   * Indicates whether the element is hidden or not.
   */
  "aria-hidden"?: boolean;
  /**
   * Indicates the current value of a range widget.
   */
  "aria-valuenow"?: number;
  /**
   * Indicates the minimum value in a range.
   */
  "aria-valuemin"?: number;
  /**
   * Indicates the maximum value in a range.
   */
  "aria-valuemax"?: number;
  /**
   * Defines the human readable text alternative of aria-valuenow for a range widget.
   */
  "aria-valuetext"?: string;
  /**
   * Indicates whether user input is required on an element before a form can be submitted.
   */
  "aria-required"?: boolean;
  /**
   * Indicates whether an input has entered the user's desired range.
   */
  "aria-invalid"?: boolean | "grammar" | "spelling";
  /**
   * Indicates the orientation of a component.
   */
  "aria-orientation"?: "horizontal" | "vertical";
  /**
   * Indicates the current sort direction.
   */
  "aria-sort"?: "ascending" | "descending" | "none" | "other";
  /**
   * Indicates the current level of a component in a hierarchical structure.
   */
  "aria-level"?: number;
  /**
   * Indicates whether an element is modal when displayed.
   */
  "aria-modal"?: boolean;
  /**
   * Indicates whether an element's value is editable.
   */
  "aria-readonly"?: boolean;
  /**
   * Indicates the number of items in the current set of listitems or treeitems when not all items in the set are present in the DOM.
   */
  "aria-setsize"?: number;
  /**
   * Indicates an element's number or position in the current set of listitems or treeitems.
   */
  "aria-posinset"?: number;


  /**
   * Indicates the current state of a live region.
   */
  "aria-live"?: "off" | "assertive" | "polite";
  /**
   * Indicates whether the entire region is relevant or only parts of it.
   */
  "aria-relevant"?: "additions" | "all" | "removals" | "text";
  /**
   * Indicates whether an element is a section header.
   */
  "aria-labelledby"?: string;
  /**
   * Identifies the currently active element when a composite widget manages focus to its descendants.
   */
  "aria-activedescendant"?: string;
  /**
   * Indicates whether an element has a popup context menu or sub-level menu.
   */
  "aria-haspopup"?: boolean | "menu" | "listbox" | "tree" | "grid" | "dialog";
  /**
   * Indicates the number of columns in a table or grid.
   */
  "aria-colcount"?: number;
  /**
   * Indicates the number of rows in a table or grid.
   */
  "aria-rowcount"?: number;
  /**
   * Indicates an element's column index or position within a row.
   */
  "aria-colindex"?: number;
  /**
   * Indicates an element's row index or position within a table or grid.
   */
  "aria-rowindex"?: number;
  /**
   * Indicates the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
   */
  "aria-colspan"?: number;
  /**
   * Indicates the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
   */
  "aria-rowspan"?: number;
}

/**
 * A generic type for polymorphic components, allowing them to be rendered as different HTML elements or React components.
 * @template T The type of the component or HTML element.
 * @template P The type of the custom props.
 */
export type PolymorphicProps<T extends React.ElementType = "div", P = {}> = {
  /**
   * The component or HTML element to render.
   * @default "div"
   */
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, keyof P>;