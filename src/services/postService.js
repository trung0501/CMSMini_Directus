import { readItems, readItem, createItem, updateItem, deleteItem } from '@directus/sdk';
import directus from './directus';
import { COLLECTIONS } from '../constants';

export const postService = {
  async getAll() {
    return await directus.request(
      readItems(COLLECTIONS.POSTS, {
        fields: ['id', 'title', 'slug', 'content', 'excerpt', 'status', 'published_at'],
        sort: ['-published_at'],
      })
    );
  },

  async getById(id) {
    return await directus.request(
      readItem(COLLECTIONS.POSTS, id, {
        fields: ['id', 'title', 'slug', 'content', 'excerpt', 'status', 'published_at'],
      })
    );
  },

  async create(data) {
    return await directus.request(createItem(COLLECTIONS.POSTS, data));
  },

  async update(id, data) {
    return await directus.request(updateItem(COLLECTIONS.POSTS, id, data));
  },

  async delete(id) {
    await directus.request(deleteItem(COLLECTIONS.POSTS, id));
  },
};