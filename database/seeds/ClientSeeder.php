<?php

use Illuminate\Database\Seeder;

class ClientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('clients')->insert([
            [
                'nit_ci' => '84502',
                'name' => 'thomas teclados'
            ],
            [
                'nit_ci' => '1111',
                'name' => 'Rodolfo Rojo'
            ],
            [
                'nit_ci' => '2222',
                'name' => 'Hernesto Cabra'
            ],
            [
                'nit_ci' => '3333',
                'name' => 'Cara de bola'
            ],
            [
                'nit_ci' => '4578',
                'name' => 'Filiberto Alce'
            ]
        ]);
    }
}
