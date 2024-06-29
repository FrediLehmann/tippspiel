'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { AlertCircleIcon, Loader2Icon, LogInIcon } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { PasswordInput } from '@/components';
import {
	Alert,
	AlertDescription,
	AlertTitle,
	Button,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input
} from '@/components/ui';
import { Link, useRouter } from '@/lib/translation';

import { getFormSchema } from './getFormSchema';
import { signIn } from './signIn';

export default function SignInForm() {
	const t = useTranslations();

	const [isPending, startTransition] = useTransition();
	const [error, setError] = useState(false);
	const locale = useLocale();

	const router = useRouter();

	const formSchema = getFormSchema(t);
	type FormSchema = z.infer<typeof formSchema>;
	const form = useForm<FormSchema>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: ''
		}
	});

	function onSubmit(values: FormSchema) {
		startTransition(() => {
			async function signMeIn() {
				try {
					const result = await signIn(values, locale);
					if (!result.success) throw new Error('Could not sign in');
					router.push('/cockpit');
				} catch (e) {
					setError(true);
				}
			}

			signMeIn();
		});
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<div className="space-y-3 md:space-y-5">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>{t('common.signInForm.email.label')}</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<div className="flex items-center justify-between">
									<FormLabel>{t('common.signInForm.password.label')}</FormLabel>
									<Button asChild variant="link" className="h-6 py-0">
										<Link href="/forgot-password">{t('common.signInForm.password.forgot')}</Link>
									</Button>
								</div>
								<FormControl>
									<PasswordInput autoComplete="current-password" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<Button type="submit" className="mt-7 w-full" disabled={isPending}>
					{!isPending ? (
						<LogInIcon className="mr-2 h-5 w-5" />
					) : (
						<Loader2Icon className="mr-2 h-5 w-5 animate-spin" />
					)}
					{t('common.login')}
				</Button>
				{error && (
					<Alert variant="destructive" className="mt-4">
						<AlertCircleIcon className="h-4 w-4" />
						<AlertTitle>{t('common.signInForm.signinFailAlert.title')}</AlertTitle>
						<AlertDescription>
							{t('common.signInForm.signinFailAlert.description')}
						</AlertDescription>
					</Alert>
				)}
			</form>
		</Form>
	);
}
