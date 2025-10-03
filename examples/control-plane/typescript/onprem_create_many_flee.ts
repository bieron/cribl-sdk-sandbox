#!/usr/bin/env node
import { CriblControlPlane } from 'cribl-control-plane';
import { ProductsCore } from 'cribl-control-plane/models';
import dotenv from 'dotenv';
// Load environment variables
dotenv.config();

async function main(): Promise<number|undefined> {
    console.log('Create Many Fleets');
    console.log('-'.repeat(40));

    const serverURL = process.env.CRIBL_SERVER_URL || 'http://localhost:9000/api/v1';
    let client = new CriblControlPlane({ serverURL });
        
    // Authenticate with username/password to get token
    console.log('Authenticating with username/password...');
    const authResponse = await client.auth.tokens.get({ username: 'admin', password: 'admin' });
    const token = authResponse.token;
    console.log(`Authenticated with on-prem server, token: ${token}`);

    // Create authenticated SDK client with bearer token
    client = new CriblControlPlane({ 
        serverURL, 
        security: { bearerAuth: token }
    });
    let size = parseInt(process.env.SIZE!);
    size = isNaN(size) ? 500 : size;

    console.log({serverURL, size}, 'hopefully you enabled lazy-config-helpers :)');

    const start = Date.now();
    for (let i=0; i<size; i++) {
        await client.groups.create({ product: ProductsCore.Edge, configGroup: {id: `fleet${i}`}});
    }
    const end = Date.now();
    console.log('Done', {size, durationS: (end - start)/1000});
    return 0;
}

main()
  .catch(err => {console.error('Failed:', err); return 2})
  .then(rv => process.exit(rv ?? 0));
