<?php

namespace App\Http\Controllers;

use App\Planet;
use Illuminate\Http\Request;

class PlanetController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        getAllPlanets();
    }

    public function getAllPlanets()
    {
        $data = json_decode(file_get_contents('https://swapi.co/api/planets'), true);
        
        return $data; //response()->json([ $data ]);
      
    }
}
