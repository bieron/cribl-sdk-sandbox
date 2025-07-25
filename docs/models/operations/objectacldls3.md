# ObjectACLDlS3

Object ACL to assign to uploaded objects

## Example Usage

```typescript
import { ObjectACLDlS3 } from "cribl-control-plane/models/operations";

let value: ObjectACLDlS3 = "aws-exec-read";
```

## Values

```typescript
"private" | "public-read" | "public-read-write" | "authenticated-read" | "aws-exec-read" | "bucket-owner-read" | "bucket-owner-full-control"
```