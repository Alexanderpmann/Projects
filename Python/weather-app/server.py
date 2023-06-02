from flask import Flask, jsonify, render_template, request, session
from datetime import datetime
import os
import requests
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.environ['API_KEY']
BASE_URL = "https://api.weatherapi.com/v1"
CITY = "rockville"

app = Flask(__name__, static_url_path="", static_folder="web/static", template_folder="web/templates")
app.secret_key = os.getenv('SECRET_KEY', 'fallback-secret-key')

# Home Route
@app.route('/')
def hello_world():
    return render_template('index.html')

# Current Weather Route
@app.route('/current')
def current():
        r = requests.get(f"{BASE_URL}/current.json?key={API_KEY}&q={CITY}")
        return r.json()

@app.route('/weather')
def get_weather():
    city = request.args.get('city', default='rockville', type=str)
    session['city'] = city
    r = requests.get(f"{BASE_URL}/current.json?key={API_KEY}&q={city}")
    data = r.json()

    # Convert the localtime string to a datetime object
    localtime = datetime.strptime(data['location']['localtime'], '%Y-%m-%d %H:%M')

    # Format the datetime object as you wish
    day_of_week = localtime.strftime('%A')  # e.g. Monday
    date = localtime.strftime('%Y-%m-%d')  # e.g. 2023-06-01

    current_weather = {
        "description":  data["current"]["condition"]["text"],
        "icon": data["current"]["condition"]["icon"],
        "name": data["location"]["name"],
        "temperature": data["current"]["temp_f"],  # or temp_c for Celsius
        "day_of_week": day_of_week,
        "date": date,
    }
    
    return render_template('index.html', weather=current_weather)


# Weather Forecast Route
@app.route('/forecast')
def forecast():
    city = session.get('city', 'rockville')
    r = requests.get(f"{BASE_URL}/forecast.json?key={API_KEY}&q={city}&days=7")
    forecast_data = r.json()['forecast']['forecastday']

    # Save location name from the response
    location_name = r.json()['location']['name']
    
    for day_data in forecast_data:
        # Convert the date string to a datetime object
        date = datetime.strptime(day_data['date'], '%Y-%m-%d')

        # Format the datetime object as you wish
        day_of_week = date.strftime('%A')  # e.g. Monday

        # Add the day_of_week to the day's data
        day_data['day_of_week'] = day_of_week

    return render_template('forecast.html', forecast=forecast_data, location=location_name)






# change datetime to day of week

# assuming date_str is the date string from the API
date_str = "2023-05-01"
date_obj = datetime.strptime(date_str, "%Y-%m-%d")

day_of_week = date_obj.strftime("%A")  # This will give 'Monday' for the above date

#error handling
@app.errorhandler(404)
def page_not_found(error):
    return render_template('index.html', message=error),

# Debug
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)