# Refactoring and Modules in TypeScript

## What is Refactoring?

Refactoring is the process of restructuring existing code without changing its external behavior. The goal is to improve the code's structure, readability, and maintainability.

### Importance of Refactoring

- **Improves readability:** Clean code is easier to understand and maintain.
- **Reduces complexity:** Simplifies logic and structure.
- **Makes code reusable:** Encourages modular and reusable components.
- **Helps find bugs:** Cleaner code is less error-prone.

### Tips for Refactoring

- Rename variables and functions for clarity.
- Split large functions into smaller, focused ones.
- Remove duplicate code.
- Use consistent naming conventions.
- Write and run tests to ensure behavior doesn't change.

**Example: Refactoring a function**

Before:
```typescript
function calculate(a: number, b: number, type: string): number {
  if (type === "sum") {
    return a + b;
  } else if (type === "subtract") {
    return a - b;
  }
  return 0;
}
```

After:
```typescript
import { sum } from './math';

export function sum(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}
```