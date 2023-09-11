import { Client, Environment } from 'square'
import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' });
const token = process.env.SQUARE_ACCESS_TOKEN;

const client = new Client({
  environment: Environment.Production,
  accessToken: token,
})
async function getDetailedItemData() {
  try {
    // Get the initial list of catalog items
    const listResponse = await client.catalogApi.listCatalog();

    if (listResponse && listResponse.result && listResponse.result.objects) {
      // Filter for items with type 'ITEM'
      const itemIds = listResponse.result.objects
        .filter(obj => obj.type === 'ITEM')
        .map(obj => obj.id);

      // For each itemId, retrieve detailed data using retrieveCatalogObject
      const detailedItemData = [];

      for (const itemId of itemIds) {
        const itemResponse = await client.catalogApi.retrieveCatalogObject(itemId);
        if (itemResponse && itemResponse.result && itemResponse.result.object && itemResponse.result.object.itemData) {
          detailedItemData.push(itemResponse.result.object.itemData);
        }
      }

      console.log(detailedItemData);  // This will now log the detailed itemData for each item of type 'ITEM'
    } else {
      console.log("Unexpected list response structure.");
    }
    
  } catch(error) {
    console.log(error);
  }
}

getDetailedItemData();
