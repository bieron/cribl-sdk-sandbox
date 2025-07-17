# Sample

## Example Usage

```typescript
import { Sample } from "cribl-control-plane/models";

let value: Sample = {
  sample: "<value>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `sample`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `eventsPerSec`                                                                   | *number*                                                                         | :heavy_minus_sign:                                                               | Maximum number of events to generate per second per Worker Node. Defaults to 10. |