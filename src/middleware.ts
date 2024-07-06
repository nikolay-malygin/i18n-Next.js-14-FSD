import { defaultLocale, handleLocaleRedirection, locales } from '@/shared/config/i18n';
import { NextRequest, NextResponse } from 'next/server';

const localeCodes = locales.map((locale) => locale.code);

export function middleware(request: NextRequest) {
	const redirectResponse = handleLocaleRedirection(request, localeCodes, defaultLocale);
	if (redirectResponse) {
		return redirectResponse;
	}
	return NextResponse.next();
}

export const config = {
	matcher: [
		// Skip all internal paths (_next)
		'/((?!_next).*)',
	],
};
