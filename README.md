# React Dynamic Subdomains App

This project is a simple one-page application built with React.js that implements dynamic subdomains to render logos and orders based on the subdomains.

## Features

- Dynamic subdomain handling
- Logo rendering based on the current subdomain
- Display of orders related to the current subdomain

## Project Structure

```
react-dynamic-subdomains-app
├── public
│   ├── index.html
│   └── favicon.ico
├── src
│   ├── components
│   │   ├── Logo.js
│   │   └── Orders.js
│   ├── App.js
│   ├── index.js
│   └── utils
│       └── subdomainHelper.js
├── package.json
├── .gitignore
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd react-dynamic-subdomains-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:
```
npm start
```

The application will be available at `http://localhost:3000`. You can test dynamic subdomains by configuring your local DNS or using a service like `ngrok` to expose your local server.

## Contributing

Feel free to submit issues or pull requests for any improvements or features you would like to see.

## License

This project is licensed under the MIT License.