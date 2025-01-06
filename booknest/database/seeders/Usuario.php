<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class Usuario extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('usuarios')->insert([
            'nome' => 'João Almeida de Campos Lopes',
            'email' => 'joaoalmeidadecamposlopes@gmail.com',
            'date' => '02/09/2005',
            'generos' => 'conto',
            'senha' => Hash::make('João2005'),
            'nivel_acessos' => 'usuario',
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}
