import { readItems, readItem, createItem, updateItem, deleteItem } from '@directus/sdk';
import directus from './directus';
import { COLLECTIONS } from '../constants';

export const tagService = {
  async getAll() {
    return await directus.request(
      readItems(COLLECTIONS.TAGS, {
        sort: ['name'],
      })
    );
  },

  async getById(id) {
    return await directus.request(readItem(COLLECTIONS.TAGS, id));
  },

  async create(data) {
    return await directus.request(createItem(COLLECTIONS.TAGS, data));
  },

  async update(id, data) {
    return await directus.request(updateItem(COLLECTIONS.TAGS, id, data));
  },

  async delete(id) {
    await directus.request(deleteItem(COLLECTIONS.TAGS, id));
  },
};