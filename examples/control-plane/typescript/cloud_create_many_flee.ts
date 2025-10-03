#!/usr/bin/env node
import { CriblControlPlane } from 'cribl-control-plane';
import { ProductsCore } from 'cribl-control-plane/models';
import dotenv from 'dotenv';
// Load environment variables
dotenv.config();

async function main(): Promise<number|undefined> {
    console.log('Create Many Fleets');
    console.log('-'.repeat(40));

    // Check if credentials are properly set
    const missing = ['CRIBL_ORG_ID', 'CRIBL_CLIENT_ID', 'CRIBL_CLIENT_SECRET'].filter(val => !process.env[val]);
    if (missing.length > 0) {
        console.error('Missing credentials! Set these environment variables', missing);
        console.error('\nCopy .env.example to .env and fill in your values');
        return 1;
    }
    
    // Get credentials from environment with placeholders
    const orgId = process.env.CRIBL_ORG_ID!
    const clientID = process.env.CRIBL_CLIENT_ID!
    const clientSecret = process.env.CRIBL_CLIENT_SECRET!
    const workspace = process.env.CRIBL_WORKSPACE_NAME || 'main';
    const domain = process.env.CRIBL_DOMAIN || 'cribl.cloud';
    let size = parseInt(process.env.SIZE!);
    size = isNaN(size) ? 500 : size;

    console.log({orgId, workspace, domain, size});
    
    // Create client
    const client = new CriblControlPlane({
        serverURL: `https://${workspace}-${orgId}.${domain}/api/v1`,
        security: {
            clientOauth: {
                clientID,
                clientSecret,
                tokenURL: `https://login.${domain}/oauth/token`,
                audience: `https://api.${domain}`
            }
        }
    });

    const start = Date.now();
    for (let i=0; i<size; i++) {
        await client.groups.create({ product: ProductsCore.Edge, configGroup: {id: `fleet${i}`}});
    }
    const end = Date.now();
    console.log('Done', {size, duration: end - start});
    return 0;
}

main()
  .catch(err => {console.error('Failed:', err); return 2})
  .then(rv => process.exit(rv ?? 0));