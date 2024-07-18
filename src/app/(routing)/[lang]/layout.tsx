import { DictionaryProvider } from '@/app/providers';
import { getDictionary } from '@/shared/config/i18n';
import { NavigationLinks } from '@/shared/ui';

interface DictionaryLayoutProps {
	params: { lang: string };
	children: React.ReactNode;
}

export default async function DictionaryLayout({
	params,
	children,
}: Readonly<DictionaryLayoutProps>) {
	return (
		<DictionaryProvider lang={params.lang} initialDictionary={await getDictionary(params.lang)}>
			{children}
			{/* Just for convenient switching between different routes */}
			<NavigationLinks />
		</DictionaryProvider>
	);
}
