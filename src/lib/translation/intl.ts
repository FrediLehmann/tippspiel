import { createSharedPathnamesNavigation } from 'next-intl/navigation';

import { locales } from './languages';

export const localePrefix = 'always';

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
	locales,
	localePrefix
});
