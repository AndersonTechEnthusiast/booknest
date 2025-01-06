<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Seeder;

class Colaborador extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('usuarios')->insert([
            'nome' => 'Pedro Pires Da Cruz',
            'email' => 'pedropiresdacruz@gmail.com',
            'date' => '24/07/2004',
            'generos' => 'Ficção',
            'senha' => Hash::make('Pedro24062004'),
            'nivel_acessos' => 'contribuinte',
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}
