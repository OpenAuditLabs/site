# Navbar Component Documentation

## Overview

The `Navbar` component provides a responsive, accessible, and user-friendly navigation bar for the application. It is implemented as a functional React component using Next.js and leverages modern UI/UX best practices to ensure seamless navigation across both desktop and mobile devices.

## Features

- **Responsive Design:** Adapts layout for desktop and mobile screens using Tailwind CSS utility classes.
- **Sticky Positioning:** Remains visible at the top of the viewport as users scroll.
- **Accessible Navigation:** Includes proper ARIA labels and keyboard focus styles for improved accessibility.
- **Mobile Drawer:** Implements a slide-in drawer menu for mobile devices, toggled by a menu button.
- **Dynamic Links:** Navigation links are defined in a single array and rendered dynamically for maintainability.

## Implementation Details

### Desktop Navigation

- On medium and larger screens (`md` breakpoint and up), navigation links are displayed horizontally in a flex container.
- Each link uses the Next.js `Link` component for client-side routing and includes hover effects for better user experience.

### Mobile Navigation

- On smaller screens, the navigation links are hidden and replaced by a menu button (hamburger icon).
- When the menu button is clicked, a state variable (`drawerOpen`) is set to `true`, displaying a slide-in drawer from the left.
- The drawer contains vertically stacked navigation links and a close button (X icon).
- Clicking a link or the overlay outside the drawer closes the menu.

### Accessibility

- All interactive elements (menu and close buttons) include `aria-label` attributes for screen readers.
- Focus styles are provided for keyboard navigation.

## API Reference

This component does not accept any props. All navigation links are defined internally in the `navLinks` array. To customize the navigation, modify the `navLinks` array within the component.

## Usage Example

```tsx
import Navbar from "@/components/layout/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
```

## Best Practices

- Keep the `navLinks` array up to date with the application's main sections.
- Ensure link labels are descriptive for accessibility.
- Test navigation on both desktop and mobile devices to verify responsiveness and usability.

## Related Components

- `Header` – For branding or additional top-level navigation
- `Sidebar` – For applications requiring persistent side navigation

---

> **Note:** The `Navbar` component is designed for extensibility. For advanced use cases, consider adding support for dropdown menus, user authentication links, or theme toggles as needed.
