'use client';

import { useLocale } from 'next-intl';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui';
import { languages, usePathname, useRouter } from '@/lib/translation';

export default function LanguageSwitch() {
	const locale = useLocale();
	const router = useRouter();
	const pathname = usePathname();

	function redirectToNewLangauge(nextLocale: string) {
		router.replace(pathname, { locale: nextLocale });
	}

	return (
		<Select value={locale} onValueChange={redirectToNewLangauge}>
			<SelectTrigger className="w-28">
				<SelectValue>{languages[locale].nativeName}</SelectValue>
			</SelectTrigger>
			<SelectContent>
				{Object.keys(languages).map((language) => {
					const { nativeName, code } = languages[language];
					return (
						<SelectItem key={code} value={code}>
							{nativeName}
						</SelectItem>
					);
				})}
			</SelectContent>
		</Select>
	);
}
