import { pick } from 'lodash';
import { NextIntlClientProvider, useMessages } from 'next-intl';

export default function ProvideMessages({
	children,
	namespaces
}: {
	children: React.ReactNode;
	namespaces: string[];
}) {
	const messages = useMessages();

	return (
		<NextIntlClientProvider messages={pick(messages, ...namespaces)}>
			{children}
		</NextIntlClientProvider>
	);
}
