<?php

use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('products')->insert([
            [
                'name' => 'teclado',
                'description' => 'teclado grande',
                'stock' => 56,
                'sale_price' => 80
            ],
            [
                'name' => 'mouse',
                'description' => 'mouse con cable Genius',
                'stock' => 120,
                'sale_price' => 60
            ],
            [
                'name' => 'monitor',
                'description' => 'monitor LG de 27 plg. curvo',
                'stock' => 20,
                'sale_price' => 800
            ],
            [
                'name' => 'mesa',
                'description' => 'mesa grande',
                'stock' => 12,
                'sale_price' => 200
            ],
            [
                'name' => 'tornillo para muebles',
                'description' => 'emsanblar muebles',
                'stock' => 500,
                'sale_price' => 1.50
            ],
            [
                'name' => 'teclado 2',
                'description' => 'teclado grande',
                'stock' => 56,
                'sale_price' => 80
            ],
            [
                'name' => 'mouse 2',
                'description' => 'mouse con cable Genius',
                'stock' => 120,
                'sale_price' => 60
            ],
            [
                'name' => 'monitor 2',
                'description' => 'monitor LG de 27 plg. curvo',
                'stock' => 20,
                'sale_price' => 800
            ],
            [
                'name' => 'mesa 2',
                'description' => 'mesa grande',
                'stock' => 12,
                'sale_price' => 200
            ],
            [
                'name' => 'tornillo para muebles',
                'description' => 'emsanblar muebles',
                'stock' => 500,
                'sale_price' => 1.50
            ]
        ]); 
    }
}
