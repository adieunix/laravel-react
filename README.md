# LaReact

This is a Laravel application with an Inertia + React frontend.

## Requirements

- PHP 8.4 or newer
- Composer
- Node.js 20+ and npm
- A supported database for Laravel

## Setup

1. Install PHP dependencies:

```bash
composer install
```

2. Install frontend dependencies:

```bash
npm install
```

3. Copy the environment file and generate the application key:

```bash
cp .env.example .env
php artisan key:generate
```

4. Run the database migrations:

```bash
php artisan migrate
```

## Running the project

- Start the frontend asset watcher for React:

```bash
npm run dev
```

- In a separate terminal, start the Laravel backend:

```bash
php artisan serve
```

## Useful commands

- `composer run dev` to start the full local development stack
- `php artisan test` to run tests
- `vendor/bin/pint --dirty --format agent` to format PHP files

