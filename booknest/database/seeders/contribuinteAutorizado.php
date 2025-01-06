<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class contribuinteAutorizado extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('contribuintes_para_usuarios_usuarios_para_contribuintes')->insert([
            'id_do_contribuinte' => 2,
            'nivel_de_acessos' => 'contribuinte',
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}
