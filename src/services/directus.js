import { createDirectus, rest } from '@directus/sdk';
import { API_CONFIG } from '../constants';

const directus = createDirectus(API_CONFIG.BASE_URL).with(rest());

export default directus;