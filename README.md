# Next.js 14 + i18n + FSD 🍰

This small Next.js project shows how I implemented internationalization (i18n) in a Next.js 14 application using `sub-path` routing (`app/[lang]/page.tsx`).

It is based on the official [Next.js Documentation](https://nextjs.org/docs/app/building-your-application/routing/internationalization) and uses the [Feature-Sliced Design](https://feature-sliced.design/) architecture for better project organization.

## Dependencies

You need to install the following packages:

```bash
npm install negotiator @formatjs/intl-localematcher
```

## Project Structure

The project is organized according to the **Feature-Sliced Design** (FSD) principles.

Here is an **overview of the structure** and the parts **responsible for i18n** implementation:

```
src
├── middleware.ts
├── app
│   ├── (routing)
│   │   └── [lang]
│   │       └── /**/*.{ts,tsx}
│   └── providers
│       └── DictionaryProvider.tsx
├── ...
└── shared
    ├── config
    │   └── i18n
    │       ├── constants
    │       │   └── locales.ts
    │       ├── dictionaries
    │       │   ├── en.json
    │       │   └── ...
    │       └── helpers
	│           └── get-locale.ts
	│           └── get-dictionary.ts
	│           └── locale-redirection.ts
    ├── lib
    |   ├── contexts
    |   │   └── DictionaryContext
    |   └── hooks
    |       └── useDictionary
    └── ui
        └── LanguageSwitcher
```

### Parts Responsible for i18n Implementation

1. **`middleware.ts`**:
   Handles locale detection and redirection based on the user's preferred language.

2. **`DictionaryProvider.tsx`**:
   Provides the dictionary context to the application.

    ```tsx
    return (
    	<DictionaryContext.Provider value={{ dictionary, lang }}>
    		{children}
    	</DictionaryContext.Provider>
    );
    ```

3. **`shared/config/i18n/constants/locales.ts`**:
   Defines the available locales and the default locale.

    ```typescript
    const locales = [
    	{ code: 'en', name: 'English' },
    	{ code: 'de', name: 'Deutsch' },
    	{ code: 'ru', name: 'Русский' },
    	{ code: 'fr', name: 'Français' },
    	{ code: 'es', name: 'Español' },
    	{ code: 'it', name: 'Italiano' },
    ];

    const defaultLocale = locales[0].code;
    ```

4. **`shared/dictionaries/*.json`**:
   JSON files containing the translations for each supported language.

    **Example `en.json`**:

    ```json
    {
    	"home": {
    		"hello": "Hello, friend"
    	},
    	"about": {
    		"about_text": "This is the about page."
    	}
    	...
    }
    ```

5. **`DictionaryContext.tsx`**:
   Creates the context for the dictionary data.

6. **`useDictionary.ts`**:
   Custom hook for accessing the dictionary context.

7. **`LanguageSwitcher.tsx`**:
   Example component for switching languages.

## How to use

As **simple** as that:

```tsx
'use client';

import { useDictionary } from '@/shared/lib/hooks';

const HomePage = () => {
	const { dictionary } = useDictionary();

	return (
		<div>{dictionary.home.hello}</div> // you will get suggestions about your dictionary structure
	);
};
```

## Conclusion

This project provides a comprehensive setup for implementing internationalization in a Next.js 14 using `Context API`, `middleware`, and a bit of `FSD-architecture`.

With this structure, you can `easily extend` it for more languages and - of course - more complex dictionaries structures.

Feel free to `adjust the styles, components, and structure` as needed for your specific project.

All `functions and components are documented` within the code for easier understanding and maintenance.
