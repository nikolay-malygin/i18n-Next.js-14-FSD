'use client';
import { DictionaryContext } from '@/shared/lib/context';
import { useContext } from 'react';

const useDictionary = () => {
	const context = useContext(DictionaryContext);
	if (!context) {
		throw new Error('[!] useDictionary must be used within a DictionaryProvider');
	}
	return context;
};

export default useDictionary;
