# InputSplunkAuthToken

## Example Usage

```typescript
import { InputSplunkAuthToken } from "cribl-control-plane/models";

let value: InputSplunkAuthToken = {
  token: "<value>",
  description:
    "even dental wonderfully tragic rue precious excepting yippee phooey",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `token`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | Shared secrets to be provided by any Splunk forwarder. If empty, unauthorized access is permitted. |
| `description`                                                                                      | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |