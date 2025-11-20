#!/usr/bin/env node
import { GeniusMcpServer, ApiKeyManager, McpFunction } from '@geniusagents/mcp';
import { GetDisruptionsFunction } from "./functions/getdisruptions.function.js";
import { GetTravelAdviceFunction } from "./functions/gettraveladvice.function.js";
import { GetOVFietsFunction } from "./functions/getovfiest.function.js";
import { GetStationInfoFunction } from "./functions/getstationinfo.function.js";
import { GetCurrentTimeFunction } from "./functions/getcurrenttime.function.js";
import { GetArrivalsFunction } from "./functions/getarrivals.function.js";
import { GetPricesFunction } from "./functions/getprices.function.js";

// Initialize the ApiKeyManager with the MCP Name for the Genius Dashboard
ApiKeyManager.initialize({
    mcpName: "NS",
    dashboardUrl: process.env.DASHBOARD_URL || "https://dashboard.geniusagents.nl/api/mcp"
});

const functions: McpFunction[] = [
    new GetDisruptionsFunction(),
    new GetTravelAdviceFunction(),
    new GetOVFietsFunction(),
    new GetStationInfoFunction(),
    new GetCurrentTimeFunction(),
    new GetArrivalsFunction(),
    new GetPricesFunction()
];

const server = new GeniusMcpServer("NS MCP Service", 3003, functions);
server.run().catch(console.error);