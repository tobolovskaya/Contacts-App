import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;
export const selectFilter = (state) => state.filters.name;
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;


export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter((contact) => {
      const contactName = contact.name.toLowerCase();
      const contactNumber = contact.number.toString();

      return (
        contactName.includes(normalizedFilter) ||
        contactNumber.includes(normalizedFilter)
      );
    });
  },
);