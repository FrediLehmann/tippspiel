'use client';

import { LogOutIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui';
import { createBrowserClient } from '@/lib/supabase/createBrowserClient';
import { useRouter } from '@/lib/translation';

export default function SignoutButton() {
	const t = useTranslations('common');
	const supabase = createBrowserClient();
	const router = useRouter();

	async function signOut() {
		await supabase.auth.signOut();
		router.push('/');
	}

	return (
		<Button onClick={signOut} variant="outline">
			<LogOutIcon className="mr-1 h-4 w-4" />
			{t('logout')}
		</Button>
	);
}
