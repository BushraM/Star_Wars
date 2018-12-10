<?php

namespace App\Http\Controllers;

use App\Starship;
use Illuminate\Http\Request;

class StarshipController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        getAllStarships();
    }

    public function getAllStarships()
    {
        $data = json_decode(file_get_contents('https://swapi.co/api/starships'), true);
        
       return $data;
      
    }
    
}
