'use client';

import { useRef } from 'react';

import { setUser, useAppStore } from '@/lib/store';
import { User } from '@/types/User.type';

export default function UserStateProvider({
	user,
	children
}: {
	user: User;
	children: React.ReactNode;
}) {
	const initialized = useRef(false);

	const store = useAppStore();
	if (!initialized.current) {
		store.dispatch(
			setUser({
				id: user.id,
				email: user.email,
				signedIn: user.signedIn,
				communicationLanguage: user.communicationLanguage
			})
		);
		initialized.current = true;
	}

	return <>{children}</>;
}
