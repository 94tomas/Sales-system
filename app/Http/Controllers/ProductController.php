<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $all_products = Product::orderBy('created_at', 'desc')->get();
        return response()->json($all_products);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|string',
            'price' => 'required'
        ]);

        $product = new Product;
        $product->name = $request->name;
        $product->description = $request->description;
        $product->stock = ($request->stock) ? $request->stock : null ;
        $product->sale_price = ($request->price) ? $request->price : null ;
        // $product->stock = $request->stock;
        // $product->sale_price = $request->price;
        $product->save();

        /*
          Add mail functionality here.
        */

        return response()->json(null, 200);
        // return response()->json($product);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($search_pros)
    {
        $r_products = Product::where('name', 'like', '%'.$search_pros.'%')->orWhere('sale_price', 'like', '%'.$search_pros.'%')->get();
        return response()->json($r_products);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $e_product = Product::find($id);
        return response()->json($e_product);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'name' => 'required|string',
            'sale_price' => 'required'
        ]);
        $up_product = Product::find($id);
        $up_product->name = $request->name;
        $up_product->description = $request->description;
        $up_product->stock = ($request->stock) ? $request->stock : null ;
        $up_product->sale_price = ($request->sale_price) ? $request->sale_price : null ;
        $up_product->save();
        return response()->json(null, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $del_product = Product::find($id);
        $del_product->delete();
        return response()->json(null, 200);
    }
}
