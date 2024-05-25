import { Client } from "@elastic/elasticsearch";

const esClient = new Client({ node: process.env.ES_URI || 'http://localhost:9200' });

async function _createIndex() {
  // Implementation of index creation
  console.log("Creating index...");
  // Add actual logic here
}

async function _putSettings() {
  // Implementation of settings update
  console.log("Putting settings...");
  // Add actual logic here
}

async function _putMapping() {
  // Implementation of mapping update
  console.log("Putting mapping...");
  // Add actual logic here
}

export async function _connectToES(index) {
    const isNonProd = process.env.NODE_ENV !== 'prod';
    const esUri = process.env.ES_URI || 'http://localhost:9200';
    const esClient = new Client({ node: esUri });

    const indexFound = await esClient.indices.exists({ index });
    if (!indexFound.body) { // Adjusted to check the body property
        await _createIndex();
        await _putSettings();
        await _putMapping();
    }
}