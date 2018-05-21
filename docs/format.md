# format

Format a number with decimal separator and thousands grouping separator. The function accepts three arguments:

- input, the number to be formatted
- decimalCount, the number of decimals, defaults to 2
- decimalPoint, the character used to separate the decimals, defaults to '.'
- thousandsSeperator, the character used for separating thousands, defaults to ','

## Definition:
```typescript
format(input: number, decimalCount?: number, decimalPoint?: string, thousandsSeperator?: string): string;
```

## Usage:
```javascript
import { format } from 'dist/format';

const input = 2747.6323434;
const output = format(input);

// output = '2,747.63'
```
