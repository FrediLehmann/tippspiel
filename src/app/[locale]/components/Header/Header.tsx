'use client';

import { useTranslations } from 'next-intl';

import { LanguageSwitch, SignoutButton } from '@/components';
import { Button } from '@/components/ui';
import { useAppSelector } from '@/lib/store';
import { Link, usePathname } from '@/lib/translation';
import { cn } from '@/lib/utils';

export default function Header() {
	const t = useTranslations();
	const pathname = usePathname();

	const isSignedIn = useAppSelector((state) => state.user.signedIn);

	return (
		<header className="w-full border-b py-2">
			<div className="container mx-auto flex max-w-7xl items-center justify-between">
				<div>
					<Link href="/" className="text-lg font-bold">
						Tippspiel
					</Link>
				</div>
				<div className="flex space-x-2">
					{isSignedIn ? (
						<SignoutButton />
					) : (
						<Button
							asChild
							variant="ghost"
							disabled={pathname.includes('/login')}
							className={cn(pathname.includes('/login') ? 'bg-neutral-50' : '')}>
							<Link href="/login">{t('common.headerNav.login')}</Link>
						</Button>
					)}
					<LanguageSwitch />
				</div>
			</div>
		</header>
	);
}
