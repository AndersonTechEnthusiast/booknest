<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
class Admin extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // criando um Administrador (novo dado no Banco de dados)
        // aqui estarei criando um usuario junto com a tabela 
        // quando a tabela for criada esse dado ja virá juntamente sem a necessidade de cadastramento no banco de dados atraves de um formulario 
        // criado com (php artisan make:seeder nome_do_seeder)
        // Acessando o Banco de Dados (DB) junto com a tabela (table)
        // insertion->() para inserir o dado no Banco de Dados do usuario
        DB::table('usuarios')->insert([
            'nome' => 'Anderson Pires Da Cruz',
            'email' => 'andersonpiresdacruz@gmail.com',
            'date' => '24/06/2004',
            'generos' => 'Ficção',
            'senha' => Hash::make('Anderson24062004'),
            'nivel_acessos' => 'Administrador',
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}
