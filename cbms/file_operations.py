import csv
import os

def load_contacts(file_name="contacts.csv"):
    """Load contacts from a file."""
    if os.path.exists(file_name):
        with open(file_name, mode='r') as file:
            reader = csv.DictReader(file)
            return [row for row in reader]
    return []

def save_contacts(contacts, file_name="contacts.csv"):
    """Save contacts to a file."""
    with open(file_name, mode='w', newline='') as file:
        fieldnames = ['Name', 'Phone', 'Address']
        writer = csv.DictWriter(file, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(contacts)
