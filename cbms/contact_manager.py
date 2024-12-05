def add_contact(contacts):
    """Add a new contact."""
    name = input("Enter Name: ").strip()
    if any(contact['Name'] == name for contact in contacts):
        print("Error: Contact with this name already exists.")
        return contacts
    phone = input("Enter Phone Number: ").strip()
    address = input("Enter Address: ").strip()
    contacts.append({"Name": name, "Phone": phone, "Address": address})
    print(f"Contact '{name}' added successfully!")
    return contacts

def view_contacts(contacts):
    """View all contacts."""
    if not contacts:
        print("No contacts found.")
        return
    print("\nContacts:")
    for contact in contacts:
        print(f"Name: {contact['Name']}, Phone: {contact['Phone']}, Address: {contact['Address']}")

def remove_contact(contacts):
    """Remove a contact."""
    name = input("Enter Name of the contact to remove: ").strip()
    updated_contacts = [contact for contact in contacts if contact['Name'] != name]
    if len(contacts) == len(updated_contacts):
        print(f"No contact found with the name '{name}'.")
    else:
        print(f"Contact '{name}' removed successfully!")
    return updated_contacts

def search_contact(contacts):
    """Search for a contact."""
    name = input("Enter Name to search: ").strip()
    results = [contact for contact in contacts if name.lower() in contact['Name'].lower()]
    if results:
        for contact in results:
            print(f"Name: {contact['Name']}, Phone: {contact['Phone']}, Address: {contact['Address']}")
    else:
        print("No contacts found.")
