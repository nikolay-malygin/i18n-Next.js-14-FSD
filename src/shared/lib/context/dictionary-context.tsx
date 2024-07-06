import { DictionaryType } from '@/shared/config/i18n';
import { createContext } from 'react';

interface DictionaryContextProps {
	dictionary: DictionaryType;
	lang: string;
}

const DictionaryContext = createContext<DictionaryContextProps>({} as DictionaryContextProps);

export default DictionaryContext;
