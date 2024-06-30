import { ProvideMessages } from '@/components';

import { NotFoundContent } from './components';

export default async function Page404() {
	return (
		<ProvideMessages namespaces={['common', '404']}>
			<main className="container mx-auto max-w-7xl flex">
				<NotFoundContent />
			</main>
		</ProvideMessages>
	);
}
