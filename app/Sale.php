<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Sale extends Model
{
    
    public function clients()
    {
        return $this->hasMany('App\Client', 'id', 'client_id');
    }
    public function saleDetails() {
        return $this->belongsToMany('App\Product', 'sale_details')
            ->withPivot('quantity')
            ->withTimestamps();
    }
}
