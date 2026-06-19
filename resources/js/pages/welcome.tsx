import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login, register } from '@/routes';

export default function Welcome() {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="Welcome" />
            <main className="min-h-screen bg-black text-white">
                <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col justify-center px-6 py-16 sm:px-8 lg:px-10">
                    <div className="max-w-xl space-y-6">
                        <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                            React frontend · Laravel API
                        </p>

                        <div className="space-y-3">
                            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                                Welcome
                            </h1>
                            <p className="max-w-lg text-base leading-7 text-white/70 sm:text-lg">
                                Halaman ini dirender oleh React via Inertia.
                                Backend API disediakan oleh Laravel di route
                                <span className="font-medium text-white">
                                    {' '}
                                    /api
                                </span>
                                .
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {auth.user ? (
                                <Link
                                    href={dashboard()}
                                    className="inline-flex h-10 items-center justify-center rounded-md border border-white/15 bg-white px-4 text-sm font-medium text-black transition hover:bg-white/90"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={login()}
                                        className="inline-flex h-10 items-center justify-center rounded-md border border-white/15 bg-white px-4 text-sm font-medium text-black transition hover:bg-white/90"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={register()}
                                        className="inline-flex h-10 items-center justify-center rounded-md border border-white/15 px-4 text-sm font-medium text-white transition hover:bg-white/10"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>

                        <div className="grid gap-3 pt-4 text-sm text-white/60 sm:grid-cols-2">
                            <div className="rounded-md border border-white/10 bg-white/5 p-4">
                                <div className="mb-1 text-white">Frontend</div>
                                <div>React + Inertia</div>
                            </div>
                            <div className="rounded-md border border-white/10 bg-white/5 p-4">
                                <div className="mb-1 text-white">Backend</div>
                                <div>Laravel API</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
