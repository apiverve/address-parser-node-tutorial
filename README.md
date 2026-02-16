# Street Address Parser | APIVerve API Tutorial

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Build](https://img.shields.io/badge/Build-Passing-brightgreen.svg)]()
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-4-000000)](https://expressjs.com)
[![APIVerve | Street Address Parser](https://img.shields.io/badge/APIVerve-Street_Address_Parser-purple)](https://apiverve.com/marketplace/streetaddressparser?utm_source=github&utm_medium=tutorial&utm_campaign=address-parser-node-tutorial)

A web app that parses street addresses into structured components. Enter any US address and get the street number, name, city, state, and ZIP code.

![Screenshot](https://raw.githubusercontent.com/apiverve/address-parser-node-tutorial/main/screenshot.jpg)

---

### Get Your Free API Key

This tutorial requires an APIVerve API key. **[Sign up free](https://dashboard.apiverve.com?utm_source=github&utm_medium=tutorial&utm_campaign=address-parser-node-tutorial)** - no credit card required.

---

## Features

- Parse any US street address
- Extract street number and name
- Identify city, state, ZIP code
- Clean dark theme UI
- Example addresses included
- Real-time parsing

## Quick Start

1. **Clone this repository**
   ```bash
   git clone https://github.com/apiverve/address-parser-node-tutorial.git
   cd address-parser-node-tutorial
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your API key**

   Open `.env` and add your API key:
   ```
   API_KEY=your-api-key-here
   ```

4. **Start the server**
   ```bash
   npm start
   ```

5. **Open in browser**

   Visit http://localhost:3000 and start parsing addresses!

## Project Structure

```
address-parser-node-tutorial/
├── server.js           # Express server
├── public/
│   └── index.html      # Frontend UI
├── package.json        # Dependencies
├── .env                # Environment variables
├── screenshot.jpg      # Preview image
├── LICENSE             # MIT license
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## How It Works

1. User enters a street address
2. Server sends request to API
3. API parses address into components
4. Display structured address data

### The API Call

```javascript
const response = await fetch(`https://api.apiverve.com/v1/streetaddressparser?address=1600 Amphitheatre Parkway, Mountain View, CA 94043`, {
  method: 'GET',
  headers: {
    'x-api-key': API_KEY
  }
});
```

## API Reference

**Endpoint:** `GET https://api.apiverve.com/v1/streetaddressparser`

**Query Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `address` | string | Yes | The street address to parse |

**Example Response:**

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "address": "1600 Amphitheatre Parkway, Mountain View, CA 90210",
    "parsed": {
      "streetNumber": "1600",
      "streetType": "Pkwy",
      "streetAddress": "Amphitheatre",
      "cityName": "Mountain View",
      "stateName": "CA",
      "zipCode": "90210"
    }
  }
}
```

## Parsed Fields

| Field | Description |
|-------|-------------|
| `streetNumber` | House or building number |
| `streetAddress` | Street name |
| `streetType` | Street type (St, Ave, Blvd, Pkwy, etc.) |
| `cityName` | City name |
| `stateName` | State abbreviation |
| `zipCode` | ZIP code |

## Example Addresses

| Address | Description |
|---------|-------------|
| 1600 Amphitheatre Parkway, Mountain View, CA 94043 | Google HQ |
| 350 Fifth Avenue, New York, NY 10118 | Empire State Building |
| 1 Infinite Loop, Cupertino, CA 95014 | Apple HQ |
| 233 S Wacker Dr, Chicago, IL 60606 | Willis Tower |

## Customization Ideas

- Add address validation
- Geocode parsed addresses
- Bulk address parsing
- Export to CSV/JSON
- Address autocomplete
- Map visualization

## Related APIs

Explore more APIs at [APIVerve](https://apiverve.com/marketplace?utm_source=github&utm_medium=tutorial&utm_campaign=address-parser-node-tutorial):

- [Geocode](https://apiverve.com/marketplace/geocode?utm_source=github&utm_medium=tutorial&utm_campaign=address-parser-node-tutorial) - Convert addresses to coordinates
- [Reverse Geocode](https://apiverve.com/marketplace/reversegeocode?utm_source=github&utm_medium=tutorial&utm_campaign=address-parser-node-tutorial) - Convert coordinates to addresses
- [ZIP Code Lookup](https://apiverve.com/marketplace/zipcodeslookup?utm_source=github&utm_medium=tutorial&utm_campaign=address-parser-node-tutorial) - Look up ZIP code details

## Free Plan Note

This tutorial works with the free APIVerve plan. Some APIs may have:
- **Locked fields**: Premium response fields return `null` on free plans
- **Ignored parameters**: Some optional parameters require a paid plan

The API response includes a `premium` object when limitations apply. [Upgrade anytime](https://dashboard.apiverve.com/plans) to unlock all features.

## License

MIT - see [LICENSE](LICENSE)

## Links

- [Get API Key](https://dashboard.apiverve.com?utm_source=github&utm_medium=tutorial&utm_campaign=address-parser-node-tutorial) - Sign up free
- [APIVerve Marketplace](https://apiverve.com/marketplace?utm_source=github&utm_medium=tutorial&utm_campaign=address-parser-node-tutorial) - Browse 300+ APIs
- [Street Address Parser API](https://apiverve.com/marketplace/streetaddressparser?utm_source=github&utm_medium=tutorial&utm_campaign=address-parser-node-tutorial) - API details
