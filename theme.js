// Function to determine if it's day or night
function applyThemeBasedOnTime() {
    const hour = new Date().getHours(); // Get the current hour (0-23)
    const isDayTime = hour >= 8 && hour < 20; // Daytime is between 8 AM and 8 PM
    const theme = isDayTime ? "light" : "dark";

    // Apply the theme to the <html> element
    document.documentElement.setAttribute("data-theme", theme);
}

// Apply the theme when the page loads
applyThemeBasedOnTime();