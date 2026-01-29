import { readItems, readItem, createItem, updateItem, deleteItem } from '@directus/sdk';
import directus from './directus';
import { COLLECTIONS } from '../constants';

export const categoryService = {
  async getAll() {
    return await directus.request(
      readItems(COLLECTIONS.CATEGORIES, {
        sort: ['name'],
      })
    );
  },

  async getById(id) {
    return await directus.request(readItem(COLLECTIONS.CATEGORIES, id));
  },

  async create(data) {
    return await directus.request(createItem(COLLECTIONS.CATEGORIES, data));
  },

  async update(id, data) {
    return await directus.request(updateItem(COLLECTIONS.CATEGORIES, id, data));
  },

  async delete(id) {
    await directus.request(deleteItem(COLLECTIONS.CATEGORIES, id));
  },
};