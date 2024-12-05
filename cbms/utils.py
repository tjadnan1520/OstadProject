def display_menu():
    """Display the menu options."""
    print("\nContact Book Menu:")
    print("1. Add Contact")
    print("2. View Contacts")
    print("3. Remove Contact")
    print("4. Search Contact")
    print("5. Exit")

def get_user_choice():
    """Get user's menu choice."""
    return input("Enter your choice: ").strip()
