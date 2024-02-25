# Map Locations Project

This project is a React-based web application that integrates Google Maps to allow users to select specific locations on the map, save them, and manage them through a dynamic list.

## Features

- Interactive map interface to select locations.
- Add and remove locations from a persistent list.
- Filter locations by categories.
- Search for locations using the Google Maps Places API.
- Import and export the list of locations.

## Setup

To get the project running locally, follow these steps:

### Prerequisites

- Node.js (recommended version 14 or above)
- npm (usually comes with Node.js)

### Installation

1. Clone the repository to your local machine:

```bash
git remote add origin https://github.com/arachne16/google-map-test.git
cd google-map-test
```

2. Install the required dependencies:

```bash
npm install
```

3. Set up your environment variables:

Create a file named `.env` in the root directory of the project and add your Google Maps API key:

```plaintext
REACT_APP_GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_MAP_API_KEY
```

Replace `YOUR_GOOGLE_MAP_API_KEY` with the actual API key provided by Google Cloud.

### Running the Application

To start the application, run:

```bash
npm start
```

The application will open in your default web browser at `http://localhost:3000`.

## Usage

- Click on the map to add a location marker and save location details.
- Use the search bar in the top left corner of the map to search for specific places.
- Select a category from the dropdown to filter visible locations.
- Click on a location in the list to revisit it on the map.
- Use the import/export buttons to upload or download the list of locations.

['http://localhost:3000']('http://localhost:3000')
