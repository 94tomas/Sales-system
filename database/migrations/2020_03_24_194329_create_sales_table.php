<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSalesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sales', function (Blueprint $table) {
            $table->increments('id');
            $table->date('date_sale');
            $table->string('number');
            $table->integer('client_id')->unsigned();
            $table->integer('total_price');
            $table->integer('discount')->nullable()->default(0);
            $table->boolean('status')->default(true);

            $table->foreign('client_id')->references('id')->on('clients')->onDelete('cascade');     

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sales');
    }
}
