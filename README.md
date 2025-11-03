# 🌤️ Weather Forecast App

A modern, responsive weather application built with React and Vite that provides real-time weather updates for any location worldwide. Features a beautiful glass morphism design and intuitive user interface.

## ✨ Features

- **📍 Current Location Weather** - Get instant weather data for your current location
- **🔍 City Search** - Search for weather information in any city worldwide
- **📱 Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **🎨 Modern UI** - Beautiful glass morphism design with smooth animations
- **🌡️ Detailed Metrics** - Temperature, humidity, wind speed, and cloudiness
- **⚡ Fast Performance** - Built with Vite for lightning-fast development and builds
- **🎯 Accurate Data** - Powered by OpenWeatherMap API

## 🚀 Live Demo

[Check out the live demo here](#) 

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: CSS3 with CSS Variables
- **Icons**: Custom SVG/PNG assets
- **API**: OpenWeatherMap API
- **Deployment**: Vercel/Netlify (compatible)

## 📦 Installation

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/weather-app-react.git
   cd weather-app-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_OPENWEATHER_API_KEY=your_api_key_here
   ```

4. **Get your API key**
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Get your API key from the dashboard
   - Replace `your_api_key_here` with your actual API key

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Build for production**
   ```bash
   npm run build
   ```

## 🎯 Usage

### Your Weather Tab
1. Click on "Your Weather" tab
2. Grant location access when prompted
3. View real-time weather data for your current location

### Search Weather Tab
1. Click on "Search Weather" tab
2. Enter any city name in the search box
3. Press Enter or click the search button
4. View detailed weather information for the searched city

### Weather Information Displayed
- 🌡️ Current temperature in Celsius
- 🌤️ Weather condition and description
- 🇺🇸 Country flag and city name
- 💨 Wind speed
- 💧 Humidity percentage
- ☁️ Cloudiness percentage

## 📁 Project Structure

```
src/
├── components/
│   ├── WeatherApp.jsx      # Main application component
│   ├── TabSwitcher.jsx     # Tab navigation component
│   ├── WeatherCard.jsx     # Weather data display component
│   ├── SearchForm.jsx      # City search form component
│   ├── GrantLocation.jsx   # Location permission component
│   └── LoadingSpinner.jsx  # Loading state component
├── hooks/
│   └── useWeather.js       # Custom hook for weather logic
├── utils/
│   └── constants.js        # API constants and configuration
├── styles/
│   └── WeatherApp.css      # Main stylesheet
└── main.jsx                # Application entry point
```

## 🎨 Customization

### Changing Colors
Modify the CSS variables in `src/styles/WeatherApp.css`:
```css
:root {
  --color-primary: #112d4e;    /* Main background color */
  --color-secondary: #3f72a3;  /* Secondary color */
  --color-accent: #679bcb;     /* Accent color for buttons */
  --color-light: #e6e6e6;      /* Text color */
  /* Add more variables as needed */
}
```

### Adding New Weather Parameters
1. Update the `WeatherCard.jsx` component
2. Add new parameter objects to the `parameters` array
3. Update the API data mapping in the component

## 🔧 API Configuration

The app uses OpenWeatherMap API. Key endpoints:

- **Current Weather**: `https://api.openweathermap.org/data/2.5/weather`
- **By Coordinates**: `?lat={lat}&lon={lon}&appid={API_KEY}&units=metric`
- **By City Name**: `?q={city}&appid={API_KEY}&units=metric`

## 🌐 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify

### Environment Variables for Production
Make sure to set `VITE_OPENWEATHER_API_KEY` in your deployment platform's environment variables.

## 🐛 Troubleshooting

### Common Issues

1. **API Key Not Working**
   - Ensure your API key is correctly set in the `.env` file
   - Verify the API key has proper permissions
   - Check if you've exceeded API rate limits

2. **Location Access Denied**
   - Ensure your browser has location permissions enabled
   - Use HTTPS for geolocation to work properly

3. **City Not Found**
   - Check for typos in the city name
   - Try using the format "City, Country Code"

4. **Build Errors**
   - Clear node_modules: `rm -rf node_modules`
   - Reinstall dependencies: `npm install`
   - Check Node.js version compatibility

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines
- Follow React best practices
- Ensure responsive design
- Add proper error handling
- Write clean, commented code
- Test on multiple devices and browsers

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather data API
- [React](https://reactjs.org/) team for the amazing framework
- [Vite](https://vitejs.dev/) for the fast build tool
- [FlagCDN](https://flagcdn.com/) for country flags

---

**Built with ❤️ using React and Vite**

If you find this project helpful, please give it a ⭐ on GitHub!
