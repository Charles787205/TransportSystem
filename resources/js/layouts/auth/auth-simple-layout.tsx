import { Link } from '@inertiajs/react';
import AppLogoIcon from '@/components/app-logo-icon';
import { home } from '@/routes';
import type { AuthLayoutProps } from '@/types';

export default function AuthSimpleLayout({
    children,
    title,
    description,
}: AuthLayoutProps) {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center bg-slate-100 p-6 md:p-10">
            <div className="w-full max-w-sm">
                <div className="flex flex-col gap-6 rounded-2xl bg-white p-8 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.07),0_10px_40px_-4px_rgba(0,0,0,0.10)]">
                    {/* Brand */}
                    <div className="flex flex-col items-center gap-4">
                        <Link
                            href={home()}
                            className="flex flex-col items-center gap-2"
                        >
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-800">
                                <AppLogoIcon className="size-5 fill-white" />
                            </div>
                        </Link>
                        <div className="space-y-1 text-center">
                            <h1 className="text-xl font-semibold tracking-tight text-slate-900">
                                {title}
                            </h1>
                            <p className="text-sm text-slate-500">
                                {description}
                            </p>
                        </div>
                    </div>

                    {children}
                </div>
            </div>
        </div>
    );
}
