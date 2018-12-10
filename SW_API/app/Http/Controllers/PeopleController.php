<?php

namespace App\Http\Controllers;

use App\People;
use Illuminate\Http\Request;
use Resources\PeopleResource;
use Resources\PeopleCollection;

class PeopleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return getAllPeople();
    }

    public function getAllPeople()
    {
        $data = json_decode(file_get_contents('https://swapi.co/api/people'), true);
             
        //People::make($data)->resolve();
        //return response()->json(['response' => 'success', 'comments' => 'test comment']);
        return $data; 
      
    }

    public function getPerson(Request $request){

        $data = json_decode(file_get_contents('https://swapi.co/api/people'), true);
        $json_string = json_encode($data, JSON_PRETTY_PRINT);

        $search_person =  $request->route('search_person');
        $arr = [];

        foreach( $data["results"] as $item) {
            if( strtolower($item["name"]) == strtolower($search_person) ){
                $arr[] = $item;
            }
        }
        
        //print_r($arr);
        
        return $arr;
    }
  
}
