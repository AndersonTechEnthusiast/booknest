<?php

namespace Database\Seeders;

use App\Models\usuarios;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // essa função chama (call) uma array que pode inserir em uma ou mais tabelas o mesmo dado
        $this->call([
            // dentro da Array adicione a classe do Seeder criado
            Admin::class,
            Colaborador::class,
            Usuario::class,
            contribuinteAutorizado::class
        ]);
        // após isso de o comando no Terminal (php artisan migrate --seed)
        // para inserir no banco de dados
    }
}
