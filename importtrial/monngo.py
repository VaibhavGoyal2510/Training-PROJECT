import pandas as pd

# Load CSV file
data = pd.read_csv('./items.csv')

from pymongo import MongoClient

# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['your_database']
collection = db['your_collection']



for index, row in data.iterrows():
    # Define the condition for updating the document (e.g., based on an ID or unique key)
    query = {"_id": row["id"]}  # Assuming "id" is a unique field

    # Define the new data to insert/update
    new_values = {"$set": row.to_dict()}

    # Update or insert the document
    collection.update_one(query, new_values, upsert=True)

for doc in collection.find():
    print(doc)

