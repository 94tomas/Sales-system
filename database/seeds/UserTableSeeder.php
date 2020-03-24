<?php

use App\User;
use App\Role;
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $role_seller = Role::where('name', 'seller')->first();
        $role_admin = Role::where('name', 'admin')->first();

        $user = new User();
        $user->ci = '111';
        $user->name = 'admin';
        $user->last_name = 'last admin';
        $user->email = 'admin@dev.com';
        $user->password = bcrypt('admin');
        $user->save();
        $user->roles()->attach($role_admin);

        $user = new User();
        $user->ci = '222';
        $user->name = 'seller';
        $user->last_name = 'last seller';
        $user->email = 'seller@dev.com';
        $user->password = bcrypt('seller');
        $user->save();
        $user->roles()->attach($role_seller);
    }
}
