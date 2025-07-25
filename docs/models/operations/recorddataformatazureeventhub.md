# RecordDataFormatAzureEventhub

Format to use to serialize events before writing to the Event Hubs Kafka brokers

## Example Usage

```typescript
import { RecordDataFormatAzureEventhub } from "cribl-control-plane/models/operations";

let value: RecordDataFormatAzureEventhub = "json";
```

## Values

```typescript
"json" | "raw"
```