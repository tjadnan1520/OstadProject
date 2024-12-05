from file_operations import load_contacts, save_contacts
from contact_manager import add_contact, view_contacts, remove_contact, search_contact
from utils import display_menu, get_user_choice

def main():
    # Load contacts from file
    contacts = load_contacts()

    while True:
        display_menu()
        choice = get_user_choice()

        if choice == '1':
            contacts = add_contact(contacts)
            save_contacts(contacts)
        elif choice == '2':
            view_contacts(contacts)
        elif choice == '3':
            contacts = remove_contact(contacts)
            save_contacts(contacts)
        elif choice == '4':
            search_contact(contacts)
        elif choice == '5':
            print("Exiting Contact Book. Goodbye!")
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()
