import { DictionaryType } from '../dictionaries/type';

/**
 * Object containing functions that import and return dictionaries based on the specified language key.
 */
const dictionaries: Record<string, () => Promise<DictionaryType>> = {
	en: () => import('../dictionaries/en.json').then((module) => module.default),
	ru: () => import('../dictionaries/ru.json').then((module) => module.default),
	de: () => import('../dictionaries/de.json').then((module) => module.default),
	it: () => import('../dictionaries/it.json').then((module) => module.default),
	fr: () => import('../dictionaries/fr.json').then((module) => module.default),
	es: () => import('../dictionaries/es.json').then((module) => module.default),
};

/**
 * Asynchronously retrieves a dictionary based on the specified locale.
 * @param locale The locale for which to retrieve the dictionary.
 * @returns A Promise that resolves to the dictionary for the specified locale.
 */
const getDictionary = async (locale: string): Promise<DictionaryType> => dictionaries[locale]();

export default getDictionary;
