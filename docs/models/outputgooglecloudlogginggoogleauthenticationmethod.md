# OutputGoogleCloudLoggingGoogleAuthenticationMethod

Choose Auto to use Google Application Default Credentials (ADC), Manual to enter Google service account credentials directly, or Secret to select or create a stored secret that references Google service account credentials.

## Example Usage

```typescript
import { OutputGoogleCloudLoggingGoogleAuthenticationMethod } from "cribl-control-plane/models";

let value: OutputGoogleCloudLoggingGoogleAuthenticationMethod = "secret";
```

## Values

```typescript
"auto" | "manual" | "secret"
```