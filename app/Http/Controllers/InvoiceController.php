<?php

namespace App\Http\Controllers;

use App\Client;
use App\Product;
use App\Sale;
use Illuminate\Http\Request;

class InvoiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $number = trim($request->get('number'));
        $client = trim($request->get('client'));

        if (!empty($number) || !empty($client)) {
            $allInvoices = Sale::with('clients') 
                    ->orWhere('number', 'like', '%'.$number.'%')
                    ->whereHas('clients', function($x) use ($client) {
                        $x->where('name', 'like', '%'.$client.'%');
                    })
                    ->orderBy('created_at', 'desc')
                    ->paginate(10);
        } else {
            $allInvoices = Sale::with('clients')
                    ->orderBy('created_at', 'desc')
                    ->paginate(10);
        }
                 
        return response()->json($allInvoices);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
            'from.name' => 'required|string',
            'from.nit_ci' => 'required'
        ]);

        /* If exists client "create" or "get id" */
        if ($request->from['ifNewClient']) {
            $client = new Client;
            $client->nit_ci = $request->from['nit_ci'];
            $client->name = $request->from['name'];
            $client->save();
        }
        else {
            $client = Client::select('id')
                        ->where('nit_ci', $request->from['nit_ci'])
                        ->where('name', $request->from['name'])
                        ->first();
        }

        /* Create sale for invoice */
        $sale = New Sale;
        $sale->date_sale = $request->from['date'];
        $sale->number = $request->from['numInvoice'];
        $sale->client_id = $client->id;
        $sale->total_price = $request->from['total'];
        $sale->discount = ($request->from['discount']) ? $request->from['discount'] : 0;
        $sale->save();

        /* Save list products */
        foreach ($request->products as $product) {
            \DB::table('sale_details')
                ->insert([
                    'quantity' => $product['quantity'],
                    'sale_id' => $sale->id,
                    'product_id' => $product['id']
                ]);
            /* Update product stock */
            $prod = Product::find($product['id']);
            $currentStock = $prod->stock;
            $prod->stock = $currentStock - $product['quantity'];
            $prod->save();
        }



        return response()->json(null, 200);
        // return response()->json($request->products);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $sale = Sale::where('id', $id)
                ->with('clients')
                ->with('saleDetails')
                ->get();
        return response()->json($sale);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        // 
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
        // 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
    /* 
    *
    *
    *
    */
    function getClientByci($nit_ci) {
        $nameCli = Client::select('name')->where('nit_ci', $nit_ci)->get();
        return response()->json($nameCli);
    }

    function getProductByprod($prod) {
        $listProd = Product::select('id', 'name', 'stock', 'sale_price')
                    ->where('name', 'like', '%'.$prod.'%')
                    ->where('stock', '>', 0)
                    ->get();
        return response()->json($listProd);
    }
}
