# Lesson 3: Table with Multiple Counters

## Goal
Learn `map()` and array state management.

## Task
Create a table with 5 rows, each row has a label and its own counter button.

## Requirements
- Use an array state to store 5 counter values (start with `[0, 0, 0, 0, 0]`)
- Use `map()` to render each counter as a table row
- Each row must have:
  - A label (e.g., "Counter 1", "Counter 2", etc.)
  - The current count value
  - A button to increment that specific counter
- Keep the existing `MyButton` component or create a new row component

## Hints
- Start with `useState<number[]>([0, 0, 0, 0, 0])`
- Use `map()` with index to iterate over the array
- Each counter needs its own update function that updates the specific index
- Use `setCounters(prev => [...])` to update array state correctly

## Example Structure
```
| Label      | Count | Button |
|------------|-------|--------|
| Counter 1  | 0     | [Click]|
| Counter 2  | 0     | [Click]|
| Counter 3  | 0     | [Click]|
| Counter 4  | 0     | [Click]|
| Counter 5  | 0     | [Click]|
```
