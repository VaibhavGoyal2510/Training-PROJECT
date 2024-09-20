import pandas as pd

# Correct path to 'items.csv'
data = pd.read_csv('./items.csv')  # Replace 'path/to/your/' with the correct path


from pymongo import MongoClient

# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/TRIAL-CSV')
db = client['TRIAL-CSV']
collection = db['t1']



for index, row in data.iterrows():
    # Define the condition for updating the document (e.g., based on an ID or unique key)
    query = {"name": row["name"]}  # Assuming "id" is a unique field

    # Define the new data to insert/update
    new_values = {"$set": row.to_dict()}

    # Update or insert the document
    collection.update_one(query, new_values, upsert=True)


